import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/authActions";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, handleInputChange, reset] = useForm({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });

  const { username, email, password, comfirmPassword } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(formValues));
    reset();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register">
        <label>Nombre de usuario</label>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleInputChange}
        />
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <label htmlFor="exampleInputPassword1">Confirmar Password</label>

        <input
          type="password"
          name="comfirmPassword"
          placeholder="Confirmar Password"
          value={comfirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Crear</button>
        <a href="/login">Iniciar sesion</a>
        <a href="/">Home</a>
      </form>
    </div>
  );
};
