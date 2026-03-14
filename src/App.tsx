import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star, Instagram, Facebook, ChevronRight, Scissors, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "5517997695252";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar um horário.`;

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-black)] text-white selection:bg-[var(--color-brand-gold)] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-brand-black)]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-4 group">
            <div className="font-cursive text-3xl md:text-4xl text-gold pt-2">
              Lucimara Andreotti
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/70">
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#avaliacoes" className="hover:text-gold transition-colors">Avaliações</a>
            <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
          </div>
          
          <div className="flex items-center gap-5">
            <a 
              href="https://www.instagram.com/lu.andreottistudiohair/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-all transform hover:scale-110"
              title="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a 
              href="https://www.facebook.com/salaodebelezalucimara/?locale=pt_BR" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-all transform hover:scale-110"
              title="Facebook"
            >
              <Facebook className="w-7 h-7" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-[var(--color-brand-gold)] hover:text-black transition-all ml-4"
            >
              Agendar Horário
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[var(--color-brand-black)] z-10" />
          <img 
            src="https://img.lightshot.app/I5HUO_5TQIS9CfVPKZeHag.jpg" 
            alt="Salão de Beleza" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-6 block">Studio Hair</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
              Beleza é técnica,<br />
              <span className="italic text-gold">experiência</span> e<br />
              transformação real.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              Há mais de 20 anos valorizando a identidade de cada cliente com atendimento personalizado e foco absoluto em excelência.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors w-full sm:w-auto"
              >
                Agende sua Transformação
              </a>
              <a 
                href="#servicos"
                className="text-white border-b border-white/30 pb-1 text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
              >
                Conheça nossos serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-[var(--color-brand-dark)] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-white/10 relative z-10">
                <img 
                  src="https://img.lightshot.app/I5HUO_5TQIS9CfVPKZeHag.jpg" 
                  alt="Salão de Beleza" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold rounded-full z-0 opacity-50" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-8">A Arte do Cuidado</h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Sou especialista em cortes e penteados, com aperfeiçoamento em cortes com Ro Siqueira e especialização Master em Penteados com grandes referências do mercado como Paulo Militão, Paulo Zani, Sonia Lopes e Adrieli Aguiar.
                </p>
                <p>
                  Essa formação contínua garante técnicas atualizadas, acabamento impecável e alta durabilidade nos resultados. Realizo atendimentos especializados para noivas, criando penteados sofisticados, clássicos ou modernos, sempre alinhados ao estilo do vestido, formato de rosto e proposta do casamento.
                </p>
                <p>
                  Cada atendimento é exclusivo. Aqui você não encontra apenas um serviço, mas um momento único: um espaço acolhedor pensado para proporcionar cuidado, escuta e atenção aos detalhes. Analiso formato de rosto, estilo de vida e rotina antes de indicar qualquer procedimento, porque beleza precisa ser estratégica e funcional.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                <div>
                  <div className="text-4xl font-serif text-gold mb-2">20+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-gold mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Atendimento Exclusivo</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-[var(--color-brand-black)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
            <h2 className="font-serif text-4xl md:text-5xl">Nossos Serviços</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scissors, title: "Cortes Femininos", desc: "Cortes estratégicos e funcionais baseados no seu formato de rosto e rotina." },
              { icon: Sparkles, title: "Penteados para Festas", desc: "Acabamento impecável e alta durabilidade para você brilhar no seu evento." },
              { icon: Heart, title: "Dia da Noiva", desc: "Penteados sofisticados alinhados ao vestido, com teste prévio e execução impecável." },
              { icon: CheckCircle2, title: "Tratamentos", desc: "Cuidados capilares profundos e transformação de visual com responsabilidade." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-white/5 p-8 hover:border-gold/50 transition-colors group bg-[var(--color-brand-gray)]"
              >
                <service.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-32 bg-[var(--color-brand-dark)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-2xl font-serif">5,0</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">O que dizem<br />nossas clientes</h2>
            </div>
            <a 
              href="https://www.google.com/maps/place/Lucimara+Andreotti+Studio+Hair" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-2"
            >
              Ver todas as avaliações <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Milene Gomes",
                text: "Conheço a Lu, desde que me conheço por gente kkkkk. Atualmente moro no Mato Grosso, mas sempre volto pra ela poder restaurar a dignidade do meu cabelo kkkkkk Recomendo super, Profissional com muita experiência e melhor, os produtos profissionais são de ótima qualidade!!!!"
              },
              {
                name: "Angela Alli",
                text: "Foi ótimo,adorei Lucimara eh uma ótima cabeleireira super indico o salão e sou grata meu cabelo estão maravilhosos até hj"
              },
              {
                name: "Luciana M Rossi",
                text: "Uma empresa responsável e eu super índico. Profissional perfeita, atenciosa e antenada as tendências do mercado de Beleza!"
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 border border-white/10 bg-[var(--color-brand-black)] relative"
              >
                <div className="text-gold text-4xl font-serif absolute top-6 right-8 opacity-20">"</div>
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/70 font-light italic mb-8 text-sm leading-relaxed">"{review.text}"</p>
                <div className="font-serif text-lg">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contato" className="py-32 bg-[var(--color-brand-black)] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Visite-nos</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-12">Agende seu momento</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Endereço</h4>
                    <p className="text-white/50 font-light text-sm leading-relaxed">
                      Rua das Cerejas, 133<br />
                      Nova Catanduva I<br />
                      Catanduva - SP, 15813-287
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Horário de Funcionamento</h4>
                    <p className="text-white/50 font-light text-sm leading-relaxed">
                      Aberto até as 20:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Contato & Redes Sociais</h4>
                    <p className="text-white/50 font-light text-sm leading-relaxed mb-4">
                      (17) 99769-5252
                    </p>
                    <div className="flex flex-col gap-5">
                      <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold hover:text-white transition-colors"
                      >
                        Chamar no WhatsApp <ChevronRight className="w-4 h-4" />
                      </a>
                      <a 
                        href="https://www.instagram.com/lu.andreottistudiohair/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors group"
                      >
                        <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform text-gold" />
                        <span className="text-sm font-light">@lu.andreottistudiohair</span>
                      </a>
                      <a 
                        href="https://www.facebook.com/salaodebelezalucimara/?locale=pt_BR" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors group"
                      >
                        <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform text-gold" />
                        <span className="text-sm font-light">Lucimara Andreotti Studio Hair</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-auto border border-white/10 p-2 bg-[var(--color-brand-gray)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.288210350993!2d-48.9904126!3d-21.1444908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc1f005c21df3b%3A0x8f3c7f81f1d1f0!2sLucimara%20Andreotti%20Studio%20Hair!5e0!3m2!1spt-BR!2sbr!4v1709000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[var(--color-brand-black)] border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="font-cursive text-4xl md:text-5xl text-gold">
              Lucimara Andreotti
            </div>
          </div>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-8">
            Empresa de empreendedoras
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="https://www.instagram.com/lu.andreottistudiohair/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all transform hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a 
              href="https://www.facebook.com/salaodebelezalucimara/?locale=pt_BR" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all transform hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
          <div className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Lucimara Andreotti Studio Hair. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
