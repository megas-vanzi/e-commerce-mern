import React from "react";

const ProductCard = ({ _id, name, price, images, stock }) => {
  return (
    <div>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <h5>Stock: {stock}</h5>
      {images?.map((image) => (
        <img key={image} src={image} alt={name} width="100px" />
      ))}
      <button onClick={() => addToCart(_id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
