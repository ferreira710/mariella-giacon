import { Image } from '@nextui-org/react'
import { CgInstagram } from 'react-icons/cg'
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa'
import { S3_IMAGE_BUCKET } from '../../../config/settings'

export default function Footer() {
    return (
        <footer className='bg-white'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12'>
                    <div className='sm:col-span-12 lg:col-span-4'>
                        <div className='mb-2'>
                            <Image
                                className='h-20'
                                src={`${S3_IMAGE_BUCKET}/logoSite.png`}
                                alt={'Logo Mariella Giacon'}
                            />
                        </div>
                    </div>

                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
                        <h6 className='mb-2 font-medium text-gray-800'>
                            Redes sociais
                        </h6>
                        <ul className='text-sm'>
                            <li className='mb-2 flex items-center gap-1'>
                                <CgInstagram />
                                <a
                                    href='https://www.instagram.com/mariellagiaconpaisagismo/'
                                    target='_blank'
                                    className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className='mb-2 flex items-center gap-1'>
                                <FaFacebookSquare />
                                <a
                                    href='https://www.facebook.com/mariellagiaconv/?locale=pt_BR'
                                    target='_blank'
                                    className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className='mb-2 flex items-center gap-1'>
                                <FaLinkedinIn />
                                <a
                                    href='https://www.linkedin.com/in/mariella-giacon-07954a178/'
                                    target='_blank'
                                    className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='sm:col-span-10 md:col-span-6 lg:col-span-4'>
                        <h6 className='mb-2 font-medium text-gray-800'>
                            O escritório
                        </h6>
                        <ul className='text-sm'>
                            <li className='mb-2'>
                                <p className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                                    Endereço: Rua 7 de Setembro, 717 - Sala 5 -
                                    Centro - Limeira/SP
                                </p>
                            </li>
                            <li className='mb-2'>
                                <p className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                                    Telefone: (19) 97166-4121 / (19) 98166-4121
                                </p>
                            </li>
                            <li className='mb-2'>
                                <p className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                                    E-mail: paisagismomariellagiacon@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8'>
                    <div className='mr-4 text-sm text-gray-600'>
                        &copy; Mariella Giacon. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}
