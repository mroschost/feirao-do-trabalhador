import { motion } from 'framer-motion'
import { Users, BookOpen, Briefcase, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Conexões que geram resultados',
    description:
      'Amplie sua rede de contatos e conheça empresas e profissionais de diversas áreas.',
  },
  {
    icon: BookOpen,
    title: 'Aprendizado prático',
    description:
      'Participe de oficinas, cursos e palestras voltados para o mercado atual.',
  },
  {
    icon: Briefcase,
    title: 'Oportunidades reais',
    description:
      'Tenha acesso a vagas de emprego e iniciativas de geração de renda.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento profissional',
    description:
      'Invista no seu desenvolvimento e prepare-se para novas oportunidades.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
          >
            Por que participar?
          </h2>
          <p
            className="text-xl"
            style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
          >
            Benefícios que fazem a diferença na sua jornada profissional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F3E844' }}
              >
                <benefit.icon size={32} style={{ color: '#2D3966' }} />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-base"
                style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
