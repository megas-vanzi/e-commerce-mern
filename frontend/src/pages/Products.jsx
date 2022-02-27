import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      {products.map(({ _id, name, price, images, stock }) => {
        return (
          <LastTenItems
            key={_id}
            _id={_id}
            name={name}
            price={price}
            images={images}
            stock={stock}
          />
        );
      })}
      Products
      <ProductCard />
    </div>
  );
};

export default Products;
