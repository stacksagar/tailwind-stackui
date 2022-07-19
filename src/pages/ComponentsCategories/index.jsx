import React from "react";
import Header from "../../Components/Header";
import CategoriesSection from "./CategoriesSection";

const ComponentsCategories = () => {
  return (
    <>
      <Header />
      <CategoriesSection all_components_screen={true} />
    </>
  );
};

export default ComponentsCategories;
