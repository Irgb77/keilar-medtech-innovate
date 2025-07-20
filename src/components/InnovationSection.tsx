import { Lightbulb, Rocket, Shield, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InnovationSection = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: "Automatización Inteligente de Historiales",
      description: "Sistema IA que convierte documentos médicos no estructurados en historiales digitales completos y consultables.",
      impact: "Reduce 80% tiempo documentación"
    },
    {
      icon: Target,
      title: "Predicción de Riesgos Clínicos",
      description: "Algoritmos de machine learning que analizan patrones en tiempo real para predecir complicaciones médicas.",
      impact: "Mejora 65% detección temprana"
    },
    {
      icon: Rocket,
      title: "Optimización de Recursos Hospitalarios",
      description: "IA para gestión inteligente de camas, quirófanos y personal médico basada en patrones históricos y predicciones.",
      impact: "Incrementa 40% eficiencia operativa"
    },
    {
      icon: Shield,
      title: "Validación Automática de Protocolos",
      description: "Sistema que verifica automáticamente el cumplimiento de protocolos médicos y normativas sanitarias.",
      impact: "100% cumplimiento normativo"
    }
  ];

  const stats = [
    { number: "500+", label: "Proyectos IA Implementados", icon: TrendingUp },
    { number: "95%", label: "Reducción Tareas Burocráticas", icon: Target },
    { number: "50+", label: "Centros Sanitarios", icon: Users },
    { number: "24/7", label: "Monitorización Continua", icon: Shield }
  ];

  return (
    <section id="innovacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Innovación <span className="text-primary">Tecnológica</span> Sanitaria
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Desarrollamos tecnologías de vanguardia que transforman la práctica médica, 
            mejorando la eficiencia operativa y la calidad asistencial
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <innovation.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">
                      {innovation.title}
                    </CardTitle>
                    <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {innovation.impact}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {innovation.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Highlight */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Tecnología Patentada
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Nuestro sistema de IA médica combina procesamiento de lenguaje natural, 
                visión por computadora y análisis predictivo para crear soluciones integrales 
                que se adaptan a las necesidades específicas de cada centro sanitario.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Integración sin interrupciones en sistemas existentes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Cumplimiento total de normativas europeas (GDPR, MDR)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Escalabilidad desde pequeñas clínicas a grandes hospitales</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Rocket className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <div className="text-xl font-semibold">Próxima Generación</div>
                  <div className="text-white/80">IA Médica Avanzada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;