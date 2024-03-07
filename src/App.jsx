import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./assets/login/login";
import { Main } from "./assets/main/main";
import { Register } from "./assets/Register/Register";
import { IngresarEmail } from "./assets/Ingresar-Email/Ingresar-Email";
import { IngresarCodigo } from "./assets/Ingresar-Codigo/IngresarCodigo";
import { Dashboard } from "./assets/Dashboard/Dashboard";
import { Control } from "./assets/Control/Control";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login title="Iniciar sesión" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ingresar-email" element={<IngresarEmail />} />
        <Route path="/ingresar-codigo" element={<IngresarCodigo />} />
        <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
        <Route path="/dashboard/:id" element={<Control />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
