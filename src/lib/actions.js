"use server";

import { cookies } from "next/headers";

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.set("auth", "", { maxAge: 0, path: "/" });
  cookieStore.set("user", "", { maxAge: 0, path: "/" });
}
