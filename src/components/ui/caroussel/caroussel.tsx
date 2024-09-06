import 'swiper/css/bundle'
import { useEffect, useState } from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ImageBanner from '../../utils/imageBanner'

interface Props {
  selectedProject: string | null
  setOpen: (value: boolean) => void
  onClose: () => void
}

export default function Caroussel({ selectedProject, setOpen }: Props) {
  const [projectArray, setProjectArray] = useState<string[]>([])
  const [activeSlide, setActiveSlide] = useState(0)

  const allImages = import.meta.glob('/src/assets/static/projetos/**/*.jpg', { eager: true })

  const handleSlideChange = () => {
    setActiveSlide(activeSlide + 1)
  }

  useEffect(() => {
    if (selectedProject) {
      const projectNameMatch = selectedProject.match(/projetos\/thumbnails\/(.*?)\.jpg/)
      if (projectNameMatch?.[1]) {
        const projectName = projectNameMatch[1]
        const imageArray = Object.entries(allImages)
          .filter(([path]) => path.includes(`projetos/${projectName}/`))
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          .map(([_, module]: [string, any]) => module.default)

        setProjectArray(imageArray)
      }
    }
  }, [selectedProject])

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }, [])

  return (
    <Swiper
      modules={[A11y, Pagination, Navigation]}
      keyboard
      a11y={{
        prevSlideMessage: 'Imagem anterior',
        nextSlideMessage: 'Próxima imagem',
        firstSlideMessage: 'Primeira imagem do carrossel',
        lastSlideMessage: 'Última imagem do carrossel'
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={handleSlideChange}
      onSlideChange={handleSlideChange}
      className="flex justify-center items-center w-full h-full"
    >
      {projectArray.map((image) => (
        <SwiperSlide key={image} className="flex items-center justify-center">
          <div>
            <img
              className="w-full h-[80vh] object-cover"
              src={image}
              alt="Carrossel de imagens do projeto selecionado"
            />
            {selectedProject?.match(/projetos\/thumbnails\/projeto00|projeto01\.jpg/) && (
              <ImageBanner text={'Fotografia: Fávaro Jr.'} />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
