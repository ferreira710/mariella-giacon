'use client'

import { useEffect, useRef } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Features() {
    const tabs = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement)
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    return (
        <section className="relative bg-bg">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="mx-auto max-w-3xl pb-8 text-center md:pb-8">
                        <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
                            Portifólio
                        </h2>
                        <p className="text-xl text-gray-600">
                            Abaixo alguns de nossos projetos de arquitetura
                            paisagística.
                        </p>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="relative w-full">
                            <div className="relative flex justify-between">
                                <Swiper
                                    spaceBetween={16}
                                    loop
                                    breakpoints={{
                                        540: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <img
                                            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
