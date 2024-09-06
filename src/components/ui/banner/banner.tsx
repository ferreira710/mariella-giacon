import { Image } from '@nextui-org/image'
import banner from '../../../assets/static/banner.jpg'

export default function Banner() {
  return (
    <div className="flex w-full h-auto md:h-[560px] justify-center items-center overflow-hidden bg-background">
      <Image
        id="kenburns-top"
        className="h-full w-auto object-cover object-center rounded-none"
        alt="Banner com a foto da execução de um dos projetos da Mariella Giacon contendo uma piscina, um jardim com marantas charuto, guaimbês, um jasmin manga, duas espreguiçadeiras e alguns sofás externos em cima de um deck."
        src={banner}
      />
    </div>
  )
}
