import { motion } from 'framer-motion'

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-20 bg-white">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <p
            className="text-lg font-medium text-center"
            style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
          >
            Realização
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src="/assets/logo_icdi.png"
                alt="Instituto de Capacitação, Desenvolvimento e Inovação - ICDI"
                className="h-32 md:h-72 object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <img
                src="/assets/logo_gdf.png"
                alt="Governo do Distrito Federal"
                className="h-28 md:h-60 object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src="/assets/logo_feirao.png"
                alt="Feirão do Trabalhador"
                className="h-24 md:h-56 object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
