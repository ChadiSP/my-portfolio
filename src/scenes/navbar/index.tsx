import { Link } from "react-router-dom";
import Links from "./Links";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./style.css";
type Props = {};
import { useEffect, useState } from "react";

const Navbar = ({}: Props) => {
  const matches = useMediaQuery("(min-width: 1124px)");

  const useIsTopOfPage = (): boolean => {
    const [isTop, setIsTop] = useState<boolean>(true);
    useEffect(() => {
      const handleScroll = () => {
        setIsTop(window.scrollY === 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return isTop;
  };

  return (
    <section className={`w-full bg-gray-600 drop-shadow-lg fixed z-50 `+(useIsTopOfPage() ? "translate-y-[0] ease-in-out transition duration-500" : "translate-y-[-300%] ease-in-out transition duration-500")}>
      <div className="w-5/6 h-20 mx-auto flex justify-between items-center">
        {/* LEFT SIDE */}
        <Link to="/">
          <div className="flex items-center text-3xl text-gray-20 cursor-pointer">
            Chadi Hsen
          </div>
        </Link>
        {matches ? (
          <div className="flex items-center justify-between basis-2/5 ">
            <div className="flex items-center justify-between gap-8">
              <Link
                to="/about"
                className="text-gray-20 hover:text-white text-xl hover:border-b-2 hover:border-secondary-200 transition duration-500 ease-in-out cursor-pointer bxglow"
              >
                about
              </Link>
              <Links target="works">works</Links>
              <Links target="contact">contact</Links>
            </div>
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
        ) : (
          <button
            className="relative basis-[10%] inline-block text-right w-full text-gray-20 hover:text-white text-xl 
            hover:border-b-2 hover:border-secondary-200 transition duration-500 
            ease-in-out cursor-pointer bxglow font-robotomono"
            onClick={() => {
              const menu = document.querySelector(".mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            Menu
            <ul className="hidden mobile-menu absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 text-left ">
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Link
                  className="text-gray-20 hover:text-white text-xl hover:border-b-2 hover:border-secondary-200 transition duration-500 ease-in-out cursor-pointer bxglow font-robotomono"
                  to="/about"
                >
                  about
                </Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-robotomono">
                <Links target="works"
                font="font-robotomono">works</Links>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-robotomono">
                <Links target="contact"
                font="font-robotomono">contact</Links>
              </li>
            </ul>
          </button>
        )}

        {/* RIGHT SIDE */}
      </div>
    </section>
  );
};

export default Navbar;
