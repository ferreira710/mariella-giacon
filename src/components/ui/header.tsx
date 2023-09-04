import {
    Image,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { S3_IMAGE_BUCKET } from '../../config/settings'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [top, setTop] = useState<boolean>(true)

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    const menuItems = ['Home', 'Portifólio', 'Sobre', 'Contato']

    return (
        <header
            className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
                !top ? 'bg-white shadow-lg backdrop-blur-sm' : ''
            }`}
        >
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarBrand className="flex">
                        <Image
                            src={`${S3_IMAGE_BUCKET}/logoSite.png`}
                            width={150}
                        />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden gap-4 sm:flex">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                href="#"
                                size="lg"
                                color="foreground"
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
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                href="#"
                                size="lg"
                                color="foreground"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    )
}
