import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import ComponentsCategories from "./pages/ComponentsCategories";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="bg-gray-50 text-gray-900 dark:bg-dark2 dark:text-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/components" element={<ComponentsCategories />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
