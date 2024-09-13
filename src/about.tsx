import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./about.css";
import HTEXT from "./HTEXT";

type Props = {};

const About = ({}: Props) => {
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(0, 0, 0, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(0, 0, 0, 1)"
        }
      }
  return (
    <section className="bg-slate-50">
      <div className="w-full bg-gray-600 drop-shadow-lg fixed z-50">
        <div className="w-5/6 h-20 mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center text-3xl text-gray-20 cursor-pointer">
              Chadi Hsen
            </div>
          </Link>
          <div>
            <a href="https://www.linkedin.com/in/chadihs/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-gray-20 hover:fill-white transition duration-100 bxglow"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-5/6 md:h-[120vh] mx-auto md:flex justify-between items-center gap-16 md:pt-0 pt-36">
        <div className="basis-2/3 mb-12">
          <HTEXT/>
          <div className="md:text-[18px] text-[16px] text-black font-robotomono font-light cursor-default mb-6 bg-slate-200 p-2">
            Hi, I’m Chadi Hsen, a passionate front-end developer with a knack
            for creating elegant and clean websites. With a solid foundation in
            TypeScript, JavaScript, HTML, CSS, and React, I bring a
            comprehensive skill set to the table. My expertise extends to UI/UX
            design, where I focus on crafting intuitive and visually appealing
            user interfaces. I thrive on turning complex problems into simple,
            beautiful, and user-friendly designs. Let’s build something amazing
            together!
          </div>
          <div className="md:text-[18px] text-[16px] text-black font-robotomono font-light cursor-default bg-slate-200 p-2">
            Additionally, I am fluent in English, French, and Arabic, which
            allows me to collaborate effectively with diverse teams and clients.
          </div>
        </div>
        <div className="basis-1/3 ">
        <motion.svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
        width="800px" height="800px" viewBox="0 0 256 256" enable-background="new 0 0 256 249"
        className="mx-auto md:w-[300px] w-[200px] md:h-[300px] h-[200px] item"
        >
        <motion.path d="M47.522,170.287l11.172,76.681h138.612l11.172-76.681H47.522z M128,215.249c-5.748,0-10.407-3.063-10.407-6.84
            s4.659-6.84,10.407-6.84c5.748,0,10.407,3.062,10.407,6.84S133.748,215.249,128,215.249z M233.315,233.054h-26.028l10.292-70.639
            H38.421l10.292,70.639H22.685c-14.848,0-24.85-15.195-18.978-28.834l36.809-85.489c7.149-16.605,23.493-27.362,41.571-27.362h14.486
            l22.885,34.061l4.665-22.254l-7.809-11.807h23.491l-7.81,11.807l4.655,22.098l22.78-33.905h14.486
            c18.078,0,34.422,10.757,41.571,27.362l36.808,85.489C258.165,217.858,248.164,233.054,233.315,233.054z M128,2.033
            c22.496,0,40.733,18.237,40.733,40.733S150.496,83.498,128,83.498S87.267,65.261,87.267,42.765S105.504,2.033,128,2.033z"
            variants={icon}
            initial="hidden"
             animate="visible"
             transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
              }}

            />
        </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default About;
