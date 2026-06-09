import { motion } from 'framer-motion'
import { MapPin, Clock, Navigation } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
  const openMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Museu+Nacional+da+Rep%C3%BAblica+Bras%C3%ADlia',
      '_blank',
    )
  }

  const getDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=Museu+Nacional+da+Rep%C3%BAblica+Bras%C3%ADlia',
      '_blank',
    )
  }

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-24 md:scroll-mt-28" style={{ backgroundColor: '#4A69AD' }}>
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
            Local e Contato
          </h2>
          <p
            className="text-xl text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Venha nos visitar e tire suas d&uacute;vidas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#F3E844' }}
              >
                <MapPin size={24} style={{ color: '#2D3966' }} />
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Endere&ccedil;o
                </h3>
                <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Em frente ao Museu Nacional
                  <br />
                  Setor Cultural Sul, Bras&iacute;lia - DF
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#F3E844' }}
              >
                <Clock size={24} style={{ color: '#2D3966' }} />
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Data e Hor&aacute;rio
                </h3>
                <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  15 a 19 de junho de 2026
                  <br />
                  Das 8h &agrave;s 19h
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={getDirections}
                className="flex items-center justify-center gap-2 font-bold hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundColor: '#F3E844',
                  color: '#2D3966',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <Navigation size={20} />
                Como Chegar
              </Button>
              <Button
                onClick={openMaps}
                className="flex items-center justify-center gap-2 font-bold hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundColor: '#F3E844',
                  color: '#2D3966',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <MapPin size={20} />
                Ver no Google Maps
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden shadow-2xl rounded-2xl h-96"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-47.8920%2C-15.8020%2C-47.8820%2C-15.7920&layer=mapnik&marker=-15.7970,-47.8870"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localiza&ccedil;&atilde;o do evento"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
