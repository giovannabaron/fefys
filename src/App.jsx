import logo from './assets/logo.jpg'
import brownieCoco from './assets/brownieCoco.jpeg'
import brownieNuts from './assets/BrownieNuts.jpeg'
import brownieChocolate from './assets/brownieChocolate.jpeg'
import browniePistache from './assets/browniePistache.jpeg'
import cremeAvela from './assets/cremeAvela.jpeg'
import cremePistache from './assets/cremePistache.jpeg'
import goldenMilk from './assets/goldenMilk.jpeg'
import { Cookie, Star, Package, Truck, MessageCircle, ChevronRight, Leaf, Heart, ShoppingBag} from 'lucide-react'

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
    image: brownieChocolate,
    price: "R$ 19,00",
    badge: "Com ou Sem Trigo",
    badgeColor: "bg-[#6b21a8] text-white"
  
  },

  {
    title: "Brownie Proteico com Nutella e Pistache",
    description: "Produzido com Açúcar Mascavo; Cacau Alcalino 50%, Leite de Coco; Proteína Vegetal; Chocolate Meio Amargo.",
    image: browniePistache,
    price: "R$ 22,00",
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

const valores = [
  {
    icon: <Leaf className="w-9 h-9" />,
    title: "100% Plant-Based",
    description: "Todos os nossos produtos são feitos com ingredientes de origem vegetal",
    color: "text-[#16a34a]",
    bg: "bg-[#dcfce7]"
  },
  {
    icon: <Heart className="w-9 h-9" />,
    title: "Feito com Amor",
    description: "Cada item preparado com cuidado e dedicação especial para você",
    color: "text-[#6b21a8]",
    bg: "bg-[#f3eeff]"
  },
  {
    icon: <ShoppingBag className="w-9 h-9" />,
    title: "Sem Culpa, Sempre",
    description: "Nutritivos, proteicos e deliciosos — coma à vontade sem se preocupar",
    color: "text-[#b45309]",
    bg: "bg-[#fefce8]"
  }
];


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
  
function Valores(){
  return (
    <>
    <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {valores.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border-2 border-transparent hover:border-[#6b21a8]/20 hover:shadow-xl transition-all group"
                style={{ background: "linear-gradient(135deg, #faf7ff 0%, #f0fdf4 100%)" }}
              >
                <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-[#1a0a2e] mb-3">{value.title}</h3>
                <p className="text-[#7c5fa0] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-3 bg-[#f5c518]" />
      </>
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
                <Star className="w-5 h-5 text-[#1a0a2e]" />
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

function ComoFunciona(){
  return (
    <section id="comofunciona" className="py-24 px-6 bg-white">
      <div className='max-w-7x1 mx auto'>
        <div className="text-center mb-16">
          <span className="inline-block bg-[#6b21a8] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Como Funciona
          </span>
          <h2 className="text-4xl font-black text-[#1a0a2e]">
            Receba em <span className="text-[#16a34a]">casa</span> ou <span className="text-[#6b21a8]">retire</span>
            </h2>
            <p className = "text-lg text-[#7c5fa0] mt-4">Simples, rápido e feito especialmente pra você</p>
        </div>

        {/* Sob Encomenda */}
         <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#fefce8] to-[#fef9c3] rounded-3xl p-8 border-2 border-[#f5c518]/30 hover:border-[#f5c518]/50 hover:shadow-xl transition-all">
            <div className="bg-[#f5c518] text-[#1a0a2e] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Package className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#1a0a2e] mb-3">Sob Encomenda</h3>
            <p className="text-[#b45309] text-sm leading-relaxed mb-4">
              Todos os produtos são feitos <strong>fresquinhos</strong> especialmente para você!
            </p>
            <ul className="text-xs text-[#b45309]/80 space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Peça com 2-3 dias de antecedência</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Sem estoque — sempre fresquinho!</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Pedidos urgentes: consulte no WhatsApp</span>
              </li>
            </ul>
          </div>


    {/* Entrega */}
     <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 border-2 border-[#16a34a]/20 hover:border-[#16a34a]/40 hover:shadow-xl transition-all">
            <div className="bg-[#16a34a] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#1a0a2e] mb-3">Entrega ou Retirada</h3>
            <p className="text-[#166534] text-sm leading-relaxed mb-4">
              Receba em <strong>Colombo e região</strong> ou retire no local.
            </p>
            <ul className="text-xs text-[#166534]/80 space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Entrega via Uber, 99, motoboy ou própria</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Retirada no local (endereço via WhatsApp)</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Taxa de entrega calculada no pedido</span>
              </li>
            </ul>
          </div>

          {/* Como Pedir */}
          <div className="bg-gradient-to-br from-[#faf5ff] to-[#f3eeff] rounded-3xl p-8 border-2 border-[#6b21a8]/20 hover:border-[#6b21a8]/40 hover:shadow-xl transition-all">
            <div className="bg-[#6b21a8] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#1a0a2e] mb-3">Como Pedir</h3>
            <p className="text-[#6b21a8] text-sm leading-relaxed mb-4">
              Simples e rápido pelo <strong>WhatsApp</strong>!
            </p>
            
              <a href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-black hover:bg-[#20BA5A] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Fazer Pedido Agora
            </a>
            <p className="text-xs text-[#6b21a8]/70 mt-4">
                Respondo rápido e te ajudo com tudo! 💜
              </p>
          </div>
        </div>

        <div className="mt-16 bg-[#1a0a2e] rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-black text-white mb-4">
            Atendemos <span className="text-[#f5c518]">Colombo e Região</span>
          </h3>
          <p className="text-white/70 mb-6">Levamos nossas delícias veganas até você!</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Colombo', 'Bacacheri', 'Atuba', 'Cajuru', 'Capão da Imbuia', 'Jardim das Américas', 'Santa Cândida', 'Boa Vista', 'Cachoeira', 'Tarumã'].map((bairro) => (
              <span key={bairro} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#16a34a] hover:border-[#16a34a] transition-all">
                {bairro}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function NossaHistoria(){
  return (
    <>
   <div className="h-3 bg-[#6b21a8]" />
      <section id="nossahistoria" className="py-24 px-6 bg-[#1a0a2e] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#6b21a8]/30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#16a34a]/20 blur-3xl translate-x-1/2 translate-y-1/2" />

         <div className="relative max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f5c518]/30 aspect-[4/5] bg-[#6b21a8]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">👩‍🍳</div>
                <p className="text-white/60 font-bold">Foto em breve</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#f5c518] text-[#1a0a2e] rounded-2xl p-5 shadow-2xl max-w-[200px]">
              <p className="font-black text-3xl leading-none">+6</p>
              <p className="font-bold text-sm mt-1">anos transformando vidas com comida de verdade</p>
            </div>
          </div>

          <div>
            <span className="inline-block bg-[#f5c518] text-[#1a0a2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Nossa História
            </span>
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">
              Nascida na adversidade, <span className="text-[#f5c518]">forjada no propósito</span>
            </h2>
            <div className="space-y-5 text-white/80 text-lg leading-relaxed">
              <p>
                A Fefy's nasceu na pandemia, quando o emprego foi embora mas a vontade de fazer algo gostoso ficou! Peguei minha bandeja de brownies veganos e fui vender dentro dos biarticulados nos horários de pico — sim, no aperto mesmo, literalmente kkk.
              </p>
              <p>
                Do ônibus para parceiros, das feiras veganas para a sua mesa: cada passo foi uma aposta no poder da comida de verdade. Criei a marca com muita fé, dedicação e uma pitada de ousadia!
              </p>
              <p>
                Nossos produtos não são "diet" nem sem graça — <span className="text-[#f5c518] font-black">são veganos e incrivelmente gostosos</span>, porque a gente acredita que respeitar o planeta não precisa custar o sabor. Se chegou até aqui, confia na Fefy! 🌱
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-3xl font-black text-[#f5c518]">100%</p>
                <p className="text-white/60 text-sm font-bold">Vegano</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-3xl font-black text-[#16a34a]">9+</p>
                <p className="text-white/60 text-sm font-bold">Produtos</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-3xl font-black text-[#6b21a8]">⭐ 5</p>
                <p className="text-white/60 text-sm font-bold">Avaliação</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-3 bg-[#16a34a]" />
    </>
  )

}


function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <Valores/>
      <Produtos />
      <ComoFunciona/>
      <NossaHistoria/>
    </div>
  )
}

export default App