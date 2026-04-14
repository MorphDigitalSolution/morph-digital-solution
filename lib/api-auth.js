import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminSessionToken } from "./admin-session";

export async function isAdminRequest() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;
  return verifyAdminSessionToken(token);
}
