import {
    Image,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { S3_IMAGE_BUCKET } from '../../../config/settings'
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [top, setTop] = useState<boolean>(true)
    const [visible, setVisible] = useState(false)

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    function cleanText(texto: string) {
        texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        texto = texto.replace(/ç/g, 'C')
        return texto
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
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)

        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    }, [])

    const menuItems = ['Home', 'Sobre', 'Portifólio', 'Serviços', 'Contato']

    return (
        <header
            className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
                !top ? ' shadow-lg backdrop-blur-sm' : ''
            }`}
        >
            <Navbar onMenuOpenChange={setIsMenuOpen} className='text-text'>
                <NavbarContent>
                    <li>
                        <NavbarBrand>
                            <Image
                                className={`${
                                    visible ? 'animate-appearance-in' : 'hidden'
                                } transition duration-500 ease-in-out`}
                                alt='Logo do site'
                                src={`${S3_IMAGE_BUCKET}/logoSite.png`}
                                width={156}
                                height={61}
                            />
                        </NavbarBrand>
                    </li>
                </NavbarContent>
                <NavbarContent className='hidden w-full gap-4 sm:flex'>
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                className='w-full cursor-pointer items-center justify-center'
                                to={cleanText(item.toLowerCase())}
                                color='foreground'
                                smooth={true}
                                duration={500}
                                href='#'
                            >
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        className='sm:hidden'
                    />
                </NavbarContent>
                <NavbarMenu>
                    <li>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    className='w-full cursor-pointer'
                                    to={cleanText(item.toLowerCase())}
                                    color='foreground'
                                    smooth={true}
                                    duration={500}
                                    href='#'
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </li>
                </NavbarMenu>
            </Navbar>
        </header>
    )
}
