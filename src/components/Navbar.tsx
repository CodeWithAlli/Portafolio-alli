import { useState, useEffect } from "react";
import { Menu, X, Github, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Lista de IDs de secciones (sin el #)
      const sections = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"];

      for (const id of sections.reverse()) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Ejecutar al cargar para detectar sección inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="text-xl font-bold gradient-text font-mono"
        >
          &lt;CodeWithAlli /&gt;
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === sectionId
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="flex items-center gap-3 ml-4 border-l border-border pl-4">
            <a
              href="https://github.com/CodeWithAlli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2 rounded-lg hover:bg-muted/50"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="/portafolio-alli/cv-allison.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              download
            >
              <Download size={14} />
              CV
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto py-6 px-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-base font-medium py-3 px-4 rounded-xl transition-all ${activeSection === sectionId
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-border">
                <a
                  href="https://github.com/CodeWithAlli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-xl hover:bg-muted/50"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="/portafolio-alli/cv-allison.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 gradient-bg text-primary-foreground px-6 py-3 rounded-xl text-base font-medium flex items-center gap-2 justify-center shadow-sm hover:shadow-md transition-all"
                  download
                >
                  <Download size={16} />
                  Descargar CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;