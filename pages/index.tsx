import { motion } from "framer-motion";
import { fadeInUp, routerAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from 'next/head'

const index = () => {
  return (
    <motion.div variants={routerAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow px-6 pt-1">

      <Head>
        <title>John | Fullstack & Mobile App Developer</title>
      </Head>
      
      <h5 className="my-3 font-medium dark:text-white">
        I am a Fullstack Developer with 2 Years of experience with an Associate Degree in
        Computer Science from St.Paul&apos;s University, Kenya.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide dark:text-white">What I Offer</h6>
        <motion.div variants={stagger} initial="initial" animate="animate" className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <motion.div variants={fadeInUp} key="" className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200 dark:text-white">
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
