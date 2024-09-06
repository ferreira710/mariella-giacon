import Banner from './components/ui/banner'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
import Logo from './components/ui/logo'
import About from './components/utils/about'
import Contact from './components/utils/contact'
import Features from './components/utils/features'
import Purpose from './components/utils/purpose'
import ScrollTop from './components/utils/scrollTop'
import Services from './components/utils/services'

export default function App() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main id="home" className="mb-auto flex w-full flex-col pt-16">
        <Logo />
        <Banner />
        <About />
        <Purpose />
        <Features />
        <Services />
        <Contact />
        <ScrollTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
