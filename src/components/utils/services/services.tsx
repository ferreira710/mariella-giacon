export default function Services() {
  return (
    <section
      id="servicos"
      className="flex w-full flex-col items-center bg-background py-12 text-text md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">Serviços</h2>
          <ul className="flex flex-col gap-6 text-xl">
            <li>
              <b>- Projeto paisagístico (arquitetura):</b> {''}
              Planta baixa, detalhamento e Maquete 3d. Apresentação gráfica dos elementos
              arquitetônicos e vegetais definidos para as áreas de jardim, assim como as imagens 3D,
              orientação e sugestões de pontos luminotécnicos, hidráulicos e orientação para
              irrigação do jardim.
            </li>
            <li>
              <b>- Assessoria:</b> Assessoria para elaboração ou reforma de jardim. Apresentação em
              planta baixa (2D), imagens das espécies e sugestão de pontos para iluminação do
              paisagismo.
            </li>
            <li>
              <b>- Execução de jardim:</b> Com o projeto paisagístico aprovado, partimos para a
              execução do jardim - o serviço inclui acompanhamento técnico durante todo o processo,
              todas as plantas descritas, mão de obra e insumos. Seu espaço pronto para você relaxar
              e aproveitar.
            </li>
            <li>
              <b>- Diferenciais Exclusivos:</b>
              <ul className="list-disc px-8 text-xl ">
                <li>Assinatura e montagem de vasos</li>
                <li>Curadoria de móveis para área externa</li>
                <li>Jardim vertical</li>
                <li>Acompanhamento de obra</li>
                <li>Projeto Luminotécnico</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
