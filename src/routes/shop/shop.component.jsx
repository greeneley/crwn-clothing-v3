import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
