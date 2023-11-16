import { Image } from '@nextui-org/react'
import { S3_IMAGE_BUCKET } from '../../../config/settings'

export default function Logo() {
    return (
        <div className='min-h flex w-full justify-center bg-background p-8'>
            <Image
                className='h-full w-full'
                width={360}
                height={256}
                alt='Logo contendo o nome do escritório: Mariella Giacon'
                src={`${S3_IMAGE_BUCKET}/logoSite.png`}
            />
        </div>
    )
}
