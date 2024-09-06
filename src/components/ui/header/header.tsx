import { Image } from '@nextui-org/image'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/navbar'

import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import imgUrl from '../../../assets/static/logoSite.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [top, setTop] = useState<boolean>(true)
  const [visible, setVisible] = useState(false)

  const menuItems = ['Home', 'Sobre', 'Portifólio', 'Serviços', 'Contato']

  function cleanText(texto: string) {
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    let modifiedText = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    modifiedText = modifiedText.replace(/ç/g, 'C')
    return modifiedText
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`text-text fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${!top ? ' shadow-lg backdrop-blur-sm' : ''}`}
    >
      <NavbarContent>
        <li>
          <NavbarBrand>
            <Image
              className={`${
                visible ? 'animate-appearance-in' : 'hidden'
              } transition duration-500 ease-in-out`}
              width={156}
              height={60}
              alt="Logo do site"
              src={imgUrl}
            />
          </NavbarBrand>
        </li>
      </NavbarContent>
      <NavbarContent className="hidden w-full gap-4 sm:flex">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link
              className="w-full cursor-pointer items-center justify-center"
              to={cleanText(item.toLowerCase())}
              color="foreground"
              smooth={true}
              duration={500}
              href="#"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        <li>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item}>
              <Link
                className="w-full cursor-pointer"
                to={cleanText(item.toLowerCase())}
                color="foreground"
                smooth={true}
                duration={500}
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </li>
      </NavbarMenu>
    </Navbar>
  )
}
