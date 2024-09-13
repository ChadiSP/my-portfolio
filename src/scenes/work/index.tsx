import { motion } from "framer-motion";
import WorkCard from "./workcard";
import hangman from "./hangman.png";
import evogym from "./evogym.png";
import facebook from "./facebook.png";
const works = [
  {
    name: "Hangman Game",
    description: "A little game I made using react and typescript",
    image: hangman,
    link: "https://chadisp.github.io/Hangman_game/",
  },
  {
    name: "EvoGym Website",
    description: "A modern gym website",
    image: evogym,
    link: "https://chadisp.github.io/gym-website/",
  },
  {
    name: "Facebook",
    description: "A social media platform",
    image: facebook,
    link: "https://www.facebook.com/",
  },
];

type Props = {};

const Work = ({}: Props) => {
  return (
    <section
      className="w-full md:h-[120vh] bg-slate-50 flex items-center flex-col pt-8 "
      id="works"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:text-xl text-[12px] font-montserrat text-center text-gray-900 cursor-default"
      >
        <motion.div
          className="md:w-40 h-[1px] inline-block bg-black mx-4 w-14"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        SOME OF MY LATEST WORKS
        <motion.div
          className="md:w-40 h-[1px] inline-block bg-black mx-4 w-14"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0, y: -400 }}
        whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="
        mt-16
        w-[90%] md:h-5/6 flex md:flex-wrap md:justify-center justify-start bg-slate-800 p-8 gap-16 overflow-x-scroll mb-16"
      >
        {works.map((work) => (
          <WorkCard key={work.name} {...work} />
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
