"use client";

import { useState } from "react";
import CategoryFilterSection from "./CategoryFilterSection";
import AllArticlesGrid from "./AllArticlesGrid";
import { allArticles } from "./allArticals";

const HealthResourcePage = () => {
  const [active, setActive] = useState("All");

  const filteredArticles =
    active === "All"
      ? allArticles
      : allArticles.filter((a) => a.category === active);

  return (
    <>
      <CategoryFilterSection active={active} setActive={setActive} />
      <AllArticlesGrid articles={filteredArticles} />
    </>
  );
};

export default HealthResourcePage;
