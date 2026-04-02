import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Code, GitFork, Clock } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repoCount, setRepoCount] = useState("...");

  useEffect(() => {
    fetch("https://api.github.com/users/CodeWithAlli")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos + "+"))
      .catch(() => setRepoCount("1+"));
  }, []);

  const stats = [
    { icon: Briefcase, value: "1+", label: "Proyectos completados" },
    { icon: Clock, value: "2+", label: "Años de experiencia" },
    { icon: GitFork, value: repoCount, label: "Repositorios públicos" },
    { icon: Code, value: "1000+", label: "Horas de código" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="sobre-mi" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sobre <span className="gradient-text">mí</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Conoce un poco más sobre mi trayectoria como desarrolladora
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto space-y-5 mb-16"
          >
            <p className="text-muted-foreground leading-relaxed">
              Soy una desarrolladora Full Stack apasionada por crear soluciones web que resuelven problemas reales. Con más de 2 años de experiencia en JavaScript, React y Node.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi camino en la programación comenzó con la curiosidad de entender cómo funcionan las aplicaciones que usamos a diario. Esa curiosidad se convirtió en pasión y hoy disfruto cada línea de código que escribo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Me encanta aprender nuevas tecnologías, colaborar con equipos talentosos y escribir código limpio. Cuando no estoy programando, me encontrarás explorando nuevas herramientas de desarrollo o contribuyendo a proyectos open source.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 py-2 mt-6">
              <p className="text-foreground font-medium italic">
                "Mi objetivo es simple: escribir código limpio que resuelva problemas reales."
              </p>
            </blockquote>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <stat.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;