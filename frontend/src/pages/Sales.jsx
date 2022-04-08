import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
// import {Product} from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/actions";
import CreateSales from "../components/SalesCreate";
import EditSales from "../components/SalesEdit";

const Sales = () => {
  const [createProduct, setCreateProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleChange = (event) => {
    if (event.target.value) {
      const prod = products.find(
        (product) => product.name === event.target.value
      );
      setSelectedProduct(prod);
    }
  };
  const handleCreate = () => {
    setEditProduct(false);
    setSelectedProduct(false);
    setCreateProduct(!createProduct);
  };
  const handleEdit = () => {
    setCreateProduct(false);
    setEditProduct(!editProduct);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.reducer);

  /* const handleDelete = (id)=>{
		const newProducts = products.filter(product=>product._id!==id)
		dispatch({
			type: 'DELETE_PRODUCT',
			payload: newProducts
		})
	}	 */

  return (
    <div>
      <h4>Seleccione el Producto</h4>
      <select name="product" id="product" onChange={handleChange}>
        <option value=""></option>
        {products?.map((product) => (
          <option value={product.name}>{product.name}</option>
        ))}
      </select>

      {selectedProduct && (
        <>
          <h3>{selectedProduct.name}</h3>
          {/* <Product />			 */}
          <button onClick={handleEdit}>Editar Producto</button>
          {/* <button onClick={handleDelete}>Eliminar Producto</button>  			 */}
        </>
      )}
      <button onClick={handleCreate}>Nuevo Producto</button>
      {createProduct && <CreateSales />}
      {editProduct && (
        <EditSales
          key={selectedProduct._id}
          name={selectedProduct.name}
          description={selectedProduct.description}
          price={selectedProduct.price}
          stock={selectedProduct.stock}
          state={selectedProduct.state}
          images={selectedProduct.images}
          categories={selectedProduct.categories}
        />
      )}
    </div>
  );
};

export default Sales;
