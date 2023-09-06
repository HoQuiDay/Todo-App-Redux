import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }
  ],
  reducers: {
    // IMMER
    addTodo: (state, action) => {
      state.push(action.payload)
    }, // action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    }
  }
})
export const { addTodo, toggleTodoStatus } = todosSlice.actions
export default todosSlice.reducer
