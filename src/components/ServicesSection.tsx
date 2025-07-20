import { FileText, Camera, FlaskConical, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import automationImage from "@/assets/ai-automation.jpg";
import analysisImage from "@/assets/medical-analysis.jpg";
import researchImage from "@/assets/clinical-research.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Automatización Burocrática",
      description: "Eliminamos la carga administrativa que consume el tiempo valioso de los profesionales sanitarios",
      image: automationImage,
      features: [
        "Procesamiento automático de historiales clínicos",
        "Gestión inteligente de citas y recursos",
        "Automatización de informes médicos",
        "Integración con sistemas existentes",
        "Reducción hasta 85% tiempo administrativo"
      ],
      metrics: "85% menos tiempo en burocracia"
    },
    {
      icon: Camera,
      title: "Análisis de Imágenes Médicas",
      description: "IA avanzada para diagnóstico por imagen con precisión superior al análisis manual",
      image: analysisImage,
      features: [
        "Detección temprana de patologías",
        "Análisis de radiografías, TAC y resonancias",
        "Clasificación automática de lesiones",
        "Apoyo al diagnóstico diferencial",
        "Reducción de falsos negativos"
      ],
      metrics: "98.5% precisión diagnóstica"
    },
    {
      icon: FlaskConical,
      title: "Investigación y Ensayos Clínicos",
      description: "Aceleración de la investigación médica mediante IA para el desarrollo de nuevos tratamientos",
      image: researchImage,
      features: [
        "Análisis predictivo de resultados",
        "Optimización de protocolos de estudio",
        "Identificación de patrones en grandes datasets",
        "Monitorización automática de pacientes",
        "Cumplimiento normativo automatizado"
      ],
      metrics: "50% más rápido desarrollo"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones de IA especializadas para transformar cada aspecto de la atención sanitaria
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <service.icon className="h-5 w-5" />
                  <span className="font-medium">{service.title}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg text-white">
                  <div className="font-semibold text-lg">{service.metrics}</div>
                  <div className="text-sm text-white/80">Resultado promedio documentado</div>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative z-10">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-2xl transform rotate-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;