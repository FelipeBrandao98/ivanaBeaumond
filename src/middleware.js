import { match } from '@formatjs/intl-localematcher'
import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'

let locales = ['en', 'de', 'fr', 'pt-BR']
export let defaultLocale = 'pt-BR'

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
  const pathname = request.nextUrl.pathname.replace(
    /\/en|\/de|\/fr|\/pt-BR/g,
    '',
  )
  const cookieFromRequest = request.cookies.get('lang')

  // check if admin route
  if (request.nextUrl.pathname.startsWith('/ib-login')) {
    return NextResponse.next()
  }
  //

  // check if have cookie from request and use this cookie
  if (cookieFromRequest) {
    locale = cookieFromRequest.value
  }

  // check if have lang in pathname and use this
  if (request.nextUrl.pathname.split('/')[1]) {
    const newLocale = request.nextUrl.pathname.split('/')[1]

    if (newLocale === 'en') {
      locale = newLocale
    }
    if (newLocale === 'de') {
      locale = newLocale
    }
    if (newLocale === 'fr') {
      locale = newLocale
    }
    if (newLocale === 'pt-BR') {
      locale = newLocale
    }
  }

  // create url
  const newUrl = new URL(
    `/${locale}${pathname ? pathname : ''}`,
    request.nextUrl,
  )
  //

  // return new url
  const response = NextResponse.rewrite(newUrl)
  response.cookies.delete('lang')
  response.cookies.set('lang', locale)

  return response
  //
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/[lang]/:path',
    // '/((?!_next|api|favicon.ico|).*)',
    // '/((?!api|_next|.*\\..*).*)',
  ],
}
