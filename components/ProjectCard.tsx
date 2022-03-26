import { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{ project: IProject , showDetails: null| number , setShowDetails:(id: null | number)=>void}> = ({
  project: { name, category, description, github_url, image_path, key_techs, id },showDetails, setShowDetails
}) => {
  

  return (
    <div>
      <Image
        onClick={() => setShowDetails(id)}
        className="cursor-pointer "
        src={image_path}
        alt={name}
        width={300}
        height={150}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 md:p-10">
          <motion.div variants={stagger}
        initial="initial"
        animate="animate">
           <motion.div variants={fadeInUp} className="border-4 border-gray-100" >
            <Image src={image_path} alt={name} width={300} height={150} layout="responsive"/>  
           </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
              <Link href={github_url}>
                <a className="flex px-4 py-2 space-x-3 text-lg bg-gray-200 item-center dark:bg-dark-200">
                  <AiFillGithub /> <span>Github</span>
                </a>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger}
        initial="initial"
        animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span key={tech} className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200">{tech}</span>
              ))}
            </motion.div>
          </motion.div>

          <button onClick={() => setShowDetails(null)} className="absolute p-1 bg-gray-100 rounded-full focus:outline-none dark:bg-dark-200 top-3 right-3">
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
