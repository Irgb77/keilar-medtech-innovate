import { Brain, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical-ai.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Líderes en
                <span className="block text-accent">IA Sanitaria</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transformamos el sector sanitario a través de soluciones de inteligencia artificial innovadoras, 
                automatización de procesos y tecnología médica de vanguardia.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Brain className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">+500 Casos IA Implementados</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">95% Reducción Burocracia</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">ISO 27001 Certificado</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow"
              >
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Ver Casos de Éxito
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="IA Sanitaria Keilar+" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-glow animate-pulse">
              <Brain className="h-8 w-8 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;