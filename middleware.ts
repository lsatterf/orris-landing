import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect only /admin (and subpaths)
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;

  // If env vars missing, fail closed in production
  if (!user || !pass) {
    return new NextResponse("Admin not configured", { status: 503 });
  }

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Orris Admin"' },
    });
  }

  const b64 = auth.split(" ")[1] ?? "";
  const [u, p] = Buffer.from(b64, "base64").toString().split(":");

  if (u === user && p === pass) return NextResponse.next();

  return new NextResponse("Unauthorized", { status: 401 });
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

