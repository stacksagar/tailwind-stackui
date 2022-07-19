import React from "react";
import DetailsSectionData from "./DetailsSectionData";

const Single = ({ title, des, Icon }) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-7 border border-gray-500 border-opacity-10">
      <div className="w-fit p-3 flex items-center justify-center bg-white shadow-lg dark:bg-dark1 bg-opacity-50 dark:bg-opacity-50 rounded">
        <Icon />
      </div>
      <h3 className="text-xl lg:text-2xl font-bold uppercase mt-6 mb-5">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 font-medium text-base font-comfortaa">
        {des}
      </p>
    </div>
  );
};

const DetailsSection = () => {
  return (
    <section className="lg:-mt-36 pt-10 lg:pt-0 relative z-40">
      <div className="x_container grid grid-cols-12 bg-white dark:bg-dark1 rounded bg-opacity-20 dark:bg-opacity-5">
        {DetailsSectionData?.map((d, i) => (
          <Single key={i} title={d.title} des={d.des} Icon={d.Icon} />
        ))}
      </div>
    </section>
  );
};

export default DetailsSection;
