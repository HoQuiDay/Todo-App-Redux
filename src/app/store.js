import { configureStore } from '@reduxjs/toolkit'
import todosListReducer from '../components/TodoList/todosSlice'
import filtersReducer from '../components/Filters/filtersSlice'
export const store = configureStore({
  reducer: {
    todoList: todosListReducer,
    filters: filtersReducer
  }
})
