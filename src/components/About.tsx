import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
          >
            O seu futuro come&ccedil;a aqui
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            <p style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}>
              O Feir&atilde;o do Trabalhador re&uacute;ne empresas, profissionais, empreendedores e institui&ccedil;&otilde;es em um &uacute;nico espa&ccedil;o para promover oportunidades reais de crescimento profissional e gera&ccedil;&atilde;o de renda.
            </p>
            <p style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}>
              Durante cinco dias de programa&ccedil;&atilde;o gratuita, voc&ecirc; ter&aacute; acesso a vagas de emprego, capacita&ccedil;&otilde;es, oficinas pr&aacute;ticas, palestras, orienta&ccedil;&otilde;es profissionais e oportunidades para empreender.
            </p>
            <p
              className="text-2xl font-bold pt-4"
              style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
            >
              Se voc&ecirc; busca recoloca&ccedil;&atilde;o no mercado, deseja se qualificar ou quer impulsionar seu neg&oacute;cio, este evento foi feito para voc&ecirc;.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
