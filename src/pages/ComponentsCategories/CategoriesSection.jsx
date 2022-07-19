import React, { useEffect, useRef, useState } from "react";
import UI from "../../assets/images/component.svg";
import ArrowCircleRight from "../../Components/Svgs/ArrowCircleRight";
import categories from "../../data/categories";
import CategoriesSectionHeader from "./CategoriesSectionHeader";
import CategoriesSectionFilterHeader from "./CategoriesSectionFilterHeader";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title }) => {
  const components_category_ref = useRef();

  return (
    <div
      ref={components_category_ref}
      style={{
        height: `${
          (components_category_ref.current?.clientWidth / 100) * 85
        }px`,
      }}
      className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 border border-gray-500 border-opacity-20 p-5 flex items-center justify-center flex-col gap-3 group"
    >
      <img className="w-full rounded object-contain" src={UI} alt="" />
      <div className="mt-2 w-full flex flex-col justify-start">
        <h5 className="text-lg font-semibold group-hover:text-blue-500">
          {title}
        </h5>
        <p className="text-xs font-semibold opacity-80">
          Components <small>({Math.round(Math.random() * 12)})</small>
        </p>
      </div>
    </div>
  );
};

const CategoriesSection = ({ all_components_screen }) => {
  const categories_section_ref = useRef();
  const categories_parent_ref = useRef();
  const [categories_parent_height, set_ph] = useState(0);
  const [show_by_screen, set_show_by_screen] = useState(8);

  const [active_component_category, set_acc] = useState(
    Object.keys(categories)[0]
  );

  const [filter_text, set_filter_text] = useState("");

  const [preview_categories, set_preview_categories] = useState(
    Object.keys(categories[active_component_category])
  );

  useEffect(() => {
    set_preview_categories(Object.keys(categories[active_component_category]));
  }, [active_component_category]);

  useEffect(() => {
    set_preview_categories(
      Object.keys(categories[active_component_category]).filter((c) =>
        c.toLowerCase().includes(filter_text.toLowerCase())
      )
    );
  }, [filter_text]);

  useEffect(() => {
    set_ph(categories_parent_ref?.current?.clientHeight);

    if (document.documentElement.clientWidth < 768) {
      set_show_by_screen(2);
    } else {
      set_show_by_screen(8);
    }
  }, [categories_parent_ref]);

  return (
    <section className="pt-20 relative" ref={categories_section_ref}>
      <div className="x_container">
        {/* Header Categories Names */}

        {all_components_screen ? (
          <CategoriesSectionFilterHeader
            categories_section_ref={categories_section_ref}
            set_acc={set_acc}
            filter_text={filter_text}
            set_filter_text={set_filter_text}
          />
        ) : (
          <CategoriesSectionHeader
            categories_section_ref={categories_section_ref}
            set_acc={set_acc}
            active_component_category={active_component_category}
          />
        )}

        {/* Components Names */}
        <div
          ref={categories_parent_ref}
          className="grid grid-cols-12 mt-20 lg:mt-10 overflow-hidden"
        >
          {preview_categories
            .filter((_, i) =>
              all_components_screen ? i > -1 : i < show_by_screen
            )
            .map((key) => (
              <CategoryPreview key={key} title={key} />
            ))}
        </div>

        {!all_components_screen && (
          <div
            style={{
              height: `${categories_parent_height}px`,
            }}
            className="w-full absolute bottom-0 inset-x-0 m-auto z-30 bg-gradient-to-b from-[#F9FAFB00] via-[#F9FAFB80] to-[#F9FAFB] dark:from-[#0A082900] dark:via-[#0A082980] dark:to-[#0A0829] flex flex-col justify-end"
          >
            <div className="flex justify-center">
              <Link
                to={`/components`}
                className="px-4 py-3 rounded bg-gradient-to-l to-blue-700 from-blue-600 text-white w-fit focus:ring font-medium tracking-wider flex items-center gap-2 group transition-all"
              >
                <span>View All Components</span>
                <span
                  className="transform group-hover:rotate-[360deg]"
                  style={{ transition: "all 1s" }}
                >
                  <ArrowCircleRight />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
