import { NextResponse } from "next/server";
import { getFirestore } from "@/lib/firebase-admin";
import { isAdminRequest } from "@/lib/api-auth";

export async function DELETE(_request, { params }) {
  const { id } = await params;
  console.log("DELETE subscriber called with id:", id);
  const isAdmin = await isAdminRequest();
  console.log("isAdmin:", isAdmin);
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const db = getFirestore();
    console.log("Deleting subscriber with id:", id);
    await db.collection("subscribers").doc(id).delete();
    console.log("Subscriber deleted successfully");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return NextResponse.json({ message: "Failed to delete subscriber." }, { status: 500 });
  }
}
