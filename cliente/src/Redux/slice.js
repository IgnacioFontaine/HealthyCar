import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [], // Estado inicial para tu aplicación de lista de tareas
};

const todosSlice = createSlice({
  name: 'todos', // Nombre del slice (rebanada)
  initialState,
  reducers: {
    // Define tus acciones aquí (por ejemplo, agregar, eliminar, marcar como completo, etc.)
  },
});

export const { actions } = todosSlice;
export default todosSlice.reducer;