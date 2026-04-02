import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Lock, ChevronDown } from "lucide-react";
import {
  SiTypescript, SiVite, SiTailwindcss, SiGithub, SiPostgresql,
  SiPrisma, SiDocker, SiHtml5, SiCss, SiJavascript, SiReact,
  SiNextdotjs, SiNodedotjs, SiPython, SiPhp, SiLaravel, SiMysql,
  SiSupabase, SiFirebase,  SiFigma, SiGit,
  SiBootstrap, SiVercel, SiNetlify,
  SiReactquery, SiReactrouter, SiShadcnui, SiGraphql, SiSocketdotio,
  SiRabbitmq, SiExpress, SiDjango, SiFastapi,
  SiMongodb, SiRedis, SiSqlite, SiGooglecloud,
  SiPostman, SiPandas, SiTensorflow, SiPytorch, SiNumpy, SiScikitlearn,
  SiJest, SiCypress, SiEslint, SiPrettier,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

import { 
  Coffee,
  Code2,
  Shield,
  Cloud,
} from "lucide-react";

const dominadas = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React Query", icon: SiReactquery, color: "#FF4154" },
  { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: Coffee, color: "#ED8B00" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "VS Code", icon: Code2, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
];

const aprendiendo = [
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Heroku", icon: Cloud, color: "#6567A5" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
  { name: "JWT", icon: Shield, color: "#000000" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009485" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Cypress", icon: SiCypress, color: "#17202C" },
  { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
  { name: "Prisma", icon: SiPrisma, color: "#0C839B" },
  { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
];

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  locked?: boolean;
}

const SkillCard = ({ skill, locked = false }: SkillCardProps) => (
  <motion.div
    whileHover={!locked ? { scale: 1.05, y: -4 } : {}}
    whileTap={{ scale: 0.98 }}
    className={`relative group flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border transition-all duration-300 w-24 h-24 sm:w-20 sm:h-20
      ${locked
        ? "bg-muted/20 border-border/30 opacity-50 cursor-not-allowed"
        : "glass border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm"
      }`}
  >
    {locked && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-2 right-2"
      >
        <Lock size={12} className="text-muted-foreground/60" />
      </motion.div>
    )}
    <skill.icon
      size={24}
      className={locked ? "opacity-50" : "group-hover:scale-110 transition-transform"}
      style={{ color: locked ? "#9CA3AF" : skill.color }}
    />
    <span className={`text-xs text-center leading-tight font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[70px]
      ${locked ? "text-muted-foreground/50" : "text-foreground/80 group-hover:text-primary"}
    `}>
      {skill.name}
    </span>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  const visibleAprendiendo = showAll ? aprendiendo : aprendiendo.slice(0, 12);

  return (
    <section id="habilidades" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-primary/5" />
      <div className="container mx-auto relative z-10 px-4" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed">
            Tecnologías que domino diariamente y las que estoy explorando activamente
          </p>
        </motion.div>

        {/* Dominadas */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 animate-pulse" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Dominadas
            </h3>
            <div className="text-sm bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full font-medium border border-emerald-500/20">
              {dominadas.length}+
            </div>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-items-center">
            {dominadas.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.02 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Explorando */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-amber-500/60 shadow-lg shadow-amber-500/20" />
            <h3 className="text-2xl font-bold text-muted-foreground/80">
              Explorando
            </h3>
            <div className="text-sm bg-muted/60 text-muted-foreground px-3 py-1 rounded-full font-medium">
              {aprendiendo.length}+
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-items-center">
            {visibleAprendiendo.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.02 }}
              >
                <SkillCard skill={skill} locked />
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && aprendiendo.length > 12 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleShowAll}
                className="group flex items-center gap-2 px-8 py-3 rounded-2xl border-2 border-border/50 bg-card/80 backdrop-blur-sm text-lg font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                Ver todas
                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </motion.button>
            </motion.div>
          )}
        </motion.section>
      </div>
    </section>
  );
};

export default SkillsSection;