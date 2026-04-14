import { NextResponse } from "next/server";
import { getFirestore, admin } from "@/lib/firebase-admin";
import { isAdminRequest } from "@/lib/api-auth";

export async function GET() {
  const isAdmin = await isAdminRequest();
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const db = getFirestore();
    const snapshot = await db
      .collection("subscribers")
      .orderBy("subscribedAt", "desc")
      .get();

    const subscribers = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        _id: doc.id,
        ...data,
        subscribedAt:
          data.subscribedAt?.toDate?.()?.toISOString?.() ?? new Date().toISOString(),
      };
    });

    return NextResponse.json(subscribers);
  } catch {
    return NextResponse.json({ message: "Failed to load subscribers." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = email?.trim().toLowerCase();
    if (!normalizedEmail) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const db = getFirestore();
    const existing = await db
      .collection("subscribers")
      .where("email", "==", normalizedEmail)
      .limit(1)
      .get();

    if (!existing.empty) {
      return NextResponse.json({ message: "Email already subscribed." }, { status: 409 });
    }

    await db.collection("subscribers").add({
      email: normalizedEmail,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Failed to subscribe." }, { status: 500 });
  }
}
