// ============================================================
// ROUTER - Configuración de rutas de la aplicación
// ============================================================
// Define las rutas usando react-router-dom.
// Actualmente solo tiene una ruta que apunta a PrincipalView,
// pero se puede extender fácilmente agregando más <Route>.
// ============================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalView from "../views/PrincipalView";

// Configura el enrutamiento para la aplicación
// Puedes agregar más rutas aquí cuando crees nuevas vistas
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Ruta principal - pantalla de aprendices */}
      <Route path="/*" element={<PrincipalView />} />
    </Routes>
  </BrowserRouter>
);
