import logo from "./logo.svg";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Create React App Template.</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
