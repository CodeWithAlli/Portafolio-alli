import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Code, GitFork, Clock, CheckCircle } from "lucide-react";

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
    { icon: Clock, value: "2+", label: "Años aprendiendo desarrollo" },
    { icon: GitFork, value: repoCount, label: "Repositorios públicos" },
    { icon: Code, value: "1000+", label: "Horas de código" },
  ];

  const highlights = [
    "Desarrollo de aplicaciones web con React y TypeScript",
    "Construcción de APIs con Node.js y FastAPI",
    "Interés en Machine Learning y automatización",
    "Buenas prácticas y código limpio",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sobre <span className="gradient-text">mí</span>
            </h2>

            <p className="text-muted-foreground max-w-md mx-auto">
              Desarrolladora enfocada en crear soluciones web modernas,
              rápidas y escalables.
            </p>
          </motion.div>


          {/* About content */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16"
          >

            {/* Short description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy desarrolladora Full Stack con interés en crear
                aplicaciones útiles y bien diseñadas.
              </p>

              <p>
                Disfruto aprender nuevas tecnologías y transformar ideas
                en productos funcionales que resuelvan problemas reales.
              </p>

              <blockquote className="border-l-2 border-primary pl-4 py-2 mt-4">
                <p className="text-foreground font-medium italic">
                  "El buen software no solo funciona, también es fácil de mantener."
                </p>
              </blockquote>
            </div>


            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base"
                >
                  <CheckCircle size={18} className="text-primary mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>


          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
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