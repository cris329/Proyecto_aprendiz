// ============================================================
// SERVICES - Funciones de conexión con la API del backend
// ============================================================
// Este archivo contiene las llamadas HTTP crudas a la API usando axios.
// Cada función envía o recibe datos sin manipular estado de React.
// Las funciones que antes estaban dentro de ListaAprendices
// (como fetchTodos, crearAprendiz) se dividen en:
//   - Aquí: las funciones de axios (API calls)
//   - En PrincipalView: las funciones que manejan el estado de React
// ============================================================

import axios from "axios";

// URL base de la API del servidor de aprendices
const API_BASE = "http://localhost:8081/api/v1/aprendiz";
//const API_BASE = "https://backadso-production.up.railway.app/api/v1/aprendiz"

// --- Funciones de axios (raw API calls) ---

// Obtiene todos los aprendices desde la API
// Retorna un array con los datos o un array vacío si hay error
export const getAprendices = async () => {
  try {
    const res = await axios.get(API_BASE);
    return res.data || [];
  } catch (e) {
    console.error("Error cargando aprendices:", e);
    return [];
  }
};

// Obtiene un aprendiz específico por su ID
// Retorna el objeto del aprendiz o null si no existe o hay error
export const getAprendizById = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/${id}`);
    return res.data;
  } catch {
    console.error("Error cargando aprendiz por ID:", e);
    return null;
  }
};

// Crea un nuevo aprendiz enviando los datos al backend
// Recibe un objeto con los campos del formulario
// No retorna nada, solo realiza la llamada POST
export const crearAprendiz = async (data) => {
  try {
    await axios.post(API_BASE, data, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("Error creando aprendiz:", e);
  }
};

// Actualiza un aprendiz existente por su ID
// Recibe el id y el objeto con los datos actualizados
// No retorna nada, solo realiza la llamada PUT
export const actualizarAprendiz = async (id, data) => {
  try {
    await axios.put(`${API_BASE}/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("Error actualizando aprendiz:", e);
  }
};

// Elimina un aprendiz del backend por su ID
// No retorna nada, solo realiza la llamada DELETE
export const eliminarAprendiz = async (id) => {
  try {
    await axios.delete(`${API_BASE}/${id}`);
  } catch (e) {
    console.error("Error eliminando aprendiz:", e);
  }
};

// Array con los nombres de las columnas que se muestran en la tabla
export const COLUMNAS_TABLA = [
  "ID", "Nombre", "Apellido", "Email", "Teléfono",
  "Dirección", "Cédula", "Tipo de Programa", "Programa", "Ficha", "Regional"
];

// Mapeo de nombres de columna a claves del objeto del aprendiz
// Permite que la tabla asocie cada encabezado con su propiedad correspondiente
export const CLAVE_COLUMNA = {
  "ID": "id",
  "Nombre": "nombre",
  "Apellido": "apellido",
  "Email": "email",
  "Teléfono": "telefono",
  "Dirección": "direccion",
  "Cédula": "cedula",
  "Tipo de Programa": "tipoDePrograma",
  "Programa": "programa",
  "Ficha": "ficha",
  "Regional": "regional"
};
