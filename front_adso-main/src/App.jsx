// ============================================================
// App - Punto de entrada de la aplicación React
// ============================================================
// Usa el router configurado en src/router
// para manejar las rutas de la aplicación
// ============================================================

import { AppRouter } from "./router";

function App() {
  // Renderiza el router que gestiona todas las rutas
  return <AppRouter />;
}

export default App;
