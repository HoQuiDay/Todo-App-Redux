import { Checkbox, Row, Tag } from 'antd'
import React, { useState } from 'react'
import { toggleTodoStatus } from '../TodoList/todosSlice'
import { useDispatch } from 'react-redux'
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

function Todo({ name, priority, id, completed }) {
  const [checked, setChecked] = useState(completed)
  const dispatch = useDispatch()
  const toggleCheckbox = () => {
    setChecked(!checked)
    dispatch(toggleTodoStatus(id))
  }
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
      }}>
      <Checkbox
        checked={checked}
        onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag
        color={priorityColorMapping[priority]}
        style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  )
}

export default Todo
