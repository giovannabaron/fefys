import logo from './assets/logo.jpg'
import brownieCoco from './assets/brownieCoco.jpeg'
import brownieNuts from './assets/BrownieNuts.jpeg'
import brownieChocolate from './assets/brownieChocolate.jpeg'
import cremeAvela from './assets/cremeAvela.jpeg'
import cremePistache from './assets/browniePistache.jpeg'
import goldenMilk from './assets/goldenMilk.jpeg'
import { Cookie, Sparkles } from 'lucide-react'

const WHATSAPP = "https://wa.me/5541987997556"

const brownies = [
  {
    title: "Brownie Proteico com Coco",
    description: "Produzido com Açúcar Mascavo; Cacau Alcalino 50%, Leite de Coco; Chocolate Meio Amargo",
    image: brownieCoco,
    price: "R$ 19,00",
    badge: "Com ou Sem Trigo",
    badgeColor: "bg-[#6b21a8] text-white"
  
  },
  {
    title: "Brownie Proteico com Nuts",
    description: "Produzido com Açúcar Mascavo; Cacau Alcalino 50%, Leite de Coco; Chocolate Meio Amargo, Pistache, Nozes, Semente de abóbora, Avelã e Amêndoas",
    image: brownieNuts,
    price: "R$ 19,00",
    badge: "Com ou Sem Trigo",
    badgeColor: "bg-[#6b21a8] text-white"
  
  },
  {
    title: "Brownie Proteico com Chocolate",
    description: "Produzido com Açúcar Mascavo; Cacau Alcalino 50%, Leite de Coco, Proteína Vegetal, Chocolate Meio Amargo.",
    image: brownieCoco,
    price: "R$ 19,00",
    badge: "Com ou Sem Trigo",
    badgeColor: "bg-[#6b21a8] text-white"
  
  },
]

const cremes = [
  {
    title: "Creme de Avelã",
    description: "Cremoso, intenso e 100% vegano. O creme de avelã que você sempre quis",
    image: cremeAvela,
    price: "R$ 77,00",
    badge: "Artesanal",
    badgeColor: "bg-[#f5c518] text-[#1a0a2e]"
  },
  {
    title: "Creme de Pistache Zero Açúcar",
    description: "Sofisticado, zero açúcar e incrivelmente gostoso — puro pistache vegano",
    image: cremePistache,
    price: "R$ 88,00",
    badge: "Zero Açúcar",
    badgeColor: "bg-[#16a34a] text-white"
  },
  {
    title: "Golden Milk",
    description: "Blend anti-inflamatório com cúrcuma, gengibre e especiarias — saúde que sabe bem",
    image: goldenMilk,
    price: "R$ 45,00",
    badge: "Anti-inflamatório",
    badgeColor: "bg-[#6b21a8] text-white"
  }
]


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
      <div className="bg-[#6b21a8]/20 rounded-3xl h-[420px] flex items-center justify-center border-4 border-[#f5c518]/20">
          <div className="text-center">
            <div className="text-7xl mb-4">🌱</div>
            <p className="text-white/60 font-bold">Foto em breve</p>
          </div>
        </div>

    </section>
  )
}

function ProductCard({ title, description, image, price, badge, badgeColor }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#6b21a8]/10 hover:shadow-xl transition-shadow">
      <div className="h-64 bg-[#1a0a2e]/5 relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl">🍫</span>
          </div>
        )}
        <span className={`absolute top-3 left-3 text-xs font-black px-3 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-black text-[#1a0a2e] text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-[#6b21a8]">{price}</span>
          <a href={WHATSAPP} className="bg-[#f5c518] text-[#1a0a2e] px-4 py-2 rounded-full text-sm font-black hover:bg-[#e6b800]">
            Pedir
          </a>
        </div>
      </div>
    </div>
  )
}

function Produtos() {
  return (
    <>
      <div className="h-3 bg-[#f5c518]" />
      <section id="produtos" className="py-24 px-6 bg-[#f9f5ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#16a34a] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Cardápio
            </span>
            <h2 className="text-4xl font-black text-[#1a0a2e]">
              Nossos <span className="text-[#16a34a]">Produtos</span>
            </h2>
            <p className="text-lg text-[#7c5fa0] mt-4">
              Feitos artesanalmente para você comer sem culpa e com muito sabor
            </p>
          </div>

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#f5c518] p-2 rounded-xl">
                <Cookie className="w-5 h-5 text-[#1a0a2e]" />
              </div>
              <h3 className="text-2xl font-black text-[#1a0a2e]">
                Brownies Proteicos
              </h3>
              <span className="bg-[#16a34a]/10 text-[#16a34a] text-xs font-black px-3 py-1 rounded-full">
                Com ou Sem Trigo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {brownies.map((p, i) => <ProductCard key={i} {...p} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#f5c518] p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#1a0a2e]">
                Cremes e Golden Milk
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {cremes.map((p, i) => <ProductCard key={i} {...p} />)}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}


function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <Produtos />
    </div>
  )
}

export default App