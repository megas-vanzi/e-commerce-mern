import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProducts } from "../redux/actions/actions";

const EditSales = ({ name, description, price, stock, images, categories }) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name,
    description,
    price,
    stock,
    images,
    categories,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProducts(product));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          value={product.name}
          placeholder="Nombre"
        />
        <label>Descripcion</label>
        <input
          type="text"
          name="description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          value={product.description}
          placeholder="Descripcion"
        />
        <label>Precio</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          value={product.price}
          placeholder="Precio"
        />
        <label>Stock</label>
        <input
          type="number"
          name="stock"
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          value={product.stock}
          placeholder="Stock"
        />
        <label>Imagen</label>
        {images.map((image) => (
          <img src={image} alt="imagen" style={{ width: "150px" }} />
        ))}
        <label>Categorias</label>
        <select
          name="categories"
          onChange={(e) =>
            setProduct({ ...product, categories: e.target.value })
          }
          value={product.categories}
        >
          {categories?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
};

export default EditSales;
