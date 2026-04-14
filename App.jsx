import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Encabezado from "./src/componentes/navegacion/Encabezado";

import Inicio from "./src/views/Inicio";
import Catalogo from "./src/views/Catalogo";
import Categorias from "./src/views/Categorias";
import Login from "./src/views/Login";
import RutaProtegida from "./src/componentes/rutas/RutaProtegida";
import Productos from "./src/views/Productos";
import Pagina404 from "./src/views/Pagina404";

import "./App.css"


const App = () => {
  return (
    <Router>
      <Encabezado />
      
      <main className="margen-superior-main">
        <Routes>
          <Route path="/login" element={<Login/>} />
          
          <Route path="/" element={<RutaProtegida><Inicio/></RutaProtegida>} />
          <Route path="/categorias" element={<RutaProtegida><Categorias /></RutaProtegida>} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/productos" element={<RutaProtegida><Productos /></RutaProtegida>} />
          
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

