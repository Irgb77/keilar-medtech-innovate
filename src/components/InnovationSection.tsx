import { Brain, Database, Shield, Zap, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InnovationSection = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Deep Learning Médico",
      description: "Redes neuronales especializadas en patrones médicos complejos",
      impact: "99.2% precisión"
    },
    {
      icon: Database,
      title: "Big Data Sanitario",
      description: "Análisis de millones de registros para insights predictivos",
      impact: "10M+ registros"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Encriptación de grado militar y cumplimiento GDPR total",
      impact: "100% seguro"
    },
    {
      icon: Zap,
      title: "Procesamiento en Tiempo Real",
      description: "Respuestas instantáneas para decisiones críticas",
      impact: "<100ms latencia"
    }
  ];

  const metrics = [
    { label: "Centros Implementados", value: "50+", icon: Users },
    { label: "Reducción Errores", value: "94%", icon: Shield },
    { label: "Aumento Eficiencia", value: "85%", icon: TrendingUp },
    { label: "Satisfacción Cliente", value: "96%", icon: Brain }
  ];

  const technologies = [
    "TensorFlow Medical",
    "PyTorch Healthcare",
    "DICOM Integration",
    "HL7 FHIR",
    "Cloud Computing",
    "Edge AI",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Blockchain Security"
  ];

  return (
    <section id="innovacion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Innovación <span className="text-primary">Tecnológica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías de vanguardia que establecen nuevos estándares en la industria sanitaria
          </p>
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {innovations.map((innovation, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <innovation.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">{innovation.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {innovation.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/10 text-primary text-sm font-bold px-3 py-2 rounded-full inline-block">
                  {innovation.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Resultados que Hablan por Sí Solos
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-white/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Tecnologías que <span className="text-primary">Dominamos</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-card border border-border text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;