import React, { useState, useEffect } from "react";
import categories from "../../data/categories";
import ChevronLeft from "../../Components/Svgs/ChevronLeft";
import SearchIcon from "../../Components/Svgs/SearchIcon";

const CategoriesSectionFilterHeader = ({
  categories_section_ref,
  set_acc,
  filter_text,
  set_filter_text,
}) => {
  const [show_category_nav_toggler, set_cnt] = useState(false);
  const [show_category_nav, set_cn] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (categories_section_ref.current?.getBoundingClientRect()?.top > 1) {
        set_cnt(false);
        set_cn(true);
      } else {
        set_cnt(true);
      }
    });
  }, [categories_section_ref]);

  return (
    <header
      className={`w-full flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-start sm:justify-between h-fit py-2 sm:py-0 sm:h-header_height shadow border border-gray-300 dark:border-gray-700 relative px-2  bg-white dark:bg-dark1 ${
        show_category_nav && " lg:sticky top-0 inset-x-0 "
      }`}
      style={{ zIndex: "55" }}
    >
      {show_category_nav_toggler && (
        <div
          onClick={() => set_cn(false)}
          className={`cursor-pointer w-10 h-full absolute top-0 -right-10 z-40 hidden xl:flex items-center justify-center`}
        >
          <button className="mb-1 transform rotate-90 block bg-gray-500 text-white rounded-full p-1 focus:ring">
            <ChevronLeft w="w-6" />
          </button>
        </div>
      )}

      <select
        onChange={(e) => {
          set_filter_text("");
          set_acc(e.target.value);
        }}
        className="w-full sm:w-5/12 md:w-72 space-y-5 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring focus:outline-none border-8 border-gray-200 dark:border-gray-700 rounded-sm capitalize"
      >
        {Object.keys(categories).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <div className="relative w-full sm:w-5/12 md:w-72">
        <span className="absolute inset-y-0 left-3 my-auto h-full flex items-center">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={filter_text}
          onChange={(e) => set_filter_text(e.target.value)}
          placeholder="Find Components..."
          className="py-3 pl-12 pr-3 rounded-sm w-full block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring"
        />
      </div>
    </header>
  );
};

export default CategoriesSectionFilterHeader;
