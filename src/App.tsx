import Footer from './components/ui/footer'
import Header from './components/ui/header'
import About from './components/utils/about'
import Contact from './components/utils/contact'
import Features from './components/utils/features'
import Hero from './components/utils/hero'
import ScrollTop from './components/utils/scrollTop'
import Services from './components/utils/services'

export default function App() {
    return (
        <div className='flex h-screen flex-col justify-between'>
            <header>
                <Header />
            </header>
            <main id='home' className='mb-auto flex w-full flex-col pt-16'>
                {/* <Banner /> */}
                <Hero />
                <About />
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
