import { Image } from '@nextui-org/image'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoSite from '../../../assets/static/logoSite.png'

export default function Footer() {
  return (
    <footer className="bg-background text-text">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12">
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="mb-2">
              <Image className="h-20" width={205} height={80} src={logoSite} alt={'Logo do site'} />
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <p className="mb-2 font-medium text-gray-800">Redes sociais</p>
            <ul className="text-sm">
              <li className="mb-2 flex items-center gap-1">
                <FaInstagram />
                <a
                  href="https://www.instagram.com/mariellagiaconpaisagismo/"
                  target="_blank"
                  className=" transition duration-150 ease-in-out hover:text-gray-900"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2 flex items-center gap-1">
                <FaFacebookSquare />
                <a
                  href="https://www.facebook.com/mariellagiaconv/?locale=pt_BR"
                  target="_blank"
                  className=" transition duration-150 ease-in-out hover:text-gray-900"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2 flex items-center gap-1">
                <FaLinkedinIn />
                <a
                  href="https://www.linkedin.com/in/mariella-giacon-07954a178/"
                  target="_blank"
                  className=" transition duration-150 ease-in-out hover:text-gray-900"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-10 md:col-span-6 lg:col-span-4">
            <p className="mb-2 font-medium text-gray-800">O escritório</p>
            <ul className="text-sm">
              <li className="mb-2">
                <p className=" transition duration-150 ease-in-out hover:text-gray-900">
                  Endereço: Rua Dr. Humberto Levy, 118, Vila Paraíso - 13480-752 - Limeira/SP
                </p>
              </li>
              <li className="mb-2">
                <p className=" transition duration-150 ease-in-out hover:text-gray-900">
                  Telefone: (19) 97166-4121 / (19) 98166-4121
                </p>
              </li>
              <li className="mb-2">
                <p className=" transition duration-150 ease-in-out hover:text-gray-900">
                  E-mail: paisagismomariellagiacon@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8">
          <div className="mr-4 text-sm ">&copy; Mariella Giacon. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
