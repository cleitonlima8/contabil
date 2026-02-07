import { Target, Eye, Handshake, CheckCircle, Compass } from "lucide-react";
import equipeImg from "@/assets/equipe.jpg";

const AboutSection = () => {
  const values = [
    "Verdade",
    "Humanização",
    "Ordem",
    "Lealdade",
    "Responsabilidade",
    "Fé",
    "Família",
  ];

  return (
    <section id="quem-somos" className="min-h-screen flex items-center py-24 bg-ice-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <span className="inline-block bg-petrol-blue/10 text-petrol-blue px-4 py-2 rounded-full text-sm font-medium">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-petrol-blue">
              Uma história de compromisso e excelência
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Há mais de 12 anos, nossa equipe de contadores e consultores trabalha 
              incansavelmente para transformar a gestão contábil de centenas de empresas 
              em todo o Brasil.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que a contabilidade vai muito além de números e obrigações. 
              É sobre entender o seu negócio, antecipar oportunidades e construir uma 
              parceria de longo prazo baseada em confiança e resultados.
            </p>

            {/* Team Image */}
            <div className="relative mt-8">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={equipeImg} 
                  alt="Nossa Equipe" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-blue/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-lg">Nossa Equipe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Mission, Vision, Values */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-7 w-7 text-emerald-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                    Missão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                   Existimos para ser a ponte entre o pequeno e médio empresário brasileiro e a clareza contábil, 
                   financeira e burocrática, transformando complexidade em resolutividade. Nosso propósito é sermos úteis
                   e impactar positivamente, através do bom servir e do conhecimento, a jornada daqueles que desejam progredir
                   e ordenar suas empresas no Brasil e, futuramente, no mundo.
                  </p>
                </div>
              </div>
            </div>

                {/* Propósito */}
                <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                      <Compass className="h-7 w-7 text-emerald-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                        Propósito
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ir além da contabilidade: existimos para auxiliar, dar suporte e sustento, simplificando o que parece impossível e guiando nossos clientes para a prosperidade.

                        É revelar a verdade por trás dos números, desmistificar a burocracia e, através do conhecimento, gerar a transformação que leva à ordem e ao progresso de seus negócios e vidas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-7 w-7 text-emerald-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                    Visão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser a referência nacional em consultoria contábil e estratégica para pequenos e médios negócios, 
                    reconhecida por simplificar o complexo, empoderar empreendedores com conhecimento e ser a parceira 
                    essencial para a ordenação e a prosperidade empresarial, levando nossa voz e metodologia a grandes lugares.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="h-7 w-7 text-emerald-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                    Valores
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {values.map((value) => (
                      <div key={value} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-green" />
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
