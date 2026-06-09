export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2D3966' }}>
      <div className="py-6" style={{ backgroundColor: '#4A69AD' }}>
        <div className="w-full max-w-5xl mx-auto px-4 text-center">
          <p
            className="text-sm text-white/80"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            &copy; {new Date().getFullYear()} ICDI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
