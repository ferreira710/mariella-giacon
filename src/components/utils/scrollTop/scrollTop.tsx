import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <button
      className={`${
        visible ? 'animate-fade-in block' : 'hidden'
      } fixed bottom-0 right-0 z-50 m-4 flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-md shadow-green-800 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none`}
      onClick={scrollToTop}
      aria-label="Scrollar para o topo da página"
      title="Scrollar para o topo da página"
      type="button"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  )
}
