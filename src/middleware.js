import { match } from '@formatjs/intl-localematcher'
import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'

let locales = ['en', 'de', 'fr', 'pt-BR']
export let defaultLocale = 'en'

function getLocale(request) {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get('accept-language')
  if (acceptLanguage) {
    headers.set('Accept-Language', acceptLanguage.replaceAll('_', '-'))
  }

  const headersObject = Object.fromEntries(headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  let locale = getLocale(request) ?? defaultLocale
  const pathname = request.nextUrl.pathname

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl)

  // e.g. incoming request is /products
  // The new URL is now /en/products

  console.log(`pathname: ${pathname}`)
  console.log(`locale: ${locale}`)
  console.log(`newUrl: ${newUrl}`)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    '/',
    // '/((?!_next|api|favicon.ico|).*)',
    // '/((?!api|_next|.*\\..*).*)',
  ],
}
