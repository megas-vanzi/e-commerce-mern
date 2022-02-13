import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/actions/authActions";

const Login = () => {
  const [formValues, handleChange, reset] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = formValues;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(postLogin(formValues));
    reset();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <label> Email: </label>
        <input type="text" name="email" value={email} onChange={handleChange} />
        <label> Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit"> Login </button>
        <a href="/register"> Registrarse </a>
        <a href="/"> Home </a>
      </form>
    </div>
  );
};

export default Login;
