import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectAbogado from "@/assets/project-abogado.jpg";
import projectAutoland from "@/assets/project-autoland.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

const projects = [
  {
    title: "Página web para staff de abogados",
    featured: true,
    description:
      "Sitio web profesional para un estudio jurídico con presentación de servicios, equipo legal y contacto.",
    challenge:
      "Diseñar una interfaz clara y profesional que transmitiera confianza y facilitara el acceso a la información legal.",
    result:
      "Se logró una navegación simple y una presentación clara de los servicios legales, mejorando la experiencia del usuario.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: projectAbogado,
    github: "https://github.com/CodeWithAlli/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS",
    demo: " https://codewithalli.github.io/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS/",
  },
  {
    title: "Gestor de Tareas",
    featured: true,
    description:
      "Aplicación tipo Kanban para organizar tareas mediante tableros interactivos con funcionalidad drag & drop.",
    challenge:
      "Optimizar el rendimiento del sistema de arrastrar y soltar cuando existen muchas tareas en pantalla.",
    result:
      "Se implementó una interfaz fluida que permite gestionar tareas de forma visual y rápida.",
    tech: ["React", "Firebase", "TypeScript", "DnD Kit"],
    image: projectAutoland,
    github: "https://github.com/CodeWithAlli",
    demo: "http://autoland.infinityfreeapp.com/login.php",
  },
  {
    title: "Dashboard de Analytics",
    featured: false,
    description:
      "Panel de análisis de datos con gráficos interactivos y reportes dinámicos.",
    challenge:
      "Visualizar grandes volúmenes de datos manteniendo una interfaz rápida y clara.",
    result:
      "Se logró un panel que permite analizar datos de forma visual y tomar decisiones rápidamente.",
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
            Algunos de los proyectos donde he aplicado mis conocimientos en desarrollo web.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-2xl overflow-hidden grid lg:grid-cols-2 hover:border-primary/30 transition-all"
            >

              {/* Badge Dorado */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-semibold rounded-full
                bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg">
                  ⭐ Proyecto destacado
                </div>
              )}

              {/* Imagen / navegador */}
              <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-lg bg-muted/20 h-[260px] sm:h-[320px] lg:h-auto">

                {/* Barra navegador */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>

                  <span className="ml-3 text-xs text-muted-foreground truncate">
                    {project.demo}
                  </span>
                </div>

                {/* Imagen */}
                <div className="overflow-hidden h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    Desafío técnico
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-green-500 mb-1">
                    Resultado
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.result}
                  </p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm hover:border-primary/50 transition"
                  >
                    <Github size={16} />
                    Código
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-primary-foreground text-sm"
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