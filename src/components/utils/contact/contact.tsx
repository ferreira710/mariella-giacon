import { Image } from '@nextui-org/image'

export default function Contact() {
  return (
    <section
      id="contato"
      className="flex w-full flex-col items-center bg-secondary py-12 text-text md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 md:pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold  md:text-4xl">Contato</h2>
          <p className="mb-8 text-xl ">Entre em contato conosco através dos canais abaixo:</p>
        </div>
      </div>
      <div className=" flex w-full flex-col md:ml-auto md:flex-row md:items-center md:justify-center md:gap-8">
        <div className="flex flex-col px-4 text-lg">
          <ul className="flex flex-col gap-4">
            <li className="mb-2">
              <p className=" transition duration-150 ease-in-out hover:text-gray-900">
                <strong>Endereço: </strong>
                Rua Dr. Humberto Levy, 118, Vila Paraíso - 13480-752 - Limeira/SP
              </p>
            </li>
            <li className="mb-2">
              <p className=" transition duration-150 ease-in-out hover:text-gray-900">
                <strong>Telefone: </strong> (19) 97166-4121 / (19) 98166-4121
              </p>
            </li>
            <li className="mb-2">
              <p className=" transition duration-150 ease-in-out hover:text-gray-900">
                <strong>E-mail: </strong>
                paisagismomariellagiacon@gmail.com / mariellagiaconv@gmail.com
              </p>
            </li>
            <br className="md:hidden" />
            <li className="flex flex-col items-center gap-2">
              <p className="">Redes sociais:</p>
              <div className="flex flex-row">
                <a href="https://wa.me/5519971664121" target="_blank" rel="noreferrer">
                  <Image
                    src="https://img.icons8.com/fluent/48/000000/whatsapp.png"
                    width={48}
                    height={48}
                    alt="Logo do WhatsApp"
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
                    alt="Logo do Facebook"
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
                    alt="Logo do Instagram"
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
                    alt="Logo do LinkedIn"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
