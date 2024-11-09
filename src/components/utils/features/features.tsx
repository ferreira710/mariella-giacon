import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useEffect, useRef, useState } from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Carousel from '../../ui/caroussel'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Features() {
  const [open, setOpen] = useState(false)
  const [projectArray, setProjectArray] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const swiper = useSwiper()
  const tabs = useRef<HTMLDivElement>(null)

  const settings = {
    spaceBetween: 16,
    breakpoints: {
      540: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  }

  const handleSlideChange = () => {
    setActiveSlide(activeSlide + 1)
  }

  const heightFix = useCallback(() => {
    if (tabs.current?.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }, [])

  const handleInit = useCallback(() => {
    setActiveSlide(swiper?.activeIndex || 0)
  }, [swiper])

  useEffect(() => {
    heightFix()
  }, [heightFix])

  useEffect(() => {
    handleInit()
  }, [handleInit])

  useEffect(() => {
    async function getImages() {
      try {
        const images = import.meta.glob('/src/assets/static/projetos/thumbnails/*.jpg', {
          eager: true
        })

        const imageArray = Object.values(images).map(
          (module) => (module as { default: string }).default
        )

        setProjectArray(imageArray)
      } catch (error) {
        console.error('Erro ao carregar as imagens:', error)
      }
    }
    getImages()
  }, [])

  return (
    <section id="portifolio" className="relative bg-secondary text-text">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-6xl pb-8 md:pb-8">
            <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">Portifólio</h2>
            <p className="text-xl ">
              Nossa proposta final é feita depois de entender todas as necessidades, características
              e escolha de cada projeto. No entanto através deste portifólio, você poderá ter uma
              ideia base dos nossos serviços.
            </p>
          </div>
          <Swiper
            direction="horizontal"
            modules={[Navigation, Pagination, A11y]}
            a11y={{
              prevSlideMessage: 'Imagem anterior',
              nextSlideMessage: 'Próxima imagem',
              firstSlideMessage: 'Primeira imagem do carrossel',
              lastSlideMessage: 'Última imagem do carrossel'
            }}
            keyboard
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

                return Number.parseInt(aIndex) - Number.parseInt(bIndex)
              })
              .map((image, index) => (
                <SwiperSlide key={image}>
                  <img
                    className="flex h-96 w-full object-cover cursor-pointer max-w-full select-none"
                    src={image}
                    alt="Carrossel de imagens com a capa dos projetos"
                    onClick={() => {
                      setOpen(true)
                      const clickedProject = projectArray[index]
                      setSelectedProject(clickedProject)
                    }}
                    onKeyUp={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setOpen(true)
                        const clickedProject = projectArray[index]
                        setSelectedProject(clickedProject)
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 z-50" />
          <Dialog.Content className="fixed inset-0 z-50" aria-describedby="dialog-description">
            <Dialog.Title>Projeto</Dialog.Title>
            <Carousel
              selectedProject={selectedProject}
              onClose={() => {
                setOpen(false)
                setSelectedProject(null)
              }}
              setOpen={setOpen}
            />
            <Dialog.Close className="absolute" asChild>
              <button
                className="top-4 right-4 focus:bg-transparent rounded-none z-50"
                type="button"
                aria-label="Fechar"
                onClick={() => {
                  setOpen(false)
                  setSelectedProject(null)
                }}
              >
                <span className="material-symbols-outlined justify-center text-white hover:bg-black p-2">
                  close
                </span>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
