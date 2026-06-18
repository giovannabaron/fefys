import './App.css'
import logo from './assets/logo.jpg'

const WHATSAPP = "https://wa.me/5511999999999"

 function Header() {
  return (
    <header className="sticky top-0 bg-[#f0fdf4] border-b-2 border-[#16a34a]/20 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-[#6b21a8]/20 shadow-md flex-shrink-0">
            <img
            src={logo}
            alt="Logo Fefy's"
            className="w-full h-full object-cover"
            />
          </div>

      <nav className="flex gap-6 items-center">
        <a href="#produtos" className="text-sm font-bold text-gray-700 hover:text-green-700">
          PRODUTOS
        </a>
        <a href="#comofunciona" className="text-sm font-bold text-gray-700 hover:text-green-700">
          COMO FUNCIONA
        </a>
        <a href="#nossahistoria" className="text-sm font-bold text-gray-700 hover:text-green-700">
          NOSSA HISTÓRIA
        </a>
        <a href="#contato" className="text-sm font-bold text-gray-700 hover:text-green-700">
          CONTATO
        </a>
        
         <a
         href={WHATSAPP}
            className="bg-[#f5c518] text-[#1a0a2e] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e6b800]"
          >
            Pedir agora
          </a>
        </nav>

      </div>
    </header>
  )
}
  

function Hero() {
  return (
    <section className="bg-[#1a0a2e] min-h-[620px] flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <span className="inline-block bg-[#f5c518] text-[#1a0a2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          🌱 100% Vegano
        </span>
        <h1 className="text-5xl font-black text-white leading-tight mb-6">
          Coma sem culpa, <span className="text-[#f5c518]">viva com sabor</span>
        </h1>
        <p className="text-lg text-white/70 mb-10 max-w-md leading-relaxed">
          Brownies proteicos, cremes artesanais e Golden Milk — 100% veganos, nutritivos e absurdamente gostosos.
        </p>
        <div className="flex gap-4">
          <a href="#produtos" className="bg-[#f5c518] text-[#1a0a2e] px-8 py-4 rounded-full font-black text-lg hover:bg-[#e6b800]">
            Ver Produtos
          </a>
          <a href={WHATSAPP} className="border-2 border-[#16a34a] text-[#16a34a] px-8 py-4 rounded-full font-black text-lg hover:bg-[#16a34a] hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
    </div>
  )
}

export default App