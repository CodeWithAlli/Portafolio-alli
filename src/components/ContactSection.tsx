import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, MessageCircle } from "lucide-react";

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
  ];

  return (
    <section id="contacto" className="section-padding relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            ¿<span className="gradient-text">Hablamos</span>?
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
            Estoy abierta a nuevas oportunidades y colaboraciones. ¡No dudes en escribirme!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:max-w-md"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Conectemos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ya sea que tengas un proyecto en mente, una oferta laboral o simplemente quieras charlar sobre código.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-xl glass hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <span className="block font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      {item.href.includes('mailto') ? 'Email' : 
                       item.href.includes('wa.me') ? 'WhatsApp' : 
                       'Perfil'}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;