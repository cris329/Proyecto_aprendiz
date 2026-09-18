// ============================================================
// PrincipalView - Vista principal que orquesta todos los componentes
// ============================================================
// Importa de los paquetes organizados:
//   - styles: theme y estilos de inputs
//   - services: llamadas API (axios)
//   - components: UI reutilizable (barra, formulario, tabla)
// ============================================================

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { theme } from "../styles";
import { getAprendices, getAprendizById, crearAprendiz as apiCrearAprendiz, actualizarAprendiz, eliminarAprendiz, COLUMNAS_TABLA } from "../services";
import { AccionesBar, FormAprendiz, TablaAprendices } from "../components";

const ListaAprendices = () => {
  // Estado para almacenar los datos de los aprendices
  const [data, setData] = useState([]);
  // Estado para controlar el indicador de carga
  const [loading, setLoading] = useState(false);
  // Estado del formulario con todos los campos del aprendiz
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", telefono: "", direccion: "", cedula: "", tipoDePrograma: "", programa: "", ficha: "", regional: "" });
  // Estado para el filtro de búsqueda por ID
  const [idFiltro, setIdFiltro] = useState("");

  // Limpia el formulario y el filtro a sus valores iniciales
  const limpiarFormulario = () => {
    setForm({ nombre: "", apellido: "", email: "", telefono: "", direccion: "", cedula: "", tipoDePrograma: "", programa: "", ficha: "", regional: "" });
    setIdFiltro("");
  };

  // Obtiene todos los aprendices desde el servicio y los almacena en data
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await getAprendices();
      setData(res || []);
    } catch (e) {
      console.error("Error cargando aprendices:", e);
      setData([]);
    } finally { setLoading(false); }
  };

  // Busca un aprendiz por su ID y lo muestra en la tabla
  const fetchPorId = async () => {
    if (!idFiltro) return;
    try {
      setLoading(true);
      const res = await getAprendizById(idFiltro);
      if (res) {
        setData([res]);
      } else {
        setData([]);
        limpiarFormulario();
      }
    } catch {
      setData([]);
      limpiarFormulario();
    } finally { setLoading(false); }
  };

  // Actualiza los datos de un aprendiz existente usando su ID
  const actualizarPorId = async () => {
    if (!idFiltro) return;
    try {
      setLoading(true);
      const aprendizActual = await getAprendizById(idFiltro);
      const datosActualizados = Object.fromEntries(
        Object.entries(form).map(([campo, valor]) => [
          campo, valor === "" ? aprendizActual[campo] : valor
        ])
      );

      await actualizarAprendiz(idFiltro, {
        ...aprendizActual,
        ...datosActualizados,
        id: Number(idFiltro)
      }, { headers: { "Content-Type": "application/json" } });
      await fetchTodos();
      limpiarFormulario();
    } catch (e) {
      console.error("Error actualizando aprendiz:", e);
    } finally {
      setLoading(false);
    }
  };

  // Crea un nuevo aprendiz enviando los datos del formulario
  const crearAprendiz = async () => {
    try {
      setLoading(true);
      await apiCrearAprendiz(form);
      limpiarFormulario();
      await fetchTodos();
    } catch (e) {
      console.error("Error creando aprendiz:", e);
    } finally {
      setLoading(false);
    }
  };

  // Elimina un aprendice de la base de datos usando su ID
  const eliminarPorId = async () => {
    if (!idFiltro) return;
    try { setLoading(true); await eliminarAprendiz(idFiltro); await fetchTodos(); }
    catch (e) { console.error("Error eliminando aprendiz:", e); }
    finally { setLoading(false); }
  };

  // Al montar el componente, carga la lista completa de aprendices
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ mt: 4, px: { xs: 2, md: 4 } }}>
        {/* Barra de acciones: título, botones de acción y campo de filtro por ID */}
        <AccionesBar
          titulo="Aprendices"
          loading={loading}
          idFiltro={idFiltro}
          setIdFiltro={setIdFiltro}
          onVerTodos={fetchTodos}
          onBuscarPorId={fetchPorId}
          onEliminarPorId={eliminarPorId}
        />

        {/* Formulario para crear o actualizar un aprendiz */}
        <FormAprendiz
          form={form}
          setForm={setForm}
          loading={loading}
          idFiltro={idFiltro}
          onCrear={crearAprendiz}
          onActualizar={actualizarPorId}
        />

        {/* Tabla que muestra la lista de aprendices con todas sus columnas */}
        <TablaAprendices data={data} COLUMNAS_TABLA={COLUMNAS_TABLA} />
      </Box>
    </ThemeProvider>
  );
};

// Exporta el componente como predeterminado para ser usado en App.jsx
export default ListaAprendices;
