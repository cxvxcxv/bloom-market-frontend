import { NextRequest, NextResponse } from 'next/server';

import { EnumTokens } from './types/token.types';

//for more complex middleware functionality, like checking for roles, it has to send a request on server for getting a user's role and making further actions
export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;
  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
  const isAuthPage = url.includes('/auth');

  if (isAuthPage && refreshToken)
    return NextResponse.redirect(new URL('/', url));
  if (isAuthPage) return NextResponse.next();
  if (!refreshToken) return NextResponse.redirect(new URL('/auth', url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard:path*', '/auth:path'],
};
