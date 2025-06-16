import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Star, Shield, Zap, BookOpen, Smartphone, Package, User, MessageCircle, Calendar, CreditCard, Target, Heart, TrendingUp, Award, Users, ThumbsUp } from 'lucide-react';
 
function App() {
  const [showContent, setShowContent] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(160); // 2 minutes 40 seconds
  const delaySeconds = 160;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delaySeconds * 1000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const modules = [
    {
      title: "IMPORTÂNCIA, FATOS E MITOS SOBRE O PROTOCOLO",
      description: "Você vai entender por que dominar essa habilidade pode ser o seu maior diferencial na vida e na cama — e como isso pode te destacar de qualquer outro homem que ela já teve. Aqui, começa o caminho para virar o melhor da vida dela.",
      icon: Target
    },
    {
      title: "LENDO SINAIS DA MULHER, ANATOMIA FEMININA E ZONAS ERÓGENAS",
      description: "Aprenda a enxergar o que a maioria dos homens ignora: os sinais do corpo dela. Entenda onde e como tocar pra fazer ela perder o controle — e sentir que com você é diferente de tudo o que ela já viveu.",
      icon: Heart
    },
    {
      title: "COMO FAZER UM ORAL INESQUECÍVEL NELAS",
      description: "Técnicas práticas e diretas pro que realmente funciona. Sem enrolação, sem achismo. Você vai sair sabendo exatamente o que fazer pra ela chegar lá — e querer de novo. E de novo. E de novo.",
      icon: Star
    },
    {
      title: "DESENVOLVENDO A ENERGIA VITAL QUE ELAS AMAM",
      description: "Grandes guerreiros e sábios do passado desenvolveram técnicas para aumentar a energia do corpo promovendo mais saúde, atração sexual e presença corporal. Com um exercício simples você vai mudar sua disposição e energia.",
      icon: Zap
    }
  ];

  const packages = [
    {
      icon: Smartphone,
      title: "VERSÃO DIGITAL",
      price: "R$27",
      features: [
        "O protocolo completo em formato digital",
        "Acesso imediato por e-mail",
        "Leia no celular, tablet ou computador",
        "Todas as técnicas e estratégias"
      ],
      highlight: false
    },
    {
      icon: MessageCircle,
      title: "+ AGENTE DE IA PESSOAL",
      price: "R$97",
      monthly: "+ R$17/mês",
      features: [
        "Seu conselheiro masculino 24h via WhatsApp",
        "Orientações personalizadas para cada situação",
        "Alimentado com centenas de livros de filosofia",
        "Funciona como seu conselheiro pessoal",
        "Acompanhamento científico e gamificado",
        "Banco de dados que se adapta ao seu perfil"
      ],
      highlight: true
    },
    {
      icon: Package,
      title: "VERSÃO FÍSICA PREMIUM",
      price: "R$147",
      features: [
        "O protocolo completo impresso + ferramentas exclusivas",
        "Livro físico de alta qualidade",
        "Planner de desenvolvimento de projetos",
        "Diário de acompanhamento das atividades",
        "Material para tracking de resultados",
        "Frete grátis para todo Brasil"
      ],
      highlight: false
    }
  ];

  const socialProofStats = [
    {
      icon: Users,
      number: "+4.357",
      label: "Homens Transformados",
      color: "text-yellow-400"
    },
    {
      icon: ThumbsUp,
      number: "99%",
      label: "Taxa de Satisfação",
      color: "text-green-400"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Avaliação Média",
      color: "text-blue-400"
    },
    {
      icon: Award,
      number: "100%",
      label: "Garantia de Resultado",
      color: "text-purple-400"
    }
  ];

  const faqs = [
    {
      question: "O que vou aprender neste protocolo?",
      answer: "O homem comum vai aprender como manter mulheres extraordinárias na sua vida através das melhores técnicas de comunicação, linguagem e satisfação sexual conhecidas pelo homem e utilizadas desde os primórdios da humanidade."
    },
    {
      question: "Como funciona o Agente de IA?",
      answer: "É seu conselheiro pessoal via WhatsApp, disponível 24h. Ele foi treinado com centenas de livros sobre desenvolvimento masculino e cria um perfil personalizado sobre você, adaptando as orientações para cada situação específica que você viver."
    },
    {
      question: "Como funciona a política de reembolso?",
      answer: "Você tem 7 dias de garantia incondicional para a versão digital. Significa que se você comprar o Protocolo hoje, começar a seguir as técnicas e se não gostar, você pode solicitar seu reembolso diretamente na plataforma sem nenhum problema."
    },
    {
      question: "Quanto tempo de acesso tenho?",
      answer: "Versão Digital: Vitalício. O programa será para sempre seu. Agente de IA: Enquanto mantiver a assinatura ativa. Versão Física: É sua para sempre, obviamente."
    },
    {
      question: "Como acesso após a compra?",
      answer: "Versão Digital: Recebe acesso por email em até 5 minutos. Agente de IA: Recebe instruções de ativação via WhatsApp. Versão Física: Enviamos pelos Correios em até 48h úteis."
    },
    {
      question: "Posso cancelar a assinatura do Agente de IA?",
      answer: "Sim, você pode cancelar a qualquer momento. Sem multa, sem complicação."
    }
  ];

  const purchaseUrl = "https://protocolo-volat.pay.yampi.com.br/r/666ZR2LFCU";

  return (
    <div className="min-h-screen bg-white text-black font-rounded">
      {/* Hero Section - Black Background */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              ESSE VÍDEO PODE DESAPARECER A QUALQUER MOMENTO
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-12 leading-relaxed text-gray-300">
              Assista enquanto ainda tem tempo
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-4 border-yellow-400">
              <div style="position:relative;padding-top:56.25%;"><iframe id="panda-d0150b8d-0f36-4e07-8d93-e6f04c310beb" src="https://player-vz-5ab06143-302.tv.pandavideo.com.br/embed/?v=d0150b8d-0f36-4e07-8d93-e6f04c310beb&iosFakeFullscreen=true" style="border:none;position:absolute;top:0;left:0;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen=true width="100%" height="100%" fetchpriority="high"></iframe><script>if(!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')){let s=document.createElement('script');s.src='https://player.pandavideo.com.br/api.v2.js'; s.async=true; document.head.appendChild(s);} window.pandascripttag = window.pandascripttag || [];window.pandascripttag.push(function (){const panda_id_player = 'panda-d0150b8d-0f36-4e07-8d93-e6f04c310beb';const p=new PandaPlayer(panda_id_player,{onReady(){p.loadWindowScreen({panda_id_player});}});})</script></div>
            </div>
          </div>
          
          {/* Purchase Button - Shows when timer ends */}
          {showContent && (
            <div className="mb-12">
              <a 
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-12 py-6 text-2xl font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                COMEÇAR POR APENAS R$27
              </a>
            </div>
          )}
          
          {!showContent && (
            <div className="space-y-6">
              <div className="w-px h-16 bg-gray-600 mx-auto"></div>
              <div className="flex items-center justify-center space-x-4 text-lg">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Conteúdo completo em {formatTime(timeRemaining)}</span>
              </div>
              <div className="w-32 h-px bg-gray-600 mx-auto"></div>
            </div>
          )}
        </div>
      </div>

      {/* Sales Content - Only shown after delay */}
      {showContent && (
        <>
          {/* Social Proof Section */}
          <div className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
                  RESULTADOS COMPROVADOS
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {socialProofStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-4">
                        <stat.icon className={`w-12 h-12 ${stat.color}`} />
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm md:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Main Pitch */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Você não precisa ser bonito, rico ou sarado.
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-12 text-yellow-600">
                  Só precisa ter TALENTO.
                </h3>
                
                <div className="mb-12">
                  <img 
                    src="/1.png"
                    alt="Homem confiante"
                    className="w-64 h-64 rounded-full mx-auto mb-8 object-cover shadow-2xl"
                  />
                </div>
                
                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  O Protocolo Secreto do Prazer é o guia direto e sem frescura pra você virar o homem que ela vai lembrar, contar pras amigas e querer de novo.
                </p>
                
                <p className="text-lg md:text-xl mb-12 text-gray-700 leading-relaxed">
                  Este é o programa completo que transforma sua presença, comunicação, mentalidade e habilidades na cama para você se tornar verdadeiramente inesquecível.
                </p>
                
                <a 
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black px-12 py-6 text-2xl font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  COMEÇAR POR APENAS R$27
                </a>                
              </div>
            </div>
          </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Shield className="w-8 h-8 text-green-400" />
                  <span className="text-lg">Compra Segura pelo Mercado Pago</span>
                </div>
          
          {/* What You'll Learn Section */}
          <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  O QUE VOCÊ PRECISA SABER
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-700">
                  PRA VIRAR O JOGO COM ELAS
                </h3>
                <div className="text-center mt-16">
                  <img 
                    src="/2.png"
                    alt="Casal feliz"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl mb-8"
                  />
                </div>                
                <div className="grid md:grid-cols-2 gap-8">
                  {modules.map((module, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-400">
                      <div className="flex items-center mb-4">
                        <module.icon className="w-8 h-8 text-yellow-600 mr-4" />
                        <h4 className="text-xl font-bold text-gray-900">{module.title}</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{module.description}</p>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>

          {/* Why It Works Section */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Por Que Este Método Funciona Onde Outros Falham
                </h2>
                
                <div className="mb-12">
                  <img 
                    src="/3.png"
                    alt="Transformação pessoal"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl mb-8"
                  />
                </div>
                
                <div className="bg-black text-white p-12 rounded-lg">
                  <p className="text-xl leading-relaxed mb-6">
                    A maioria dos homens foca apenas em um aspecto - físico, dinheiro ou técnicas isoladas. Mas mulheres extraordinárias querem o pacote completo: presença, confiança, habilidade e conexão emocional.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Este protocolo integra todos esses elementos de forma prática e direta, sem enrolação ou teoria desnecessária.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Author Section */}
          <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                  SOBRE O AUTOR
                </h2>
                
                <div className="bg-white p-12 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                    <div className="flex-shrink-0">
                      <img 
                        src="/4.png"
                        alt="Gustavo Andere"
                        className="w-48 h-48 rounded-full object-cover shadow-xl"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">Gustavo Andere</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Gustavo Andere não é coach, não é guru e não tem papo furado. Ele é um homem comum que decidiu fazer diferente — e hoje, é referência entre os caras que querem parar de ser medianos e começar a ser inesquecíveis.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      Depois de passar os últimos anos vendo a frustração dos homens por não conseguir manter uma mulher acima da média do seu lado, ele percebeu que saber dar prazer a uma mulher é uma habilidade indispensável para o cara que quer se destacar.
                    </p>
                    
                    <p>
                      Com curiosidade, muita conversa e MUITA PRÁTICA com todo tipo de mulheres em todo tipo de situação, ele mergulhou fundo no que quase nenhum homem tem coragem de estudar: a arte do sexo oral bem-feito.
                    </p>
                    
                    <p>
                      No Protocolo Secreto do Prazer, Gustavo compartilha tudo o que aprendeu — sem rodeios, sem vergonha, sem frescura. Só o que funciona. Ele vai direto ao ponto pra te ensinar o que muitos homens nem sabem que estão errando. Se você quer ser lembrado por mais do que só um "boa noite", esse é o programa que muda o jogo.
                    </p>
                  </div>
                  
                  <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-lg font-semibold text-gray-900 text-center">
                      O melhor protocolo para homens comuns interessados em desenvolvimento pessoal sem frescura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  COMPRAR AGORA
                </h2>
                <p className="text-xl text-center mb-16 text-gray-700">
                  Diferentes formas de acessar o mesmo conteúdo transformador
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {packages.map((pkg, index) => (
                    <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${pkg.highlight ? 'border-4 border-yellow-400 transform scale-105' : 'border border-gray-200'}`}>
                      <div className="text-center mb-6">
                        <pkg.icon className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                        <div className="text-4xl font-bold text-yellow-600 mb-2">{pkg.price}</div>
                        {pkg.monthly && <div className="text-lg text-gray-600">{pkg.monthly}</div>}
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href={purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                          pkg.highlight 
                            ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                            : 'bg-black text-white hover:bg-gray-800'
                        }`}
                      >
                        COMPRAR AGORA
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Shield className="w-8 h-8 text-green-400" />
                  <span className="text-lg">Compra Segura pelo Mercado Pago</span>
                </div>
          {/* FAQ Section */}
          <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                  PERGUNTAS FREQUENTES
                </h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-400">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-black text-white py-20">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  PARE DE SER MAIS UM
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400">
                  VIRE O HOMEM QUE ELA NUNCA VAI ESQUECER
                </h3>
                
                <p className="text-xl mb-12 leading-relaxed text-gray-300">
                  Você tem duas opções: continuar sendo comum ou dar o primeiro passo para se tornar extraordinário. A escolha é sua.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Shield className="w-8 h-8 text-green-400" />
                  <span className="text-lg">Compra Segura pelo Mercado Pago</span>
                </div>
                
                <a 
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black px-16 py-8 text-3xl font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  COMEÇAR AGORA POR R$27
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;