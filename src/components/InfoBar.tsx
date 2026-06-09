import { Calendar, Clock, MapPin } from 'lucide-react'

export default function InfoBar() {
  return (
    <div className="w-full" style={{ backgroundColor: '#F3E844' }}>
      <div className="w-full max-w-5xl mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <Calendar size={22} style={{ color: '#2D3966' }} />
            <span className="text-sm md:text-base font-medium" style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}>
              15 a 19 de junho de 2026
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={22} style={{ color: '#2D3966' }} />
            <span className="text-sm md:text-base font-medium" style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}>
              8h às 19h
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={22} style={{ color: '#2D3966' }} />
            <span className="text-sm md:text-base font-medium" style={{ color: '#2D3966', fontFamily: 'Poppins, sans-serif' }}>
              Em frente ao Museu Nacional - Brasília
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
