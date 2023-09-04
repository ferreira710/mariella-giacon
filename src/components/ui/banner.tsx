import { Image } from '@nextui-org/react'
import { S3_IMAGE_BUCKET } from '../../config/settings'

export default function Banner() {
    return (
        <div className="min-h m-auto flex w-full justify-center overflow-hidden rounded-none xl:h-96">
            <Image
                className="h-full w-full rounded-none xl:rounded-2xl"
                width={1920}
                height={384}
                alt="Banner"
                src={`${S3_IMAGE_BUCKET}/banner.png`}
            />
        </div>
    )
}
