import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetalhesProduto from "./pages/DetalhesProduto";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto/:id" element={<DetalhesProduto />} />
  </Routes>
);

export default Rotas;
