import { NextResponse } from "next/server";
import { getFirestore } from "@/lib/firebase-admin";
import { isAdminRequest } from "@/lib/api-auth";

export async function GET(_request, { params }) {
  const { id } = await params;
  try {
    const db = getFirestore();
    const doc = await db.collection("blogs").doc(id).get();

    if (!doc.exists) {
      return NextResponse.json({ message: "Blog not found." }, { status: 404 });
    }

    const data = doc.data();
    return NextResponse.json({
      id: doc.id,
      _id: doc.id,
      ...data,
      createdAt:
        data.createdAt?.toDate?.()?.toISOString?.() ?? new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ message: "Failed to load blog." }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
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
    const ref = db.collection("blogs").doc(id);
    const existing = await ref.get();
    if (!existing.exists) {
      return NextResponse.json({ message: "Blog not found." }, { status: 404 });
    }

    const updatePayload = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
    };

    if (typeof image === "string") {
      updatePayload.image = image.trim();
    }

    await ref.update(updatePayload);

    const updated = await ref.get();
    const data = updated.data();
    return NextResponse.json({
      id: updated.id,
      _id: updated.id,
      ...data,
      createdAt:
        data.createdAt?.toDate?.()?.toISOString?.() ?? new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ message: "Failed to update blog." }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  console.log("DELETE blog called with id:", id);
  const isAdmin = await isAdminRequest();
  console.log("isAdmin:", isAdmin);
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const db = getFirestore();
    console.log("Deleting blog with id:", id);
    await db.collection("blogs").doc(id).delete();
    console.log("Blog deleted successfully");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ message: "Failed to delete blog." }, { status: 500 });
  }
}
