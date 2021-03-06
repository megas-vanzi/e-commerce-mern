import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Sales from "./pages/Sales";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sales" element={<Sales />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
