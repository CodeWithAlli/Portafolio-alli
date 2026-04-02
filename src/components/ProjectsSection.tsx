import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectAbogado from "@/assets/project-abogado.jpg";
import projectAutoland from "@/assets/project-autoland.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

const projects = [
  {
    title: "Página web para staff de abogados",
    description: "Sitio web profesional para un estudio jurídico con presentación de servicios, equipo legal y contacto.",
    challenge: "Diseñar una interfaz clara y profesional para presentar servicios legales y mejorar la confianza del cliente.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: projectAbogado,
    github: "https://github.com/CodeWithAlli",
    demo: "https://codewithalli.github.io/staff-abogados/"

  },
  {
  title: "Gestor de Tareas",
  description: "Aplicación de gestión de tareas estilo Kanban que permite organizar actividades en tableros interactivos con funcionalidad de arrastrar y soltar, facilitando el seguimiento y la organización del trabajo.",
  challenge: "Optimizar el rendimiento del drag & drop con listas de cientos de elementos.",
  tech: ["React", "Firebase", "TypeScript", "DnD Kit"],
  image: projectAutoland,
  github: "https://github.com/CodeWithAlli",
  demo: "http://autoland.infinityfreeapp.com/login.php",
  },
  {
    title: "Dashboard de Analytics",
    description: "Panel de análisis de datos con gráficos interactivos, reportes exportables y actualización de datos en tiempo real.",
    challenge: "Renderizar grandes volúmenes de datos con gráficos fluidos y responsive.",
    tech: ["React", "Chart.js", "Python", "FastAPI", "PostgreSQL"],
    image: projectDashboard,
    github: "https://github.com/CodeWithAlli",
    demo: "#",
  },

];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
            Una selección de mis trabajos más destacados
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-0 hover:border-primary/30 transition-all ${i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden h-64 lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
              </div>

              {/* Content */}
              <div className={`p-6 sm:p-8 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary mb-1">Desafío técnico</p>
                  <p className="text-muted-foreground text-sm">{project.challenge}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
