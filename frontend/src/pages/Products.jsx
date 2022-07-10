import React from "react";
import ProductCard from "../components/cards/ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  //const products = useSelector((state) => state.products.products);
  let products = [];

  return (
    <div>
      Products:
      {products.map(({ _id, name, price, images, stock }) => {
        return (
          <ProductCard
            key={_id}
            _id={_id}
            name={name}
            price={price}
            images={images}
            stock={stock}
          />
        );
      })}
    </div>
  );
};

export default Products;
