import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    todos: todosReducer, reducer // Agrega tu reductor aquí
  },
});

export default store;