import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { fadeInUp, routerAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newProjectsData = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newProjectsData);
    setActive(category);
  };

  return (
    <motion.div
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll dark:text-white"
      style={{ height: "65vh" }}
    >
      <Head>
        <title>John | Fullstack & Mobile App Developer</title>
      </Head>
      
      <ProjectsNavBar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg md:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
