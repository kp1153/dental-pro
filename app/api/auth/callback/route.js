import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${process.env.APP_URL}/login?error=no_code`);
  }

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: "https://www.dentistanwarali.online/api/auth/callback",
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    return NextResponse.redirect(`${process.env.APP_URL}/login?error=token_failed`);
  }

  const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });

  const googleUser = await userRes.json();
  if (!googleUser.email) {
    return NextResponse.redirect(`${process.env.APP_URL}/login?error=user_failed`);
  }

  const ALLOWED_EMAILS = [
    "prasad.kamta@gmail.com",
    "dentistanwarali@gmail.com",
  ];

  if (!ALLOWED_EMAILS.includes(googleUser.email)) {
    return NextResponse.redirect(`${process.env.APP_URL}/login?error=unauthorized`);
  }

  const existing = await db.select().from(users).where(eq(users.email, googleUser.email));
  const now = new Date();

  if (existing.length === 0) {
    const trialExpiry = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    await db.insert(users).values({
      email: googleUser.email,
      name: googleUser.name,
      status: "trial",
      trialStart: now,
      expiryDate: trialExpiry,
    });
  } else {
    const user = existing[0];
    if (user.status !== "active") {
      const expiry = new Date(user.expiryDate);
      if (now > expiry) {
        await db.update(users)
          .set({ status: "expired" })
          .where(eq(users.email, googleUser.email));
        return NextResponse.redirect(
          `https://web-developer-kp.com/payment?software=dental`
        );
      }
    }
  }

  const cookieStore = await cookies();

  cookieStore.set("role", "doctor", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  cookieStore.set("doctor_email", googleUser.email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  cookieStore.set("doctor_name", googleUser.name || "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return NextResponse.redirect(`${process.env.APP_URL}/dashboard`);
}