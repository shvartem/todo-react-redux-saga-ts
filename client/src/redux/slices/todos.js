import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getAllTodosPending: (state) => {
      state.isLoading = true;
    },
    getAllTodosFullfilled: (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    getAllTodosRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    createTodoPending: (state) => {
      state.isLoading = true;
    },
    createTodoFullfilled: (state, action) => {
      state.items.push(action.payload);
      state.error = null;
      state.isLoading = false;
    },
    createTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    deleteTodoPending: (state) => {
      state.isLoading = true;
    },
    deleteTodoFullfilled: (state, action) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload.id);
      state.items.splice(index, 1);
      state.error = null;
      state.isLoading = false;
    },
    deleteTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    editTodoPending: (state) => {
      state.isLoading = true;
    },
    editTodoFullfilled: (state, action) => {
      console.log(action.payload);
      state.items = state.items.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      state.error = null;
      state.isLoading = false;
    },
    editTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default todosSlice.reducer;
export const { actions: todosActions } = todosSlice;
