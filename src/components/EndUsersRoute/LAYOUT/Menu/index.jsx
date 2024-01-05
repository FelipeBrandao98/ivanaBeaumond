'use client'

{
  /* 
    This is the "Menu" component, it is responsible for creating the upper Menu
    rendered on all pages of the application, it contains the following functions:
      - 1) Navigate between application pages;
      - 2) Change the language option;
      - 3) Call the create schedules component, which in turn becomes global
      throughout the application, due to being instantiated in the Menu component.

    Other menu functions (responsible for making it "Client Side Rendering") are
    styling functions, including:
      - 1 ) "Short", the short state is used to shorten the menu when scrolling
      the screen;
      - 2) "Mobile Menu", the Mobile Menu is a component that encapsulates menu
      items, to be rearranged separately into an open/close menu when on mobile
  */
}

// React imports
import { useEffect, useContext, useState, useCallback } from 'react'

// Next.js Components imports
import Image from 'next/image'
import logo from '@/../public/logo-white.svg'
import Link from 'next/link'

// Icons imports
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'

// Context imports
import { AppointmentContext } from '@/Context/AppointmentContext'

// Components imports
import TraductionButton from './TraductionButton'
import MenuMobile from './MenuMobile'
import SearchButton from './SearchButton'
import AppointmentBanner from './AppointmentBanner'
import AppointmentButton from './AppointmentButton'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Atoms imports
import MenuContainer from '@/atoms/EndUsersRoute/Layout/Menu/MenuContainer'
import MenuLogoInHeader from '@/atoms/EndUsersRoute/Layout/Menu/MenuLogoInHeader'
import MenuPagesArea from '@/atoms/EndUsersRoute/Layout/Menu/MenuPagesArea'
import MenuSocialMedia from '@/atoms/EndUsersRoute/Layout/Menu/MenuSocialMedia'
import AudioPlayer from './AudioPlayer'
//

// Component Declaration
export default function Menu({ lang, categoryNews, categoryCollections }) {
  // Instanciate and initialize Contexts functions
  const { appointment } = useContext(AppointmentContext)

  // States declaratios
  const [short, setShort] = useState(false)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Functions to manipulate window object
  const toggleShort = useCallback(() => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setShort(true)
    } else if (scrolled <= 300) {
      setShort(false)
    }
  }, [])
  //

  // Use Effects
  useEffect(() => {
    window.addEventListener('scroll', toggleShort)
  }, [toggleShort])

  // Return components, with functions to call API and language
  return (
    <>
      {
        // short is a variable that represents when the menu is suspended,
        // when scrolling down the screen
      }
      <MenuContainer short={short ? short : undefined}>
        <MenuLogoInHeader short={short ? short : undefined}>
          <Image
            src={logo}
            alt="Logo Ivana Beaumond | Ateliê Francês"
            width={300}
            height={50}
          />
        </MenuLogoInHeader>

        {/* <SearchButton lang={lang} short={short ? short : undefined} /> */}

        <AudioPlayer short={short ? short : undefined} />

        <TraductionButton lang={lang} short={short ? short : undefined} />

        {
          // "MenuMobile" is the component that represents the area
          // to be hidden when in mobile mode, when in desktop mode,
          // child components are normally organized on the screen
          // corresponding to the Menu
        }

        <MenuMobile lang={lang} short={short ? short : undefined}>
          <AppointmentButton lang={lang} short={short ? short : undefined}>
            {languageTraducted.layout.menu.appointment}
          </AppointmentButton>

          <MenuPagesArea lang={lang} short={short ? short : undefined}>
            <ul>
              <li>
                <Link
                  href={{
                    pathname: `${languageTraducted.layout.menu.menuItemOne.route}`,
                    lang: lang,
                  }}
                  lang={lang}
                  prefetch
                  replace={true}
                >
                  {languageTraducted.layout.menu.menuItemOne.name}
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `${languageTraducted.layout.menu.menuItemTwo.route}`,
                    lang: lang,
                  }}
                  lang={lang}
                  prefetch
                  replace={true}
                >
                  {languageTraducted.layout.menu.menuItemTwo.name}
                </Link>
                <div>
                  <ul>
                    {categoryCollections.map((catCollection) => {
                      return (
                        <li key={catCollection.id}>
                          <Link
                            href={{
                              pathname: `/colecoes/categoria/${catCollection.id}`,
                              lang: lang,
                            }}
                            lang={lang}
                            prefetch
                            replace={true}
                          >
                            {catCollection.description}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `${languageTraducted.layout.menu.menuItemThree.route}`,
                    lang: lang,
                  }}
                  lang={lang}
                  prefetch
                  replace={true}
                >
                  {languageTraducted.layout.menu.menuItemThree.name}
                </Link>
                <div>
                  <ul>
                    {categoryNews.map((catNews) => {
                      return (
                        <li key={catNews.id}>
                          <Link
                            href={{
                              pathname: `/noticias/categoria/${catNews.id}/1`,
                              lang: lang,
                            }}
                            lang={lang}
                            prefetch
                            replace={true}
                          >
                            {catNews.description}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `${languageTraducted.layout.menu.menuItemFour.route}`,
                    lang: lang,
                  }}
                  lang={lang}
                  prefetch
                  replace={true}
                >
                  {languageTraducted.layout.menu.menuItemFour.name}
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `${languageTraducted.layout.menu.menuItemFive.route}`,
                    lang: lang,
                  }}
                  lang={lang}
                  prefetch
                  replace={true}
                >
                  {languageTraducted.layout.menu.menuItemFive.name}
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `${languageTraducted.layout.menu.menuItemSix.route}`,
                    lang: lang,
                  }}
                  lang={lang}
                  prefetch
                  replace={true}
                >
                  {languageTraducted.layout.menu.menuItemSix.name}
                </Link>
              </li>
            </ul>
          </MenuPagesArea>

          <MenuSocialMedia lang={lang} short={short ? short : undefined}>
            <ul>
              <li>
                <Link href="https://www.instagram.com/ivanabeaumond/">
                  @ivanabeaumond <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/IvanaBeaumond/">
                  IvanaBeaumond <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/ivanaparisdebutantes/">
                  @ivanaparisdebutantes <FaInstagram />
                </Link>
              </li>
            </ul>
          </MenuSocialMedia>
        </MenuMobile>
      </MenuContainer>

      {appointment && <AppointmentBanner lang={lang} />}
    </>
  )
  //
}
