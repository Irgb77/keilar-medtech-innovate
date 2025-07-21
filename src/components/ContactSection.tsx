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

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                      <div className="font-semibold text-primary">{info.value}</div>
                      <div className="text-sm text-muted-foreground">{info.secondary}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Solicitar Información
                </CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="+34 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Organización
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Hospital / Clínica / Centro"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Área de Interés
                    </label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                      <option>Selecciona un área</option>
                      <option>Automatización Burocrática</option>
                      <option>Análisis de Imágenes Médicas</option>
                      <option>Investigación y Ensayos Clínicos</option>
                      <option>Consultoría Integral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Cuéntanos más sobre tu proyecto o necesidades específicas..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas & Quick Info */}
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
                    <strong className="text-accent">Urgencias:</strong> Contacto 24/7 para clientes
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

            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <h3 className="font-bold text-lg mb-2">Consulta Inmediata</h3>
                  <p className="text-white/90 text-sm mb-4">
                    ¿Necesitas hablar con un experto ahora?
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Llamar Ahora
                  </Button>
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