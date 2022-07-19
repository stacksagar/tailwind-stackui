import React from "react";
import Header from "../../Components/Header";
import { HTMLIcon, ReactIcon } from "../../Components/Svgs/All";
import SvgUIDark from "../../assets/images/hero-image-dark.svg";
import SvgUILight from "../../assets/images/hero-image-light.svg";
import { useRootContext } from "../../context";
import ArrowCircleRight from "../../Components/Svgs/ArrowCircleRight";
import { Link } from "react-router-dom";

const HomeSection = () => {
  const { state } = useRootContext();
  return (
    <section
      id="home_section"
      className="flex flex-col gap-12 w-full text-black bg-gradient-to-b from-gray-100 to-gray-50 dark:from-dark1 dark:to-dark2 dark:text-white"
    >
      <Header />

      <div className="x_container flex items-center justify-between">
        <div className="w-full md:w-5/12 flex flex-col gap-5 relative z-30 lg:pb-36">
          <h2 className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-blue-400 dark:to-yellow-500 bg-clip-text text-transparent font-bold sm:w-[500px]">
            Beautiful Pure TailwindCSS Components
            <span className="text-blue-600"> for you! </span>
          </h2>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <HTMLIcon />
              <b>HTML</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>React</b>
            </p>
          </div>
          <p className="capitalize font-semibold tracking-wider sm:w-[500px]">
            Unlimited professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your heart’s content.
          </p>

          <Link
            to="/components"
            className="px-4 py-3 rounded bg-gradient-to-l to-blue-700 from-blue-600 text-white w-fit focus:ring font-medium tracking-wider flex items-center gap-2 group transition-all"
          >
            <span>Browse Components</span>
            <span
              className="transform group-hover:rotate-[360deg]"
              style={{ transition: "all 1s" }}
            >
              <ArrowCircleRight />
            </span>
          </Link>
        </div>
        <div className="hidden lg:block w-7/12">
          {state?.currentTheme === "dark" ? (
            <img src={SvgUIDark} alt="" />
          ) : (
            <img src={SvgUILight} alt="" />
          )}
        </div>
      </div>

      <div
        id="home_section_overlay"
        className="bg-gradient-to-b from-[#99999900] via-[#99999978] to-gray-50 dark:from-[#131b4c00] dark:via-[#131b4c78] dark:to-[#0a0829]"
      ></div>
    </section>
  );
};

export default HomeSection;
