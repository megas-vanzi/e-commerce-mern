import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLogout } from "../../redux/actions/authActions";

const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogout());
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="logout">
        <button type="submit"> Logout </button>
        <a href="/register"> Registrarse </a>
        <a href="/"> Home </a>
      </form>
    </div>
  );
};

export default Logout;
