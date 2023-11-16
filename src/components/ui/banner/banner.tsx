import { Image } from '@nextui-org/react'
import { S3_IMAGE_BUCKET } from '../../../config/settings'

export default function Banner() {
    return (
        <div className='flex h-[650px] w-full justify-center overflow-hidden'>
            <Image
                id='kenburns-top'
                className='h-full w-full rounded-none object-cover object-bottom'
                width={1920}
                height={650}
                alt='Banner com a foto da execução de um dos projetos da Mariella Giacon contendo uma piscina, um jardim com marantas charuto, guaimbês, um jasmin manga, duas espreguiçadeiras e alguns sofás externos em cima de um deck.'
                src={`${S3_IMAGE_BUCKET}/banner.jpg`}
            />
        </div>
    )
}
