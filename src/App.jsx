import Banner from './components/ui/banner'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
import About from './components/utils/about'
import Contact from './components/utils/contact'
import Features from './components/utils/features'
import Hero from './components/utils/hero'

export default function App() {
    return (
        <div className="flex h-screen flex-col justify-between">
            <header>
                <Header />
            </header>
            <main className="mb-auto flex w-full flex-col pt-16">
                <Banner />
                <Hero />
                <Features />
                <About />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
