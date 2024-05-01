import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routerAnimation } from "../animations";
import Head from "next/head";

const resume = () => {
  return (
    <motion.div
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >

       <Head>
        <title>John | Fullstack & Mobile App Developer</title>
      </Head>
      
      {/* education & experience */}
      <div className="grid gap-6 md:grid-cols-2 dark:text-white">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">
              St.Paul&apos;s University(2019-2021)
            </p>
            <p className="my-3">
              I am a Fullstack Developer with more than 1 Year of experience with a
              diploma in Computer Science from St.Paul&apos;s
              University, Kenya.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Software Developer/Engineer
            </h5>
            <p className="font-semibold">Freelance (2022-To Date)</p>
            <p className="my-3">
              Developing Web and Mobile Apps with a passion!!
            </p>
          </div>
        </motion.div>
      </div>

      {/* languages, frameworks & tools */}
      <div className="grid gap-6 md:grid-cols-2 dark:text-white">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
