import './App.css'
import logo from './assets/logo.jpg'

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
          Produtos
        </a>
        <a href="#comofunciona" className="text-sm font-bold text-gray-700 hover:text-green-700">
          Como Funciona
        </a>
        <a href="#nossahistoria" className="text-sm font-bold text-gray-700 hover:text-green-700">
          Nossa História 
        </a>
        <a href="#contato" className="text-sm font-bold text-gray-700 hover:text-green-700">
          Contato
        </a>
        
          <a href="https://wa.me/5541987997556"
          className="bg-[#f5c518] text-[#1a0a2e] px-5 py-2 rounded-full font-black text-sm hover:bg-[#e6b800] transition-colors shadow-md"
        >
          Pedir agora
         </a>
      </nav>

      </div>
    </header>
  )
}
  
function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
    </div>
  )
}

export default App