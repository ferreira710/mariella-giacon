export default function Hero() {
    return (
        <section className="relative bg-white pt-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pb-12 text-center md:pb-16">
                    <h1
                        className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
                        data-aos="zoom-y-out"
                    >
                        Mariella Giacon
                        <span className="bg-gradient-to-r from-green-800 to-teal-600 bg-clip-text pr-1 text-transparent">
                            {' '}
                            paisagismo
                        </span>
                    </h1>
                    <div className="mx-auto max-w-3xl">
                        <p
                            className="mb-8 text-xl text-gray-600"
                            data-aos="zoom-y-out"
                            data-aos-delay="150"
                        >
                            Arquitetura paisagista ou paisagismo é a arte e a
                            técnica de projetar, planear, gerir e preservar os
                            espaços abertos, urbanos ou não, de forma a criar
                            micro e macro paisagens, de acordo com critérios
                            estéticos e sustentáveis, de acordo com cada lugar.
                        </p>
                        <div
                            className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                            data-aos="zoom-y-out"
                            data-aos-delay="300"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
