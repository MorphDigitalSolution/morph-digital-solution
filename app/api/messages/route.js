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
      .collection("messages")
      .orderBy("sentAt", "desc")
      .get();

    const messages = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        _id: doc.id,
        ...data,
        sentAt: data.sentAt?.toDate?.()?.toISOString?.() ?? new Date().toISOString(),
      };
    });

    return NextResponse.json(messages);
  } catch {
    return NextResponse.json({ message: "Failed to load messages." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ message: "Name, email and phone are required." }, { status: 400 });
    }

    const db = getFirestore();
    await db.collection("messages").add({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message?.trim() || "",
      sentAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}
