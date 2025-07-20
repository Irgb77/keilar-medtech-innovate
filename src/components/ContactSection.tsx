import { Phone, Mail, MapPin, Send, User, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono Principal",
      details: ["933 657 758", "651 700 100 (backup)"],
      description: "Lunes a Viernes, 9:00 - 18:00h"
    },
    {
      icon: Mail,
      title: "Email Corporativo",
      details: ["info@keilarplus.com", "contacto@keilarplus.com"],
      description: "Respuesta en menos de 24h"
    },
    {
      icon: MapPin,
      title: "Oficina Central",
      details: ["Pl. de Francesc Macià, 89, 6º b", "08036 Barcelona, España"],
      description: "Cita previa requerida"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Comienza tu <span className="text-primary">Transformación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contáctanos para una consultoría gratuita y descubre cómo la IA puede 
            revolucionar tu organización sanitaria
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Información de Contacto
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, i) => (
                    <div key={i} className="font-medium text-foreground">{detail}</div>
                  ))}
                  <CardDescription className="mt-2">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-primary to-secondary text-white border-none">
              <CardHeader>
                <CardTitle className="text-white">¿Por qué elegirnos?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Experiencia en IA médica</span>
                  <span className="font-bold">+10 años</span>
                </div>
                <div className="flex justify-between">
                  <span>Proyectos completados</span>
                  <span className="font-bold">200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Satisfacción cliente</span>
                  <span className="font-bold">96%</span>
                </div>
                <div className="flex justify-between">
                  <span>Soporte 24/7</span>
                  <span className="font-bold">✓ Incluido</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Solicitar Información</CardTitle>
                <CardDescription>
                  Completa el formulario y nuestro equipo te contactará en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre completo *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Tu nombre completo" 
                        className="pl-10 border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email corporativo *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="tu@empresa.com" 
                        className="pl-10 border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="+34 XXX XXX XXX" 
                        className="pl-10 border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Organización *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Nombre de tu hospital/clínica" 
                        className="pl-10 border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tipo de servicio de interés</label>
                  <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                    <option>Selecciona un servicio</option>
                    <option>Automatización Burocrática</option>
                    <option>Análisis de Imágenes Médicas</option>
                    <option>Investigación y Ensayos Clínicos</option>
                    <option>Consultoría general en IA</option>
                    <option>Integración con sistemas existentes</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    rows={4}
                    className="border-border"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Acepto la política de privacidad y el tratamiento de mis datos
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Solicitud
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  También puedes llamarnos directamente al <span className="font-semibold text-primary">933 657 758</span>
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