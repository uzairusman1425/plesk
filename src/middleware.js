import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    })
    if(!token) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
	return NextResponse.next()
}

export const config = {
	matcher: ["/dashboard/:path*"]
}
