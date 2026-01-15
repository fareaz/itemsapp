import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();

  if (body.email === "admin@test.com" && body.password === "123456") {
    const cookieStore = await cookies();

    cookieStore.set(
      "user",
      JSON.stringify({ email: body.email }),
      { path: "/" }
    );

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
