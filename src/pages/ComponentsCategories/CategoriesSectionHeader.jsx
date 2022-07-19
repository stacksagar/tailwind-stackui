import React, { useState, useEffect } from "react";
import categories from "../../data/categories";
import ChevronLeft from "../../Components/Svgs/ChevronLeft";

const CategoriesSectionHeader = ({
  categories_section_ref,
  active_component_category,
  set_acc,
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
      className={`w-full lg:h-10 bg-white shadow-lg dark:bg-dark1 dark:bg-opacity-95 relative grid grid-cols-12 border-gray-500 border border-opacity-10 dark:border-opacity-20 ${
        show_category_nav && " lg:sticky top-header_height inset-x-0 "
      }`}
      style={{ zIndex: "45" }}
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

      {Object.keys(categories).map((key) => (
        <div
          key={key}
          onClick={() => set_acc(key)}
          className={`col-span-6 lg:col-span-3 p-4 lg:p-0 text-center h-full flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer capitalize border-gray-500 border border-opacity-10 dark:border-opacity-20 text-sm md:text-base md:tracking-wider md:font-semibold ${
            active_component_category === key &&
            "bg-blue-500 dark:bg-blue-600 text-white"
          }`}
        >
          {key}
        </div>
      ))}
    </header>
  );
};

export default CategoriesSectionHeader;
