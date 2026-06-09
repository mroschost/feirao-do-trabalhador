import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const audiences = [
  'Está em busca de emprego',
  'Deseja mudar de carreira',
  'Quer se capacitar profissionalmente',
  'Busca aumentar sua renda',
  'Tem um negócio ou deseja empreender',
  'Procura novas oportunidades de crescimento',
]

export default function Categories() {
  return (
    <section id="audience" className="py-20 md:py-28 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
          >
            Para quem é o evento?
          </h2>
          <p
            className="text-xl"
            style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
          >
            O Feirão é para você que:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {audiences.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 size={28} style={{ color: '#4A69AD' }} />
              <span
                className="text-lg font-medium"
                style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
