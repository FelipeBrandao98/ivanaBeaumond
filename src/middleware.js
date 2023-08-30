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

  if (cookieFromRequest.value) {
    locale = cookieFromRequest.value
  }

  if (request.nextUrl.pathname.split('/')[1]) {
    const newLocale = request.nextUrl.pathname.split('/')[1]

    if (newLocale === 'en') {
      console.log(`Instancia passada 'en'`)
      locale = newLocale
    }
    if (newLocale === 'de') {
      console.log(`Instancia passada 'de'`)
      locale = newLocale
    }
    if (newLocale === 'fr') {
      console.log(`Instancia passada 'fr'`)
      locale = newLocale
    }
    if (newLocale === 'pt-BR') {
      console.log(`Instancia passada 'pt-BR'`)
      locale = newLocale
    }
  }

  const newUrl = new URL(
    `/${locale}${pathname ? pathname : ''}`,
    request.nextUrl,
  )

  const response = NextResponse.rewrite(newUrl)
  response.cookies.delete('lang')
  response.cookies.set('lang', locale)
  const cookieInResponse = response.cookies.get('lang')

  console.log('-------------------------')
  console.log(`locale: ${locale}`)
  console.log(`pathname: ${pathname}`)
  console.log(`newUrl: ${newUrl}`)
  console.log(`cookieFromRequest: ${cookieFromRequest.value}`)
  console.log(`cookieInResponse: ${cookieInResponse.value}`)
  console.log('_________________________')

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/[lang]/:path',
    // '/((?!_next|api|favicon.ico|).*)',
    // '/((?!api|_next|.*\\..*).*)',
  ],
}
