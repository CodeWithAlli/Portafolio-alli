import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, MessageCircle, Linkedin, FileText, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    {
      icon: Mail,
      label: "allisonmorerivas551@gmail.com",
      href: "mailto:allisonmorerivas551@gmail.com"
    },
    {
      icon: Github,
      label: "github.com/CodeWithAlli",
      href: "https://github.com/CodeWithAlli"
    },
    {
      icon: MessageCircle,
      label: "+51 903562285",
      href: "https://wa.me/51903562285"
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/allison-more",
      href: "https://linkedin.com/in/allison-more"
    },
    {
      icon: FileText,
      label: "Descargar CV",
      href: "/portafolio-alli/cv-allison.pdf"
    }
  ];

  return (
    <section id="contacto" className="section-padding relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />

      <div className="container mx-auto relative z-10" ref={ref}>
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            ¿<span className="gradient-text">Hablamos</span>?
          </h2>

          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
            Disponible para proyectos freelance, colaboraciones
            o oportunidades como desarrolladora Full-Stack.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 flex flex-col items-center lg:items-start"
          >

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-base font-bold text-green-600">
                Disponible para trabajar
              </span>
            </div>

            {/* Contact items */}
            <div className="space-y-4 w-full">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-xl border border-border/50 
                  bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm
                  hover:border-primary/30 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>

                  <div>
                    <span className="block font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>

                    <span className="text-xs text-muted-foreground block">
                      {item.href.includes("mailto")
                        ? "Email"
                        : item.href.includes("wa.me")
                        ? "WhatsApp"
                        : item.href.includes("cv")
                        ? "Currículum"
                        : "Perfil"}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 space-y-3 text-sm sm:text-base flex flex-col items-center lg:items-start">

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Perú</span>
              </div>

              <div className="flex items-center gap-2 text-green-500 font-semibold">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Trabajo remoto disponible</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;