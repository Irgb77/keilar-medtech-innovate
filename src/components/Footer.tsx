import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Servicios",
      links: [
        "Automatización Burocrática",
        "Análisis de Imágenes Médicas",
        "Investigación Clínica",
        "Consultoría Tecnológica",
        "Soporte Técnico"
      ]
    },
    {
      title: "Recursos",
      links: [
        "Casos de Éxito",
        "Documentación Técnica",
        "Webinars",
        "Blog Médico",
        "Centro de Ayuda"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre Nosotros",
        "Nuestro Equipo",
        "Certificaciones",
        "Prensa",
        "Carreras"
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Keilar<span className="text-accent">+</span>
              </h3>
              <p className="text-background/80 mt-2">
                Líderes en soluciones de IA para el sector sanitario. 
                Transformamos la medicina con tecnología de vanguardia.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-white font-medium">933 657 758</div>
                  <div className="text-background/70 text-sm">Backup: 651 700 100</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <div className="text-white">info@keilarplus.com</div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <div>
                  <div className="text-white">Pl. de Francesc Macià, 8-9, 6º b</div>
                  <div className="text-background/70 text-sm">08036 Barcelona, España</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © {currentYear} Keilar+. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-background/20">
            <div className="text-background/60 text-sm">
              Certificado ISO 27001 | Cumplimiento GDPR | Registro Sanitario ES-001-2024
            </div>
            <div className="text-background/60 text-xs mt-2">
              Keilar+ está comprometida con la seguridad de datos y el cumplimiento normativo en el sector sanitario
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;