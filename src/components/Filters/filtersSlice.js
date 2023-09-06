import { createSlice } from '@reduxjs/toolkit'
export const filters = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: []
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload
    }
  }
})
export const { searchFilterChange, statusFilterChange, prioritiesFilterChange } = filters.actions
export default filters.reducer
