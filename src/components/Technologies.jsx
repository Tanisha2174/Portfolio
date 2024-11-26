import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";
import { motion } from "framer-motion";

// Configuration for wave motion animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// List of technologies with metadata
const technologies = [
  { id: "react", name: "React", icon: RiReactjsLine, color: "text-cyan-400", duration: 1.5 },
  { id: "nextjs", name: "Next.js", icon: TbBrandNextjs, color: "", duration: 2 },
  { id: "nodejs", name: "Node.js", icon: FaNodeJs, color: "text-green-500", duration: 2.5 },
  { id: "mongodb", name: "MongoDB", icon: SiMongodb, color: "text-green-500", duration: 3 },
  { id: "javascript", name: "JavaScript", icon: TbBrandJavascript, color: "text-yellow-400", duration: 3.5 },
  { id: "express", name: "Express", icon: SiExpress, color: "text-green-500", duration: 4 },
  { id: "python", name: "Python", icon: FaPython, color: "text-sky-500", duration: 4.5 },
  { id: "java", name: "Java", icon: FaJava, color: "text-blue-600", duration: 5 },
  { id: "tailwind", name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-300", duration: 5.5 },
  { id: "mysql", name: "MySQL", icon: SiMysql, color: "text-yellow-600", duration: 6 },
  { id: "pandas", name: "Pandas", icon: SiPandas, color: "text-green-500", duration: 6.5 },
  { id: "numpy", name: "NumPy", icon: SiNumpy, color: "text-blue-400", duration: 7 },
  { id: "scikit", name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-400", duration: 7.5 },
];

const Technologies = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 px-12"
      >
        {technologies.map((tech) => {
          const IconComponent = tech.icon;

          return (
            <motion.div
              key={tech.id}
              onHoverStart={() => setActiveIcon(tech.id)}
              onHoverEnd={() => setActiveIcon(null)}
              onClick={() => setActiveIcon(tech.id)} // Optional: handle click interaction
              className={`rounded-2xl border-4 border-neutral-800 px-6 py-4 ${
                activeIcon && activeIcon !== tech.id ? "blur-sm" : ""
              }`}
              variants={iconVariants(tech.duration)}
              initial="initial"
              transition={{ duration: 0.3 }}
            >
              <IconComponent className={`text-7xl ${tech.color} sm:text-5xl md:text-6xl`} />
              {activeIcon === tech.id && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-center text-xl font-semibold"
                >
                  {tech.name}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;


