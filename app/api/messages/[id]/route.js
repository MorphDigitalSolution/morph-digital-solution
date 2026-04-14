import { NextResponse } from "next/server";
import { getFirestore } from "@/lib/firebase-admin";
import { isAdminRequest } from "@/lib/api-auth";

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const isAdmin = await isAdminRequest();
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const db = getFirestore();
    await db.collection("messages").doc(id).delete();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Failed to delete message." }, { status: 500 });
  }
}
