import { zodResolver } from '@hookform/resolvers/zod'
import { Divider, Image } from '@nextui-org/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as z from 'zod'
import { sendEmail } from '../../services/sendEmail'

const schema = z
    .object({
        name: z.string().min(3).max(50),
        email: z.string().email().min(5).max(50),
        message: z.string().min(10).max(240),
    })
    .required()

type Schema = z.infer<typeof schema>

export default function Contact() {
    const [loading, setLoading] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Schema>({
        resolver: zodResolver(schema),
    })

    async function sendMail({ name, email, message }: Schema) {
        setLoading(true)

        try {
            const response = await sendEmail({ name, email, message })
            if (response.status === 200) {
                toast.success('E-mail enviado com sucesso!', {
                    position: 'top-center',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                })
            } else {
                toast.error('Erro ao enviar o e-mail!', {
                    position: 'top-center',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                })
            }
        } catch (error) {
            toast.error('Erro ao enviar o e-mail!', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
        }
        setLoading(false)
    }

    return (
        <section
            id="contato"
            className="flex w-full flex-col items-center bg-white py-12 md:py-20"
        >
            <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 md:pb-0">
                <div className="mx-auto max-w-3xl text-end">
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
                                        alt="WhatsApp"
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
                                        alt="Facebook"
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
                                        alt="Instagram"
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
                                        alt="LinkedIn"
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <Divider className="hidden md:block" orientation="vertical" />
                <div className="mt-8 flex w-full flex-col bg-container p-4 md:mt-0 md:w-1/2 lg:w-1/3 lg:pr-6">
                    <form
                        action="/send-email"
                        onSubmit={handleSubmit(sendMail)}
                        method="POST"
                    >
                        <div className="relative mb-4">
                            <label className="text-sm leading-7 text-gray-600">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-700 focus:ring-2 focus:ring-transparent"
                                {...register('name')}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                        <div className="relative mb-4">
                            <label className="text-sm leading-7 text-gray-600">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-700 focus:ring-2 focus:ring-transparent"
                                {...register('email')}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="relative mb-4">
                            <label className="text-sm leading-7 text-gray-600">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-700 focus:ring-2 focus:ring-transparent"
                                {...register('message')}
                            />
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                        <input
                            type="submit"
                            placeholder="Enviar"
                            className="cursor-pointer rounded border-0 bg-green-800 px-6 py-2 text-lg text-white hover:bg-emerald-700 focus:outline-none"
                            disabled={loading}
                        />
                        <ToastContainer
                            position="top-center"
                            autoClose={1500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}
