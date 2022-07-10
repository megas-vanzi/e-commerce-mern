import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories, postProducts } from "../redux/actions/actions";
import NavBar from "./Navbar";

const CreateSales = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      images: [],
      categories: [],
    },
  ]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const loadImg = async (files) => {
    const reader = new FileReader();
    reader.readAsDataURL(files);

    const formData = new FormData();
    formData.append("file", files);

    formData.append("upload_preset", "Atechnas");
    const options = {
      method: "POST",
      body: formData,
    };
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
        options
      );
      const res_1 = await res.json();

      return setProducts((prev) => ({ ...prev, images: [res_1.secure_url] }));
    } catch (err) {
      return console.log(err);
    }
  };

  const loadImg1 = async (files) => {
    const reader = new FileReader();
    reader.readAsDataURL(files);

    const formData = new FormData();
    formData.append("file", files);

    formData.append("upload_preset", "Atechnas");
    const options = {
      method: "POST",
      body: formData,
    };
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
        options
      );
      const res_1 = await res.json();
      return setProducts((prev) => ({
        ...prev,
        images: [...prev.images, res_1.secure_url],
      }));
    } catch (err) {
      return console.log(err);
    }
  };

  const { categories } = useSelector((state) => state.reducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProducts(products));
    navigate("/");
    setProducts({
      name: "",
      description: "",
      price: 0,
      stock: 0,
      images: [],
      categories: [],
    });
  };

  const inputChange = (e) => {
    e.preventDefault();
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    document.querySelector("#productImage").click();
  };
  const handleImageClick1 = (e) => {
    e.preventDefault();
    document.querySelector("#productImage1").click();
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            onChange={inputChange}
            value={products.name}
            placeholder="Nombre"
          />
          <label> Precio</label>
          <input
            type="text"
            name="price"
            onChange={inputChange}
            value={products.price}
            placeholder="Precio"
          />
          <label>Stock</label>
          <input
            type="text"
            name="stock"
            onChange={inputChange}
            value={products.stock}
            placeholder="Stock"
          />
          <label>Descripcion</label>
          <input
            type="text"
            name="description"
            onChange={inputChange}
            value={products.description}
            placeholder="Descripcion"
          />
          <label>Imagenes</label>
          <input
            type="file"
            id="productImage"
            name="images"
            onChange={(e) => loadImg(e.target.files[0])}
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="productImage1"
            name="images"
            onChange={(e) => loadImg1(e.target.files[0])}
            style={{ display: "none" }}
          />
          {products?.images?.map((image) => (
            <img src={image} alt="" width="250px" />
          ))}
          <button onClick={handleImageClick}>Agregar Imagen</button>
          <button onClick={handleImageClick1}>Agregar Imagen</button>

          <label>Categoria</label>
          <select name="categories" onChange={(e) => inputChange(e)}>
            <option value="">Seleccione una categoria</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default CreateSales;
