import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Maps a subdomain to the internal route that serves it. Each entry here is
 * a company with its own dedicated page (e.g. basilissa.nanatrade.com).
 * Companies without a page yet are simply not listed, and their subdomain
 * (if it ever resolves) falls through to the NanaTrade group homepage.
 */
const SUBDOMAIN_ROUTES: Record<string, string> = {
  basilissa: "/basilissa",
};

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0];
  const subdomain = hostname.split(".")[0];

  const target = SUBDOMAIN_ROUTES[subdomain];

  if (target && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|logos).*)"],
};
