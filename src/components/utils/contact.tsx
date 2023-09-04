import { Divider, Image } from '@nextui-org/react'
import { z } from 'zod'

export default function Contact() {
    const mySchema = z.string()
    mySchema.parse('hello')
    return (
        <section className="flex w-full flex-col items-center bg-bg py-12 md:py-20">
            <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 md:pb-0">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-heading mb-4 text-3xl font-bold  md:text-4xl">
                        Contato
                    </h2>
                    <p className="mb-8 text-xl text-gray-600">
                        Fale conosco através do formulário abaixo ou por nossas
                        redes sociais.
                    </p>
                </div>
            </div>
            <div className=" flex w-full flex-col md:ml-auto md:flex-row md:items-center md:justify-center md:gap-8">
                <div className="flex flex-col px-4 text-lg">
                    <ul className="flex flex-col md:gap-8">
                        <li className="mb-2">
                            <p className="break-words break-all text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                                <strong>Endereço: </strong>
                                Rua 7 de Setembro, 717 - Sala 5 - Centro -
                                Limeira/SP
                            </p>
                        </li>
                        <li className="mb-2">
                            <p className="break-words break-all text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                                <strong>Telefone: </strong> (19) 97166-4121 /
                                (19) 98166-4121
                            </p>
                        </li>
                        <li className="mb-2">
                            <p className="break-words break-all text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                                <strong>E-mail: </strong>
                                paisagismomariellagiacon@gmail.com /
                                mariellagiaconv@gmail.com
                            </p>
                        </li>
                        <br className="md:hidden" />
                        <li className="flex flex-col gap-2">
                            <p className="text-gray-600">Redes sociais</p>
                            <div className="flex flex-row">
                                <a
                                    href="https://wa.me/5519971664121"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="https://img.icons8.com/fluent/48/000000/whatsapp.png"
                                        width={48}
                                        height={48}
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/mariellagiaconv/?locale=pt_BR"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                                        width={48}
                                        height={48}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/mariellagiaconpaisagismo/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                                        width={48}
                                        height={48}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mariella-giacon-07954a178/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                                        width={48}
                                        height={48}
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <Divider className="hidden md:block" orientation="vertical" />
                <div className="mt-8 flex w-full flex-col bg-bg px-4 md:mt-0 md:w-1/2 md:py-8 lg:w-1/3 lg:pr-6">
                    <div className="relative mb-4">
                        <label className="text-sm leading-7 text-gray-600">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-700 focus:ring-2 focus:ring-transparent"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label className="text-sm leading-7 text-gray-600">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-700 focus:ring-2 focus:ring-transparent"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label className="text-sm leading-7 text-gray-600">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-700 focus:ring-2 focus:ring-transparent"
                        ></textarea>
                    </div>
                    <button className="rounded border-0 bg-green-800 px-6 py-2 text-lg text-white hover:bg-emerald-700 focus:outline-none">
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    )
}
