'use client'

import { S3 } from '@aws-sdk/client-s3'
import { useEffect, useRef, useState } from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { S3_IMAGE_BUCKET } from '../../../config/settings'
import Carousel from '../../ui/caroussel/caroussel'

export default function Features() {
    const [open, setOpen] = useState(false)
    const [projectArray, setProjectArray] = useState([])
    const [selectedProject, setSelectedProject] = useState(null)
    const [activeSlide, setActiveSlide] = useState(0)

    const swiper = useSwiper()

    const tabs = useRef<HTMLDivElement>(null)

    const settings = {
        spaceBetween: 16,
        breakpoints: {
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
    }

    const handleSlideChange = () => {
        setActiveSlide(swiper?.realIndex)
    }

    const handleInit = () => {
        setActiveSlide(0)
    }

    useEffect(() => {
        handleInit()
    }, [])

    useEffect(() => {
        async function getImages() {
            try {
                const client = new S3({
                    region: import.meta.env.VITE_AWS_REGION,
                    credentials: {
                        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
                        secretAccessKey: import.meta.env
                            .VITE_AWS_SECRET_ACCESS_KEY,
                    },
                })

                var getThumbnails = {
                    Bucket: 'mariella-giacon-arquitetura',
                    Prefix: 'projetos/thumbnails',
                    Key: '*.jpg',
                }

                client.listObjectsV2(
                    getThumbnails,
                    function (err: Error | null, data: any) {
                        if (err) console.log(err, err.stack)
                        else {
                            const images = data.Contents.filter((item: any) =>
                                item.Key.endsWith('.jpg')
                            ).map((image: any) => {
                                return `${S3_IMAGE_BUCKET}/${image.Key}`
                            })
                            setProjectArray(images)
                        }
                    }
                )
            } catch (error) {
                throw new Error(String(error))
            }
        }
        getImages()
    }, [])

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement)
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    return (
        <section id='portifolio' className='relative bg-white'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='py-12 md:py-20'>
                    <div className='mx-auto max-w-3xl pb-8 text-end md:pb-8'>
                        <h2 className='font-heading mb-4 text-3xl font-bold md:text-4xl'>
                            Portifólio
                        </h2>
                        <p className='text-xl text-gray-600'>
                            Nossa proposta final é feita depois de entender
                            todas as necessidades, características e escolha de
                            cada projeto. No entanto através deste portifólio,
                            você poderá ter uma ideia base dos nossos serviços.
                        </p>
                    </div>
                    <Swiper
                        loop
                        direction='horizontal'
                        modules={[Navigation, Pagination, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={handleSlideChange}
                        onSlideChange={handleSlideChange}
                        {...settings}
                    >
                        {projectArray
                            .sort((a, b) => {
                                const aIndex = (a as string).split('.')[0]
                                const bIndex = (b as string).split('.')[0]

                                return parseInt(aIndex) - parseInt(bIndex)
                            })
                            .map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        className='flex h-96 w-full object-cover'
                                        src={image}
                                        alt=''
                                        onClick={() => {
                                            setOpen(true)
                                            const clickedProject =
                                                projectArray[index]
                                            setSelectedProject(clickedProject)
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            maxWidth: '100%',
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
            <Modal
                classNames={{
                    modal: 'customModal',
                    overlay: 'customOverlay',
                    closeIcon: 'customCloseIcon',
                }}
                blockScroll
                open={open}
                onClose={() => {
                    setOpen(false)
                    setSelectedProject(null)
                }}
                center
                showCloseIcon={false}
                closeIcon={null}
            >
                <Carousel
                    selectedProject={selectedProject}
                    onClose={() => {
                        setOpen(false)
                        setSelectedProject(null)
                    }}
                    setOpen={setOpen}
                />
            </Modal>
        </section>
    )
}
