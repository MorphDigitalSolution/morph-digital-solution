import { NextResponse } from "next/server";
import { getFirestore, admin } from "@/lib/firebase-admin";
import { isAdminRequest } from "@/lib/api-auth";

export async function GET() {
  try {
    const db = getFirestore();
    const snapshot = await db
      .collection("blogs")
      .orderBy("createdAt", "desc")
      .get();

    const blogs = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        _id: doc.id,
        createdAt:
          data.createdAt?.toDate?.()?.toISOString?.() ?? new Date().toISOString(),
      };
    });

    return NextResponse.json(blogs);
  } catch {
    return NextResponse.json({ message: "Failed to load blogs." }, { status: 500 });
  }
}

export async function POST(request) {
  const isAdmin = await isAdminRequest();
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const { title, content, author, image } = await request.json();
    if (!title?.trim() || !content?.trim() || !author?.trim()) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const db = getFirestore();
    const payload = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      image: typeof image === "string" ? image.trim() : "",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const created = await db.collection("blogs").add(payload);
    const createdDoc = await created.get();
    const createdData = createdDoc.data();

    return NextResponse.json(
      {
        ...createdData,
        id: created.id,
        _id: created.id,
        createdAt:
          createdData?.createdAt?.toDate?.()?.toISOString?.() ?? new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ message: "Failed to create blog." }, { status: 500 });
  }
}
