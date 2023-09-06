import { Button, Col, Input, Row, Select, Space, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import Todo from '../Todo'
import { addTodo } from './todosSlice'
import { v4 as uuidv4 } from 'uuid'
import { todosRemainingSelector } from '../../app/selectors'
function TodoList() {
  const todoList = useSelector(todosRemainingSelector)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const handleAddButtonClick = () => {
    const newTodo = { id: uuidv4(), name: name, completed: false, priority: priority }
    dispatch(addTodo(newTodo))
    setName('')
  }
  const handleInputChange = (event) => {
    setName(event.target.value)
  }
  const handleSetPriority = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col
        span={24}
        style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          )
        })}
      </Col>
      <Col span={24}>
        <Space.Compact
          style={{ display: 'flex' }}
          block="true">
          <Input
            value={name}
            onChange={handleInputChange}
          />
          <Select
            defaultValue="Medium"
            onChange={handleSetPriority}>
            <Select.Option
              value="High"
              label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option
              value="Medium"
              label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option
              value="Low"
              label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  )
}

export default TodoList
