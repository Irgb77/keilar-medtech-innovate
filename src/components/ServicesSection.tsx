import { Bot, FileText, Image, Search, Cpu, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import automationImage from "@/assets/ai-automation.jpg";
import analysisImage from "@/assets/medical-analysis.jpg";
import researchImage from "@/assets/clinical-research.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización Burocrática",
      description: "Eliminamos la carga administrativa mediante IA que procesa documentos, genera informes y gestiona flujos de trabajo automáticamente.",
      image: automationImage,
      benefits: ["95% reducción tiempo administrativo", "Eliminación errores manuales", "Integración sistemas existentes"]
    },
    {
      icon: Image,
      title: "Análisis de Imágenes Médicas",
      description: "Tecnología de deep learning para diagnóstico asistido, detección temprana de patologías y análisis radiológico avanzado.",
      image: analysisImage,
      benefits: ["Diagnósticos más precisos", "Detección temprana patologías", "Reducción tiempo análisis"]
    },
    {
      icon: Search,
      title: "Investigación y Ensayos Clínicos",
      description: "Plataformas IA para optimización de ensayos clínicos, selección de pacientes y análisis predictivo de resultados.",
      image: researchImage,
      benefits: ["Acelera desarrollo fármacos", "Mejora selección pacientes", "Análisis predictivo resultados"]
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      title: "Machine Learning Médico",
      description: "Algoritmos especializados para patrones médicos complejos"
    },
    {
      icon: Database,
      title: "Big Data Sanitario",
      description: "Procesamiento masivo de datos clínicos para insights accionables"
    },
    {
      icon: FileText,
      title: "NLP Médico",
      description: "Procesamiento de lenguaje natural para documentación clínica"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones de IA especializadas para revolucionar la eficiencia y precisión en el sector sanitario
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Tecnologías <span className="text-primary">Avanzadas</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{tech.title}</h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;