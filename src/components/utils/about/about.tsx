import { S3_IMAGE_BUCKET } from '../../../config/settings'

export default function About() {
    return (
        <section
            id='sobre'
            className='text-text flex w-full flex-col items-center bg-secondary py-12 md:py-20'
        >
            <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-4 sm:px-6 md:flex-row'>
                <div className='mx-auto max-w-lg'>
                    <h2 className='font-heading mb-4 text-3xl font-bold md:text-4xl'>
                        Quem somos
                    </h2>
                    <p className='text-xl '>
                        Somos um estúdio fundado pela Arquiteta e Urbanista
                        Mariella Giacon, formada pela Pontifícia Universidade
                        Católica de Campinas em 2003 e pelo Centro Paisagístico
                        “Gustaaf Winters” no curso avançado de paisagismo e de
                        iluminação para paisagismo e que desde 2017 se dedica
                        apenas a projetos de arquitetura paisagística e execução
                        de jardins.
                    </p>
                </div>
                <div className='mx-auto mb-12 max-w-3xl items-center justify-center md:mb-0 md:mr-8'>
                    <img
                        className='tablet:h-auto tablet:w-auto mx-auto h-[320px] w-[320px] rounded-full object-cover'
                        src={`${S3_IMAGE_BUCKET}/fotoPerfil.jpeg`}
                        alt='Arquiteta Mariella Giacon sentada em um banco de ferro em um jardim com as pernas cruzadas, mãos entrelaçadas em cima do joelho e um sorriso no rosto'
                    />
                </div>
            </div>
        </section>
    )
}
