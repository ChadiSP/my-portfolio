import ActionButton from "@/components/ActionButton";
import "./style.css";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
type Props = {};

const Hero = ({}: Props) => {
  const match = useMediaQuery("(min-width: 768px)");
  const cod = "<coding>";
  return (
    <section id="hero" className="w-full md:h-[120vh] md:flex">
      <div className="basis-1/2 bg-slate-50 flex justify-center items-center flex-col gap-8 pt-26 mt-24">
        <motion.div
          className="font-robotomono text-6xl font-extrabold mb-8 cursor-default md:text-8xl ml-8"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          Web Designer
        </motion.div>

        <div className="w-4/5">
          <motion.div
            className="w-4/5 mx-auto font-montserrat text-center text-xl pb-4 cursor-default"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            UI/UX product designer with a focus on UI design and design systems
          </motion.div>

          <motion.div
            className="pt-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <ActionButton target="sibidi">VIEW MY WORK...</ActionButton>
          </motion.div>
        </div>
      </div>
      <div className="basis-1/2 bg-gray-900 text-slate-50 flex justify-center items-center ">
        <div className="w-4/5 flex flex-col justify-between">
          <motion.div
            className="font-robotomono text-6xl font-extrabold mb-8 cursor-default text-center md:text-8xl mt-16"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            {cod}
            <p className="text-2xl font-montserrat cursor-default font-thin mt-6">
              Front-end developer specializing in crafting elegant and clean
              websites.
            </p>
          </motion.div>
          <motion.div
            className="pt-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            {match?(<svg
              fill="#FFFFFF"
              width="150px"
              height="150px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mt-32 md:h-[250px] md:w-[250px]"
            >
              <title>monitor-code</title>
              <path d="M28 1.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h8.011l-1.685 3.5h-4.326c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-4.229l-1.75-3.5h7.979c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM18.978 27.75h-5.878l1.685-3.5h2.442zM28.75 21c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0zM9.711 13.229l3.229-3.692c0.192-0.219 0.309-0.507 0.309-0.823 0-0.69-0.56-1.25-1.25-1.25-0.374 0-0.71 0.165-0.939 0.425l-0.001 0.001-4 4.572c-0.192 0.219-0.31 0.507-0.31 0.823 0 0.345 0.14 0.658 0.366 0.884v0l4 4c0.226 0.226 0.539 0.366 0.884 0.366 0.69 0 1.25-0.56 1.25-1.25 0-0.345-0.14-0.658-0.366-0.884v0zM20.941 7.892c-0.23-0.263-0.567-0.427-0.941-0.427-0.691 0-1.251 0.56-1.251 1.251 0 0.316 0.117 0.605 0.31 0.825l-0.001-0.001 3.23 3.691-3.174 3.173c-0.228 0.227-0.369 0.54-0.369 0.887 0 0.691 0.56 1.251 1.251 1.251 0.347 0 0.661-0.141 0.887-0.369l4-4c0.226-0.226 0.366-0.539 0.366-0.884 0-0.316-0.117-0.605-0.311-0.825l0.001 0.001z"></path>
            </svg>):(null)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
