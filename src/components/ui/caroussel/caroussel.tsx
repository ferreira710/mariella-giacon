import { S3 } from '@aws-sdk/client-s3'
import { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { S3_IMAGE_BUCKET } from '../../../config/settings'
import ImageBanner from '../../utils/imageBanner'

interface Props {
    selectedProject: string | null
    setOpen: (value: boolean) => void
    onClose: () => void
}

export default function Caroussel({ selectedProject, setOpen }: Props) {
    const [projectArray, setProjectArray] = useState([])
    const [activeSlide, setActiveSlide] = useState(0)

    const handleSlideChange = () => {
        setActiveSlide(activeSlide + 1)
    }

    useEffect(() => {
        async function getImages() {
            try {
                if (selectedProject) {
                    const projectNameMatch = selectedProject.match(
                        /projetos\/thumbnails\/(.*?)\.jpg/
                    )
                    if (projectNameMatch && projectNameMatch[1]) {
                        const projectName = projectNameMatch[1]
                        const imagePrefix = `projetos/${projectName}/`
                        const client = new S3({
                            region: import.meta.env.VITE_AWS_REGION,
                            credentials: {
                                accessKeyId: import.meta.env
                                    .VITE_AWS_ACCESS_KEY_ID,
                                secretAccessKey: import.meta.env
                                    .VITE_AWS_SECRET_ACCESS_KEY,
                            },
                        })

                        var getImages = {
                            Bucket: 'mariella-giacon-arquitetura',
                            Prefix: imagePrefix,
                            Key: '*.jpg',
                        }

                        client.listObjectsV2(
                            getImages,
                            async function (err: Error | null, data: any) {
                                if (err) console.log(err, err.stack)
                                else {
                                    const images = await data.Contents.filter(
                                        (item: any) => item.Key.endsWith('.jpg')
                                    ).map((image: any) => {
                                        return `${S3_IMAGE_BUCKET}/${image.Key}`
                                    })
                                    setProjectArray(images)
                                }
                            }
                        )
                    }
                }
            } catch (error) {
                throw new Error(String(error))
            }
        }
        getImages()
    }, [selectedProject])

    return (
        <Swiper
            modules={[A11y, Pagination, Navigation]}
            loop
            keyboard
            a11y={{
                prevSlideMessage: 'Imagem anterior',
                nextSlideMessage: 'Próxima imagem',
                firstSlideMessage: 'Primeira imagem do carrossel',
                lastSlideMessage: 'Última imagem do carrossel',
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={handleSlideChange}
            onSlideChange={handleSlideChange}
        >
            {projectArray &&
                projectArray.map((image, index) => (
                    <SwiperSlide key={index}>
                        {selectedProject?.match(
                            /projetos\/thumbnails\/projeto0|projeto12\.jpg/
                        ) && <ImageBanner text={'Fávaro Jr.'} />}
                        <img
                            src={image}
                            alt='Carrossel de imagens do projeto selecionado'
                        />
                        <div className='absolute right-0 top-0 flex items-center justify-end p-2'>
                            <CgClose
                                className='cursor-pointer text-3xl font-thin text-white hover:bg-gray-900 hover:text-white'
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
