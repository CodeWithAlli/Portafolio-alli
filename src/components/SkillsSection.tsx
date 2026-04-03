import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Lock, ChevronDown } from "lucide-react";

import {
  SiTypescript, SiVite, SiTailwindcss, SiGithub, SiPostgresql,
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNextdotjs, SiNodedotjs, SiPython,
  SiMysql, SiSupabase, SiFirebase,
  SiFigma, SiGit, SiBootstrap,
  SiTensorflow, SiPytorch, SiScikitlearn,
  SiPostman, SiVercel, SiNetlify,
  SiGraphql, SiSocketdotio,
  SiRabbitmq, SiExpress, SiFastapi,
  SiMongodb, SiDocker, SiRedis,
  SiGooglecloud, SiPrisma
} from "@icons-pack/react-simple-icons";

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

const stackPrincipal: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

const tecnologias: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const explorando: Skill[] = [
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
  { name: "FastAPI", icon: SiFastapi, color: "#009485" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Prisma", icon: SiPrisma, color: "#0C839B" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
];

const SkillCard = ({ skill, locked = false }: { skill: Skill; locked?: boolean }) => (
  <motion.div
    whileHover={!locked ? { scale: 1.05, y: -4 } : {}}
    className={`relative group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300
    ${locked
        ? "bg-muted/20 border-border/30 opacity-50"
        : "glass border-border/50 hover:border-primary/50 hover:shadow-lg"}
    `}
  >
    {locked && <Lock size={12} className="absolute top-2 right-2 text-muted-foreground" />}

    <skill.icon
      size={24}
      style={{ color: locked ? "#9CA3AF" : skill.color }}
      className="group-hover:scale-110 transition-transform"
    />

    <span className="text-xs text-center font-medium text-muted-foreground">
      {skill.name}
    </span>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [showAll, setShowAll] = useState(false);

  const visibleExplorando = showAll ? explorando : explorando.slice(0, 8);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const renderGrid = (skills: Skill[], locked = false) => (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} locked={locked} />
      ))}
    </div>
  );

  return (
    <section id="habilidades" className="section-padding relative">
      <div className="container mx-auto px-4" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto">
            Tecnologías que utilizo para construir aplicaciones modernas.
          </p>
        </motion.div>


        {/* STACK */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Stack principal
          </h3>
          {renderGrid(stackPrincipal)}
        </div>


        {/* TECNOLOGIAS */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Tecnologías que uso
          </h3>
          {renderGrid(tecnologias)}
        </div>


        {/* EXPLORANDO */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
            Explorando
          </h3>

          {renderGrid(visibleExplorando, true)}

          {!showAll && explorando.length > 8 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={toggleShowAll}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary transition"
              >
                Ver más
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;