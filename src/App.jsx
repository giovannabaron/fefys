import logo from './assets/logo.jpg'
import brownieCoco from './assets/brownieCoco.jpeg'
import brownieNuts from './assets/BrownieNuts.jpeg'
import brownieChocolate from './assets/brownieChocolate.jpeg'
import browniePistache from './assets/browniePistache.jpeg'
import cremeAvela from './assets/cremeAvela.jpeg'
import cremePistache from './assets/cremePistache.jpeg'
import goldenMilk from './assets/goldenMilk.jpeg'
import fefy from './assets/fefy.jpeg'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import { Cookie, Star, Package, Truck, MessageCircle, ChevronRight, Leaf, Heart, ShoppingBag, ChevronLeft } from 'lucide-react'

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

const testimonials = [
  { name: "Ana Paula", text: "Os brownies são incríveis! Não dá pra acreditar que é vegano!", stars: 5 },
  { name: "Mariana S.", text: "O creme de pistache é viciante demais. Já fiz meu terceiro pedido!", stars: 5 },
  { name: "Carlos R.", text: "Golden Milk todo dia pela manhã. Mudou minha rotina completamente!", stars: 5 }
]


 function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 bg-[#f0fdf4] border-b-2 border-[#16a34a]/20 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto pl-2 pr-6 py-4 flex items-center justify-between">

        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-[#6b21a8]/20 shadow-md flex-shrink-0">
          <img src={logo} alt="Logo Fefy's" className="w-full h-full object-cover" />
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#produtos" className="text-sm font-bold text-gray-700 hover:text-[#6b21a8]">PRODUTOS</a>
          <a href="#comofunciona" className="text-sm font-bold text-gray-700 hover:text-[#6b21a8]">COMO FUNCIONA</a>
          <a href="#nossahistoria" className="text-sm font-bold text-gray-700 hover:text-[#6b21a8]">NOSSA HISTÓRIA</a>
          <a href="#contato" className="text-sm font-bold text-gray-700 hover:text-[#6b21a8]">CONTATO</a>
          <a href={WHATSAPP} className="bg-[#f5c518] text-[#1a0a2e] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e6b800]">
            Pedir agora
          </a>
        </nav>

        <button
          className="md:hidden text-[#1a0a2e]"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

      </div>

      {menuAberto && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-[#f0fdf4] border-t border-[#16a34a]/20">
          <a href="#produtos" onClick={() => setMenuAberto(false)} className="text-[#1a0a2e] font-bold">PRODUTOS</a>
          <a href="#comofunciona" onClick={() => setMenuAberto(false)} className="text-[#1a0a2e] font-bold">COMO FUNCIONA</a>
          <a href="#nossahistoria" onClick={() => setMenuAberto(false)} className="text-[#1a0a2e] font-bold">NOSSA HISTÓRIA</a>
          <a href="#contato" onClick={() => setMenuAberto(false)} className="text-[#1a0a2e] font-bold">CONTATO</a>
          <a href={WHATSAPP} className="bg-[#f5c518] text-[#1a0a2e] text-center px-5 py-2 rounded-full font-black">
            Pedir agora
          </a>
        </div>
      )}
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
      
      <div className="relative hidden md:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f5c518]/40 h-[420px]">
              <img
                src={brownieChocolate}
                alt="Brownies proteicos da Fefy's"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-[#6b21a8] text-white rounded-2xl px-5 py-3 shadow-xl z-20 font-bold text-sm">
              🎉 Opção sem trigo disponível!
            </div>
            <div className="absolute -top-4 -right-4 bg-[#f5c518] text-[#1a0a2e] rounded-2xl px-5 py-3 shadow-xl z-20 font-black text-sm">
              ⭐ 5 estrelas
            </div>
          </div>
        

    </section>
  )
}

function ProductCard({ title, description, image, price, badge, badgeColor }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#6b21a8]/10 hover:shadow-xl transition-shadow h-full flex flex-col">
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
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-black text-[#1a0a2e] text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3 flex-1">{description}</p>
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

function Carrossel({ itens }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [podePrev, setPodePrev] = useState(false)
  const [podeNext, setPodeNext] = useState(true)

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  useEffect(() => {
    if (!emblaApi) return

    const atualizar = () => {
      setPodePrev(emblaApi.canScrollPrev())
      setPodeNext(emblaApi.canScrollNext())
    }

    emblaApi.on('select', atualizar)
    emblaApi.on('reInit', atualizar)
    atualizar()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 items-stretch">
  {itens.map((p, i) => (
    <div key={i} className="flex-none w-[320px] flex">
      <ProductCard {...p} />
    </div>
  ))}
</div>
      </div>

      {podePrev && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white border border-[#6b21a8]/20 shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f5c518] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a0a2e]" />
        </button>
      )}

      {podeNext && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white border border-[#6b21a8]/20 shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f5c518] transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-[#1a0a2e]" />
        </button>
      )}
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
    <h3 className="text-2xl font-black text-[#1a0a2e]">Brownies Proteicos</h3>
    <span className="bg-[#16a34a]/10 text-[#16a34a] text-xs font-black px-3 py-1 rounded-full">
      Com ou Sem Trigo
    </span>
  </div>
  <Carrossel itens={brownies} />
</div>

<div>
  <div className="flex items-center gap-3 mb-8">
    <div className="bg-[#6b21a8] p-2 rounded-xl">
      <Star className="w-5 h-5 text-white" />
    </div>
    <h3 className="text-2xl font-black text-[#1a0a2e]">Cremes e Golden Milk</h3>
  </div>
  <Carrossel itens={cremes} />
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
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f5c518]/30 aspect-[4/5]">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f5c518]/30 aspect-[4/5]">
          
          <img
           src={fefy}
          alt="Fefy's"
          className="w-full h-full object-cover"
          />
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

function Depoimentos() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#1a0a2e]">
            O que nossos clientes <span className="text-[#f5c518]">dizem</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#1a0a2e] rounded-3xl p-7 text-white">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#f5c518] text-[#f5c518]" />
                ))}
              </div>
              <p className="text-white/80 mb-5 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6b21a8] flex items-center justify-center font-black text-sm">
                  {t.name[0]}
                </div>
                <span className="font-bold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-[#6b21a8] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#f5c518]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#16a34a]/20 blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block bg-[#f5c518] text-[#1a0a2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Faça seu Pedido
        </span>
        <h2 className="text-4xl font-black text-white mb-6">
          Coma bem, sem culpa nenhuma!
        </h2>
        <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Faça seu pedido agora pelo WhatsApp e receba delícias veganas fresquinhas, nutritivas e absurdamente gostosas!
        </p>
        
         <a href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-[#f5c518] text-[#1a0a2e] px-10 py-5 rounded-full font-black text-xl hover:bg-[#e6b800] transition-all hover:scale-105 shadow-2xl items-center gap-3"
        >
          <MessageCircle className="w-6 h-6" />
          Pedir pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

function BotaoWhatsApp() {
  return (
    
      <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
      aria-label="Fazer encomenda pelo WhatsApp"
    >
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.481 2.031 7.781L0 32l8.438-2.094A15.925 15.925 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.25A13.2 13.2 0 019.125 27.5l-.531-.313-5.5 1.375 1.438-5.313-.344-.563A13.2 13.2 0 012.75 16 13.25 13.25 0 0116 2.75 13.25 13.25 0 0129.25 16 13.25 13.25 0 0116 29.25zm7.25-9.563c-.394-.2-2.344-1.156-2.719-1.281-.375-.125-.625-.188-.906.188-.25.375-1 1.281-1.219 1.531-.219.25-.438.281-.813.094-.375-.188-1.625-.594-3.094-1.906-1.125-1-1.906-2.25-2.125-2.625-.219-.375-.031-.594.156-.781.188-.156.406-.406.594-.594.188-.188.25-.344.375-.594.125-.25.063-.469-.031-.656-.094-.188-.875-2.125-1.188-2.906-.313-.75-.625-.656-.875-.656-.219 0-.469-.031-.719-.031-.25 0-.656.094-1.031.469-.375.375-1.438 1.406-1.438 3.438s1.469 3.969 1.656 4.219c.188.25 2.625 4.031 6.375 5.625.906.375 1.594.594 2.125.75.875.281 1.688.25 2.344.156.719-.094 2.219-.906 2.531-1.781.313-.875.313-1.625.219-1.781-.094-.125-.344-.219-.719-.375z"/>
      </svg>
      <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-[#1a0a2e] text-white text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Faça sua encomenda agora
      </span>
    </a>
  )
}

function Footer() {
  return (
    <footer className="py-14 px-6 bg-[#1a0a2e] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-black text-[#f5c518] mb-1">Fefy's</h3>
            <p className="text-[#16a34a] font-bold text-sm uppercase tracking-widest mb-4">Alimentação Inclusiva</p>
            <p className="text-white/60 leading-relaxed text-sm">
              Comida vegana artesanal feita com amor. Coma sem culpa, viva com sabor.
            </p>
          </div>
          <div>
            <h4 className="font-black text-[#f5c518] mb-5 uppercase tracking-wide text-sm">Contato</h4>
            <p className="text-white/70 mb-2 text-sm">fefys.alimentacao.inclusiva@gmail.com</p>
            <p className="text-white/70 text-sm">(41) 98799-7556</p>
          </div>
          <div>
            <h4 className="font-black text-[#f5c518] mb-5 uppercase tracking-wide text-sm">Horário</h4>
            <p className="text-white/70 mb-2 text-sm">Segunda a Sábado</p>
            <p className="text-white/70 text-sm">11h às 21h</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2026 Fefy's - Alimentação Inclusiva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
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
      <Depoimentos/>
      <Contato />
      <BotaoWhatsApp />
      <Footer />
    </div>
  )
}

export default App