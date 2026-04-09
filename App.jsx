import React from "react";
import { browserRouter as Router, Routes, Route } from "react-router-dom";

import Encabezado from "./components/navegacion/Encabezado";

import Inicio from "./views/Inicio";
import Categorias from "./views/Categorias";
import Catalogo from "./views/Catalogo";
import Productos from "./views/Productos";
import Login from "./views/Login";
import RutaProtegida from "./components/RutaProtegida";
import Pagina404 from "./views/Pagina404";

import "./App.css";