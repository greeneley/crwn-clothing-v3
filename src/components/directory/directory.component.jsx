import React from "react";
import Category from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
