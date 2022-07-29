import logo from "./logo.svg";
import "./App.css";
import Home from "./Componentes/Home/Home";
import DataSheet from "./Componentes/DataSheet/DataSheet";
import { Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<DataSheet />} />
      </Routes>
    </div>
  );
}

export default App;
