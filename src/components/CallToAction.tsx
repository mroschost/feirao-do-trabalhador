import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#2D3966' }}
    >
      <div className="w-full max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            N&atilde;o perca esta oportunidade
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            O mercado est&aacute; em constante transforma&ccedil;&atilde;o. Este &eacute; o momento de investir em voc&ecirc;, ampliar suas possibilidades e construir um futuro melhor.
          </p>

          <p
            className="text-2xl md:text-3xl font-black mb-8"
            style={{ color: '#F3E844', fontFamily: 'Poppins, sans-serif' }}
          >
            Trabalho. Capacita&ccedil;&atilde;o. Renda. Futuro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-white/80">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              15 a 19 de junho de 2026
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              Em frente ao Museu Nacional
            </span>
          </div>

          <Button
            className="bg-[#F3E844] text-[#2D3966] font-bold text-lg px-10 py-7 hover:scale-105 transition-transform"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            FAZER INSCRI&Ccedil;&Atilde;O GRATUITA
            <ArrowRight className="ml-2" size={22} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
