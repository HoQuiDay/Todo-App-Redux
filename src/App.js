import './App.css'
import { Typography, Divider } from 'antd'
import Filters from './components/Filters'
import TodoList from './components/TodoList'
const { Title } = Typography
function App() {
  return (
    <div className="app">
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  )
}

export default App
