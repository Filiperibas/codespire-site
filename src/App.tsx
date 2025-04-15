import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Instagram, 
  MessageCircle, 
  ChevronRight,
  Clock,
  Users,
  Smartphone,
  Lock,
  TrendingUp,
  Send,
  Check,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Menu,
  X,
  Mail,
  Phone
} from 'lucide-react';

import site1 from './portfolio-img/site1.png';
import site2 from './portfolio-img/site2.png';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      image: site1,
      title: "Cardápio Virtual",
      description: "Desenvolvimento de loja virtual completa para restaurantes, com cardápio digital, integração de pedidos e foco na experiência do usuário.",
      client: "CodeSpire"
    },
    {
      image: site2,
      title: "Água Express",
      description: "Sistema digital para pedidos de galões de água, com catálogo de produtos, integração com WhatsApp e visual responsivo.",
      client: "CodeSpire"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-black border-b border-[#d4af37]/20 z-50">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37]" />
            <span className="ml-2 text-xl md:text-2xl font-bold">CodeSpire</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#d4af37] transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Portfólio</a>
            <a href="#packages" className="hover:text-[#d4af37] transition-colors">Pacotes</a>
          </div>

          {/* Desktop CTA Button */}
          <a 
            href="https://wa.me/5569993646288" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center bg-[#d4af37] text-black px-4 md:px-6 py-2 rounded-full hover:bg-[#d4af37]/90 transition-colors whitespace-nowrap text-sm md:text-base"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Solicitar orçamento
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-[#d4af37]/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black border-t border-[#d4af37]/20`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="hover:text-[#d4af37] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="hover:text-[#d4af37] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#portfolio" 
              className="hover:text-[#d4af37] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfólio
            </a>
            <a 
              href="#packages" 
              className="hover:text-[#d4af37] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pacotes
            </a>
            <a 
              href="https://wa.me/5569993646288" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center bg-[#d4af37] text-black px-6 py-3 rounded-full hover:bg-[#d4af37]/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-black via-[#121212] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="md:hidden">
                Soluções Digitais para seu Negócio Online
              </span>
              <span className="hidden md:block">
                Soluções Digitais Inteligentes para Empresas que Querem Crescer Online
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              <span className="md:hidden">
                Sites e automações sob medida para seu negócio.
              </span>
              <span className="hidden md:block">
                Desenvolvimento de sites, automações e presença digital sob medida.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5569993646288" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#d4af37] text-black px-8 py-4 rounded-full hover:bg-[#d4af37]/90 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Falar no WhatsApp
              </a>
              <a 
                href="https://instagram.com/codespire.inc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] px-8 py-4 rounded-full hover:bg-[#d4af37]/10 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-6 h-6 mr-2" />
                Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-2">Sobre a CodeSpire</h2>
            <div className="w-32 h-1 bg-[#d4af37] mb-12"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  A CodeSpire é uma empresa especializada em transformar visões digitais em realidade. 
                  Nossa missão é impulsionar o crescimento dos nossos clientes através de soluções 
                  tecnológicas inovadoras e personalizadas.
                </p>
                <p className="text-lg">
                  Com uma equipe altamente qualificada e anos de experiência no mercado, 
                  garantimos resultados excepcionais e um atendimento personalizado para 
                  cada projeto.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Desenvolvimento web profissional"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Landing Page Profissional',
                  description: 'Páginas otimizadas para converter visitantes em clientes.',
                  icon: <ChevronRight className="w-8 h-8 text-[#d4af37]" />
                },
                {
                  title: 'Sistemas e Aplicativos Sob Medida',
                  description: 'Sistemas web e aplicativos personalizados, integrados às necessidades reais do seu negócio.',
                  icon: <Code2 className="w-8 h-8 text-[#d4af37]" />
                },
                {
                  title: 'Google Meu Negócio',
                  description: 'Otimização e gestão da sua presença no Google.',
                  icon: <TrendingUp className="w-8 h-8 text-[#d4af37]" />
                },
                {
                  title: 'Automações WhatsApp & Instagram',
                  description: 'Automatize seu atendimento e aumente suas vendas.',
                  icon: <Send className="w-8 h-8 text-[#d4af37]" />
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="p-8 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37] transition-colors"
                >
                  {service.icon}
                  <h3 className="text-2xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Nossos Pacotes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Start Local */}
              <div className="bg-[#121212] rounded-xl p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors">
                <h3 className="text-2xl font-bold mb-4">Start Local</h3>
                <div className="text-3xl font-bold mb-6 text-[#d4af37]">R$ 1197</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Landing Page Profissional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>SEO Local</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Relatório de desempenho básico mensal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Domínio Grátis (1 ano)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Manutenção GMB (plano 6 meses): R$100/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Suporte 24/7</span>
                  </li>
                </ul>
                <a 
                  href="https://wa.me/5569993646288?text=Interesse%20no%20pacote%20Start%20Local" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-[#d4af37] text-black rounded-lg font-bold hover:bg-[#d4af37]/90 transition-colors"
                >
                  Contratar Agora
                </a>
              </div>

              {/* Negócio Digital */}
              <div className="bg-[#121212] rounded-xl p-8 border-2 border-[#d4af37] transform scale-105 shadow-xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Negócio Digital</h3>
                <div className="text-3xl font-bold mb-6 text-[#d4af37]">R$ 1.997</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Site Institucional Completo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Google Meu Negócio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Otimização SEO Avançada</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Relatório de desempenho básico mensal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>WhatsApp Automatizado respostas automáticas + envio de catálogo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Domínio Grátis (1 ano)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Manutenção (plano 6 meses): R$175/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Suporte 24/7</span>
                  </li>
                </ul>
                <a 
                  href="https://wa.me/5569993646288?text=Interesse%20no%20pacote%20Negócio%20Digital" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-[#d4af37] text-black rounded-lg font-bold hover:bg-[#d4af37]/90 transition-colors"
                >
                  Contratar Agora
                </a>
              </div>

              {/* Impulso Total */}
              <div className="bg-[#121212] rounded-xl p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors">
                <h3 className="text-2xl font-bold mb-4">Impulso Total</h3>
                <div className="text-3xl font-bold mb-6 text-[#d4af37]">R$ 2.997</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>E-commerce Personalizado Completo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Integração com Pagamentos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Automação de WhatsApp + Instagram</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Google Meu Negócio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Manutenção (plano 6 meses): R$175/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#d4af37] mr-2" />
                    <span>Suporte 24/7</span>
                  </li>
                </ul>
                <a 
                  href="https://wa.me/5569993646288?text=Interesse%20no%20pacote%20Impulso%20Total" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-[#d4af37] text-black rounded-lg font-bold hover:bg-[#d4af37]/90 transition-colors"
                >
                  Contratar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Diferenciais da CodeSpire</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { icon: <Clock />, text: 'Entregas ágeis' },
                { icon: <Users />, text: 'Suporte humanizado' },
                { icon: <Smartphone />, text: 'Responsividade garantida' },
                { icon: <Lock />, text: 'Segurança e estabilidade' },
                { icon: <TrendingUp />, text: 'Foco em resultados locais' }
              ].map((differential, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#d4af37]">
                    {differential.icon}
                  </div>
                  <p className="text-sm">{differential.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Nosso Portfólio</h2>
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div className="relative h-[600px]">
                  {portfolioItems.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute w-full h-full transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300 mb-2">{item.description}</p>
                        <p className="text-[#d4af37]">Cliente: {item.client}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#d4af37]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Code2 className="w-8 h-8 text-[#d4af37]" />
                <span className="ml-2 text-2xl font-bold">CodeSpire</span>
              </div>
              <p className="mb-4 flex items-center">
                <Mail className="w-5 h-5 text-[#d4af37] mr-2" />
                <a href="mailto:codespire.inc@gmail.com" className="hover:text-[#d4af37] transition-colors">
                  codespire.inc@gmail.com
                </a>
              </p>
              <p className="mb-4 flex items-center">
                <Instagram className="w-5 h-5 text-[#d4af37] mr-2" />
                <a href="https://instagram.com/codespire.inc" className="hover:text-[#d4af37] transition-colors">
                  @codespire.inc
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 text-[#d4af37] mr-2" />
                <a href="https://wa.me/5569993646288" className="hover:text-[#d4af37] transition-colors">
                  (69) 99364-6288
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Serviços</a>
                <a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Portfólio</a>
                <a href="#packages" className="hover:text-[#d4af37] transition-colors">Pacotes</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#d4af37]/20 text-center text-sm text-gray-400">
            © CodeSpire 2025 – Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5569993646288" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1EA952] transition-colors z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;