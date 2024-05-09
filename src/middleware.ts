import { NextRequest, NextResponse } from "next/server";
import { EnumAccessTokens } from "./services/auth-token.service";
import { DASHBOARD_PAGES } from "./config/pages-url.config";

export async function middleware(
  request: NextRequest,
  response: NextResponse,
  ) {
  const {url, cookies} = request;

  const refreshToken = cookies.get(EnumAccessTokens.REFRESH_TOKEN)?.value;

  const isDashboardPage = url.includes('/i');
  const isAuthPage = url.includes('/auth');

  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if(isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url));
  }

  if(isAuthPage) {
    return NextResponse.next();
  }

  if(!refreshToken) {
    return NextResponse.redirect(new URL('auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  mather: ['/i/:path*','/auth/:path']
}