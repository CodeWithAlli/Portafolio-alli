import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import profilePhoto from "@/assets/programadora.jpg";
import cambioPhoto from "@/assets/CodeWhithAlli.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [profilePhoto, cambioPhoto];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden"
    >

      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />

      {/* Tech background (nuevo fondo profesional) */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
  <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-mono font-semibold opacity-[0.02] text-center leading-tight select-none blur-[1px]">
    REACT • FASTAPI • PYTHON
    <br />
    MACHINE LEARNING • APIs
    <br />
    SQL • NODE • GIT
  </div>
</div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6"
            >
              <Code2 size={14} className="text-primary" />
              <span>React • TypeScript • FastAPI • Machine Learning</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hola, soy <span className="gradient-text">Allison More</span>
            </h1>

            <p className="text-lg sm:text-xl font-mono text-primary mb-6">
              Desarrolladora de Software | Frontend & Backend
            </p>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Me especializo en crear experiencias digitales rápidas, accesibles y escalables.
              Cada proyecto es una oportunidad de escribir código que marque la diferencia.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#proyectos"
                onClick={(e) => handleNavClick(e, "#proyectos")}
                className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Ver mis proyectos
              </a>

              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="border border-border/50 bg-card/80 backdrop-blur-sm text-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Contáctame
              </a>
            </div>

          </motion.div>


          {/* Photo */}
          <motion.div
            key={currentImage}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
          >
            <img
              src={images[currentImage]}
              alt="Allison More - Desarrolladora Full Stack"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a
            href="#sobre-mi"
            onClick={(e) => handleNavClick(e, "#sobre-mi")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <span className="text-xs tracking-wide font-medium">
              Explorar
            </span>

            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;