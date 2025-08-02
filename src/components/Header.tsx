import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-sm">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>933 657 758</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Pl. de Francesc Macià, 8-9, 6º b - Barcelona</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@keilarplus.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Keilar<span className="text-accent">+</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#innovacion" className="text-foreground hover:text-primary transition-colors">
              Innovación
            </a>
            <a href="#casos-exito" className="text-foreground hover:text-primary transition-colors">
              Casos de Éxito
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
            <Button 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consulta Gratuita
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <a href="#inicio" className="block text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="block text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#innovacion" className="block text-foreground hover:text-primary transition-colors">
              Innovación
            </a>
            <a href="#casos-exito" className="block text-foreground hover:text-primary transition-colors">
              Casos de Éxito
            </a>
            <a href="#contacto" className="block text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
            <Button 
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consulta Gratuita
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;