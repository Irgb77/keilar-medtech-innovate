import { Phone, Mail, MapPin, Clock, Send, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono Principal",
      value: "933 657 758",
      secondary: "Backup: 651 700 100",
      description: "Lunes a Viernes: 9:00 - 18:00h"
    },
    {
      icon: Mail,
      title: "Email Corporativo",
      value: "info@keilarplus.com",
      secondary: "soporte@keilarplus.com",
      description: "Respuesta en menos de 2 horas"
    },
    {
      icon: MapPin,
      title: "Oficina Central",
      value: "Pl. de Francesc Macià, 8-9, 6º b",
      secondary: "08036 Barcelona, España",
      description: "Zona Diagonal - Fácil acceso"
    },
    {
      icon: Calendar,
      title: "Consulta Gratuita",
      value: "30 minutos de valoración",
      secondary: "Sin compromiso",
      description: "Análisis personalizado de necesidades"
    }
  ];

  const serviceAreas = [
    "Hospitales y Clínicas",
    "Centros de Investigación",
    "Laboratorios de Análisis",
    "Centros de Salud",
    "Consultorios Médicos",
    "Empresas Farmacéuticas"
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Contacta con <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu organización sanitaria con 
            las soluciones de IA más avanzadas del mercado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Call to Action - Phone */}
          <Card className="bg-gradient-primary text-white border-0 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Phone className="h-16 w-16 mx-auto mb-6 text-white" />
                <h3 className="font-bold text-2xl mb-3">¿Hablamos de tu proyecto?</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Llámanos ahora para una consulta gratuita de 30 minutos
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white hover:bg-white/90 text-primary font-bold text-lg py-6"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar al 933 657 758
                  </Button>
                  <div className="text-white/80 text-sm">
                    Backup: 651 700 100 | Lunes a Viernes: 9:00 - 18:00h
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Alternative */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Mail className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="font-bold text-2xl mb-3 text-foreground">¿Prefieres escribir?</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Envíanos un email con tu consulta
                </p>
                <div className="bg-background p-6 rounded-lg border">
                  <div className="font-semibold text-primary text-2xl mb-2">info@keilarplus.com</div>
                  <div className="text-sm text-muted-foreground">
                    Respuesta garantizada en menos de 2 horas
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;