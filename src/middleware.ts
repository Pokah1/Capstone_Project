import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data, error } = await supabase.auth.getSession();

  // Detailed logs for debugging
  console.log("Middleware - Request URL:", req.url);
  console.log("Middleware - Session Data:", data);
  console.log("Middleware - Session Error:", error);

  // Check if session is present
  if (error || !data.session) {
    console.log("Middleware - No session found. Redirecting to /formpage");
    return NextResponse.redirect(new URL('/formpage', req.url));
  }

  console.log("Middleware - Session found. Proceeding.");
  return res;
}

export const config = {
  matcher: ['/socials/:path*'], 
};
