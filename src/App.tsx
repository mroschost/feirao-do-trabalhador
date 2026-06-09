import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Categories from './components/Categories'
import Programming from './components/Programming'
import Benefits from './components/Benefits'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Toaster } from './components/ui/toaster'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Feirão do Trabalhador 2026 - 2ª Edição</title>
        <meta
          name="description"
          content="Participe do maior encontro de empregabilidade, qualificação profissional e empreendedorismo da região. 15 a 19 de junho de 2026, em frente ao Museu Nacional. Promovido pelo ICDI."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24 md:pt-28">
          <Hero />
          <About />
          <Services />
          <Categories />
          <Programming />
          <Benefits />
          <CallToAction />
          <Contact />
          <Partners />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </>
  )
}
