import { Quote, Star, TrendingUp, Clock, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  const testimonials = [
    {
      quote: "La implementación de la IA de Keilar+ ha revolucionado nuestra gestión administrativa. Hemos reducido el tiempo de procesamiento de historiales en un 85% y mejorado significativamente la satisfacción de nuestro personal médico.",
      author: "Dr. Miguel Ángel R.",
      position: "Director Médico",
      organization: "Hospital Universitario de Catalunya",
      metrics: { time: "85%", efficiency: "92%", satisfaction: "96%" }
    },
    {
      quote: "El sistema de análisis de imágenes médicas nos ha permitido detectar patologías en etapas tempranas que antes pasaban desapercibidas. Es una herramienta invaluable para nuestro departamento de radiología.",
      author: "Dra. Carmen L.",
      position: "Jefa de Radiología",
      organization: "Centro Médico Avanzado",
      metrics: { detection: "65%", accuracy: "98%", time: "70%" }
    },
    {
      quote: "Gracias a la automatización de nuestros ensayos clínicos, hemos acelerado el desarrollo de nuevos tratamientos y mejorado la calidad de nuestros datos. Keilar+ es un socio tecnológico excepcional.",
      author: "Prof. Joaquín M.",
      position: "Director de Investigación",
      organization: "Instituto de Investigación Biomédica",
      metrics: { speed: "50%", quality: "94%", compliance: "100%" }
    }
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Hospital de 500 Camas",
      subtitle: "Automatización Completa de Admisiones",
      results: [
        "Reducción 90% tiempo admisión",
        "Eliminación errores manuales",
        "Mejora experiencia paciente"
      ],
      timeframe: "Implementado en 3 meses"
    },
    {
      icon: Clock,
      title: "Red de 12 Centros de Salud",
      subtitle: "Optimización de Citas y Recursos",
      results: [
        "Incremento 40% eficiencia",
        "Reducción 60% lista espera",
        "Optimización recursos 24/7"
      ],
      timeframe: "ROI positivo en 6 meses"
    },
    {
      icon: Award,
      title: "Laboratorio de Análisis Clínicos",
      subtitle: "IA para Diagnóstico Automático",
      results: [
        "Precisión diagnóstica 99.2%",
        "Reducción 75% tiempo análisis",
        "Certificación ISO 15189"
      ],
      timeframe: "Validado clínicamente"
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Casos de <span className="text-primary">Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de profesionales sanitarios que han transformado 
            sus organizaciones con nuestras soluciones de IA
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-card transition-all duration-300 border-border/50">
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="border-t border-border pt-4">
                  <div className="mb-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.position}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.organization}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(testimonial.metrics).map(([key, value], i) => (
                      <div key={i} className="bg-muted/50 rounded p-2">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Estudios de <span className="text-primary">Caso</span> Detallados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <study.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{study.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {study.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-2 rounded-full inline-block">
                    {study.timeframe}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿Quieres ser el próximo caso de éxito?
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Únete a los más de 50 centros sanitarios que ya han transformado 
            su eficiencia operativa con nuestras soluciones de IA
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Demo
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;