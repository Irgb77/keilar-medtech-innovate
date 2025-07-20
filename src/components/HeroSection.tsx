import { ArrowRight, Brain, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical-ai.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative py-20 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Brain className="h-4 w-4" />
                <span>Líderes en IA Sanitaria</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Revolucionamos la 
                <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> Medicina</span> 
                con IA
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transformamos sistemas sanitarios mediante inteligencia artificial avanzada: 
                automatización burocrática, análisis de imágenes médicas e investigación clínica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white group">
                Solicitar Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Ver Casos de Éxito
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Reducción Burocracia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Precisión Diagnóstica</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Centros Implementados</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="IA aplicada a medicina" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-accent to-orange-400 opacity-20 rounded-full blur-3xl"></div>
            
            {/* Feature cards */}
            <div className="absolute top-8 -left-8 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Seguridad Garantizada</div>
                  <div className="text-xs text-muted-foreground">Certificación GDPR</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 -right-8 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-orange-400 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Implementación Rápida</div>
                  <div className="text-xs text-muted-foreground">En menos de 30 días</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;