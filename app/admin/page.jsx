// app/admin/page.js
import Link from "next/link";
import AdminLayout from "./layout";

export default function AdminPage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-3xl font-semibold">Welcome back Admin!</div>
        <Link href="/admin/dashboard" className="bg-slate-300 mt-5 p-4 rounded-full">Enter Admin Dashboard</Link>
      </div>
    </>
  );
}
