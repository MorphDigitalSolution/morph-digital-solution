import { NextResponse } from "next/server";
import {
  createAdminSessionToken,
  getAdminCookieName,
  getAdminSessionMaxAge,
} from "@/lib/admin-session";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { message: "Admin credentials are not configured." },
        { status: 500 }
      );
    }

    if (username !== validUsername || password !== validPassword) {
      return NextResponse.json(
        { message: "Incorrect username or password." },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken(username);
    const response = NextResponse.json({ ok: true });

    response.cookies.set(getAdminCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: getAdminSessionMaxAge(),
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
