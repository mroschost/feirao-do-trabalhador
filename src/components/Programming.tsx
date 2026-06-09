import { motion } from 'framer-motion'
import { Mic, Wrench, Users, Compass, Lightbulb, Handshake } from 'lucide-react'

const activities = [
  { icon: Mic, title: 'Palestras temáticas' },
  { icon: Wrench, title: 'Oficinas de capacitação' },
  { icon: Users, title: 'Rodadas de empregabilidade' },
  { icon: Compass, title: 'Orientações profissionais' },
  { icon: Lightbulb, title: 'Espaço para empreendedorismo' },
  { icon: Handshake, title: 'Networking e conexões estratégicas' },
]

export default function Programming() {
  return (
    <section id="programming" className="py-20 md:py-28 bg-gray-50 scroll-mt-24 md:scroll-mt-28">
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
            Uma semana de oportunidades
          </h2>
          <p
            className="text-xl"
            style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
          >
            Durante os cinco dias de evento, os participantes terão acesso a:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-5 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#4A69AD' }}
              >
                <item.icon size={26} className="text-white" />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-lg mt-12 font-medium"
          style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
        >
          Programação completa em breve.
        </motion.p>
      </div>
    </section>
  )
}
