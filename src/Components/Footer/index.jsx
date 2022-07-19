import React from "react";
import { LayerIcon } from "../Svgs/All";

const Footer = () => {
  return (
    <footer className="pb-10 text-cente">
      <div className="x_container">
        <div className="w-full h-0.5 bg-gray-500 bg-opacity-20 mb-12 mt-24" />
        <div className="flex items-center justify-center text-2xl gap-1 mb-5">
          <LayerIcon />
          <p>
            <b className="text-green-500">Stack</b>
            <b className="text-blue-500">UI</b>
          </p>
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300 tracking-wider font-medium capitalize">
          © 2022
          <b className="text-green-500 ml-1">stack</b>
          <b className="text-blue-500 mr-1">ui</b>
          Inc. All rights reserved.
        </p>
        <ul className="mt-10 flex gap-5 font-medium flex-wrap justify-center text-blue-600 dark:text-blue-300">
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Changelog</li>
          <li>
            {" "}
            <a
              target="__blank"
              href="https://www.google.com/search?q=stacksagar"
            >
              Created by:{" "}
              <b className="text-black dark:text-white">#stacksagar</b>
            </a>{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
