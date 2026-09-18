// ============================================================
// STYLES - Configuración de tema y estilos de la aplicación
// ============================================================
// Este archivo contiene el tema oscuro y los estilos reutilizables
// para los campos de texto de Material UI.
// Originalmente estaban definidos dentro de PrincipalView.jsx
// y se exportan para ser importados donde se necesiten.
// ============================================================

import { createTheme } from "@mui/material/styles";

// Tema oscuro con colores personalizados: cian como primario,
// violeta como secundario, fondo oscuro limpio y texto legible.
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#22d3ee" },       // cian
    secondary: { main: "#a78bfa" },     // violeta
    error: { main: "#ef4444" },
    background: { default: "#0b1220", paper: "#111827" }, // dark limpio
    text: { primary: "#e5e7eb", secondary: "#94a3b8" }
  }
});

// Estilos reutilizables para los TextField de Material UI.
// Define fondo claro para inputs, bordes y colores de foco.
export const inputSX = {
  bgcolor: "#f3f4f6",       // fondo claro para inputs
  borderRadius: 1,
  input: { color: "#111827" },
  "& .MuiInputLabel-root": { color: "#374151" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#cbd5e1" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#94a3b8" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#22d3ee" }
};
