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

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                          {info.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <div className="font-semibold text-primary text-xl">{info.value}</div>
                      <div className="text-sm text-muted-foreground">{info.secondary}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Call to Action */}
            <Card className="bg-gradient-primary text-white border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Phone className="h-12 w-12 mx-auto mb-4 text-white" />
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
              <CardContent className="pt-6">
                <div className="text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">¿Prefieres escribir?</h3>
                  <p className="text-muted-foreground mb-4">
                    Envíanos un email con tu consulta
                  </p>
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="font-semibold text-primary text-lg">info@keilarplus.com</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Respuesta garantizada en menos de 2 horas
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas & Additional Info */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  <Clock className="inline h-5 w-5 mr-2 text-primary" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-medium text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados</span>
                  <span className="font-medium text-foreground">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos</span>
                  <span className="font-medium text-foreground">Cerrado</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-primary">Urgencias:</strong> Contacto 24/7 para clientes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Sectores que Atendemos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {serviceAreas.map((area, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Visítanos</h3>
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">Pl. de Francesc Macià, 8-9, 6º b</div>
                    <div className="text-sm text-muted-foreground">08036 Barcelona, España</div>
                    <div className="text-xs text-muted-foreground mt-2">Zona Diagonal - Fácil acceso</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;