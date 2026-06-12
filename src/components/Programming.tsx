import { motion } from 'framer-motion'
import { Mic, Calendar, Clock, MapPin, Star } from 'lucide-react'

const specialSpeakers = [
  { name: 'Leandro Karnal', date: '15 de junho', time: '17h', gradient: 'from-[#2D3966] to-[#4A69AD]' },
  { name: 'Rick Chesther', date: '17 de junho', time: '10h', gradient: 'from-[#4A69AD] to-[#2D3966]' },
  { name: 'Ravell Nava', date: '18 de junho', time: '15h', gradient: 'from-[#2D3966] to-[#4A69AD]' },
]

const schedule = [
  {
    day: '15 JUN',
    weekday: 'Segunda',
    events: [
      { time: '15h', title: 'Cerimônia Oficial de Abertura / Formatura do QualificaDF Móvel' },
      { time: '17h', title: 'Palestra com Leandro Karnal', highlight: true },
    ],
  },
  {
    day: '16 JUN',
    weekday: 'Terça',
    events: [
      { time: '9h30', title: 'Formatura do 1º Ciclo de 2026 do RenovaDF' },
    ],
  },
  {
    day: '17 JUN',
    weekday: 'Quarta',
    events: [
      { time: '9h30', title: 'Lançamento do 2º Ciclo de 2026 do RenovaDF' },
      { time: '10h', title: 'Palestra com Rick Chesther', highlight: true },
    ],
  },
  {
    day: '18 JUN',
    weekday: 'Quinta',
    events: [
      { time: '9h30', title: 'Aula inaugural da Fábrica Social da Beleza e de Corte e Costura' },
      { time: '15h', title: 'Palestra com Ravell Nava', highlight: true },
    ],
  },
  {
    day: '19 JUN',
    weekday: 'Sexta',
    events: [
      { time: '9h30', title: 'Cerimônia de Encerramento do Feirão do Trabalhador' },
    ],
  },
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
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
          >
            Programação
          </h2>
          <p
            className="text-xl mb-2"
            style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
          >
            Confira nossa programação completa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 text-sm font-medium"
            style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={16} /> 15 a 19 de junho de 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} /> 8h às 19h
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} /> Em frente ao Museu Nacional
            </span>
          </div>
        </motion.div>

        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-center mb-8"
            style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="flex items-center justify-center gap-2">
              <Star size={22} className="text-[#F3E844] fill-[#F3E844]" />
              Palestras Especiais
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${speaker.gradient} rounded-xl p-6 text-white shadow-lg text-center`}
              >
                <Mic size={28} className="mx-auto mb-3 text-[#F3E844]" />
                <h4 className="text-lg font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {speaker.name}
                </h4>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {speaker.date} às {speaker.time}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-5">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.08 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="bg-[#2D3966] px-6 py-4 flex items-center gap-3">
                <span className="text-[#F3E844] font-black text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {day.day}
                </span>
                <span className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {day.weekday}
                </span>
              </div>
              <div className="divide-y divide-gray-100">
                {day.events.map((event) => (
                  <div
                    key={event.title}
                    className={`px-6 py-4 flex items-center gap-4 ${event.highlight ? 'bg-[#F3E844]/10' : ''}`}
                  >
                    <span
                      className="font-black text-base min-w-[3.5rem]"
                      style={{ color: '#4A69AD', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {event.time}
                    </span>
                    <span
                      className={`text-base ${event.highlight ? 'font-bold' : 'font-medium'}`}
                      style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {event.title}
                    </span>
                    {event.highlight && (
                      <Mic size={18} className="text-[#4A69AD] flex-shrink-0 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-lg mt-12 font-bold"
          style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}
        >
          Vagas, capacitação, inovação e renda em um só lugar!
        </motion.p>
      </div>
    </section>
  )
}
