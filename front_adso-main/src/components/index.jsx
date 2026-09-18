// ============================================================
// COMPONENTS - Componentes reutilizables de Material UI
// ============================================================
// Este archivo contiene los componentes de interfaz que se renderizan
// en PrincipalView.jsx. Cada componente recibe props con los datos
// y funciones necesarias para funcionar, sin tener lógica interna
// de estado propia.
// ============================================================

import React from "react";
import {
  Box, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, Button, TextField, Stack
} from "@mui/material";
import { theme, inputSX } from "../styles";
import { CLAVE_COLUMNA } from "../services";

// --- Barra de acciones superiores ---
// Muestra el título, el botón "VER TODOS", el campo de filtro por ID
// y los botones "BUSCAR POR ID" y "ELIMINAR POR ID"
export const AccionesBar = ({
  titulo,
  loading,
  idFiltro,
  setIdFiltro,
  onVerTodos,
  onBuscarPorId,
  onEliminarPorId
}) => (
  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
    <Typography variant="h5" sx={{ flex: 1, fontWeight: 700, color: "text.primary" }}>
      {titulo}
    </Typography>
    <Button variant="contained" color="primary" onClick={onVerTodos} disabled={loading}>
      {loading ? "Cargando..." : "VER TODOS"}
    </Button>
    <TextField
      size="small" label="ID" value={idFiltro}
      onChange={(e) => setIdFiltro(e.target.value)}
      sx={{ ...inputSX, width: 140 }}
    />
    <Button variant="contained" color="secondary" onClick={onBuscarPorId} disabled={loading || !idFiltro}>
      BUSCAR POR ID
    </Button>
    <Button variant="contained" color="error" onClick={onEliminarPorId} disabled={loading || !idFiltro}>
      ELIMINAR POR ID
    </Button>
  </Stack>
);

// --- Formulario para crear o actualizar aprendices ---
// Contiene todos los campos de texto (Nombre, Apellido, Email, etc.)
// y los botones CREAR y ACTUALIZAR.
// Recibe el estado del formulario y las funciones como props.
export const FormAprendiz = ({ form, setForm, loading, onCrear, onActualizar, idFiltro }) => (
  <Paper elevation={4} sx={{ p: 2, mb: 3, border: "1px solid #334155", bgcolor: "background.paper" }}>
    <Typography sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>
      Crear o actualizar aprendiz
    </Typography>
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <TextField label="Nombre" value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Apellido" value={form.apellido}
        onChange={(e) => setForm({ ...form, apellido: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} sx={{ ...inputSX, flex: 1.2 }} />
      <TextField label="Teléfono" value={form.telefono}
        onChange={(e) => setForm({ ...form, telefono: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Dirección" value={form.direccion}
        onChange={(e) => setForm({ ...form, direccion: e.target.value })} sx={{ ...inputSX, flex: 1.6 }} />
      <TextField label="Cédula" value={form.cedula}
        onChange={(e) => setForm({ ...form, cedula: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Tipo de programa" value={form.tipoDePrograma}
        onChange={(e) => setForm({ ...form, tipoDePrograma: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Programa" value={form.programa}
        onChange={(e) => setForm({ ...form, programa: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Ficha" value={form.ficha}
        onChange={(e) => setForm({ ...form, ficha: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <TextField label="Regional" value={form.regional}
        onChange={(e) => setForm({ ...form, regional: e.target.value })} sx={{ ...inputSX, flex: 1 }} />
      <Button variant="contained" color="primary" onClick={onCrear} disabled={loading}>CREAR</Button>
      <Button variant="contained" color="secondary" onClick={onActualizar} disabled={loading || !idFiltro}>ACTUALIZAR</Button>
    </Stack>
  </Paper>
);

// --- Tabla que muestra la lista de aprendices ---
// Recibe los datos y los nombres de columnas.
// Usa CLAVE_COLUMNA para mapear cada encabezado a su propiedad del objeto.
// Si no hay datos, muestra "Sin registros".
export const TablaAprendices = ({ data, COLUMNAS_TABLA }) => (
  <TableContainer component={Paper} elevation={3} sx={{ border: "1px solid #9ca2a9", bgcolor: "background.paper" }}>
    <Table>
      <TableHead>
        <TableRow sx={{ background: "#22d3ee" }}>
          {COLUMNAS_TABLA.map((h) => (
            <TableCell key={h} sx={{ color: "#0b1220", fontWeight: 700 }}>{h}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={row.id ?? i} sx={{
            backgroundColor: i % 2 === 0 ? "#0f172a" : "#111827",
            "&:hover": { backgroundColor: "#1f2937" }
          }}>
            {COLUMNAS_TABLA.map((col) => (
              <TableCell key={col} sx={{ color: "text.primary" }}>
                {row[CLAVE_COLUMNA[col]]}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {data.length === 0 && (
          <TableRow>
            <TableCell colSpan={COLUMNAS_TABLA.length} align="center" sx={{ color: "text.secondary" }}>
              Sin registros
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

// Exporta el theme para que pueda ser usado por el ThemeProvider
export { theme };
