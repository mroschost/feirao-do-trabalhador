import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Briefcase,
    title: 'Vagas de Emprego',
    subtitle: 'Conecte-se diretamente com empresas que estão contratando.',
    items: [
      'Processos seletivos presenciais',
      'Cadastro de currículos',
      'Entrevistas com recrutadores',
      'Oportunidades para diversos níveis de experiência',
      'Orientação profissional',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Capacitação Profissional',
    subtitle: 'Desenvolva novas habilidades e aumente sua competitividade no mercado.',
    items: [
      'Cursos gratuitos',
      'Oficinas práticas',
      'Workshops especializados',
      'Palestras com profissionais do mercado',
      'Certificados de participação',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Renda e Empreendedorismo',
    subtitle: 'Descubra caminhos para aumentar sua renda e fortalecer seu negócio.',
    items: [
      'Orientação para empreendedores',
      'Educação financeira',
      'Acesso a oportunidades de negócios',
      'Networking com especialistas',
      'Desenvolvimento de competências empreendedoras',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-24 md:scroll-mt-28" style={{ backgroundColor: '#4A69AD' }}>
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            O que você encontra no Feirão
          </h2>
          <p
            className="text-xl text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Três pilares para impulsionar sua carreira e seu futuro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: '#F3E844' }}
              >
                <pillar.icon size={32} style={{ color: '#2D3966' }} />
              </div>

              <h3
                className="text-xl md:text-2xl font-bold mb-3 break-words"
                style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
              >
                {pillar.title}
              </h3>

              <p
                className="text-base mb-6"
                style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
              >
                {pillar.subtitle}
              </p>

              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span style={{ color: '#4A69AD' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
