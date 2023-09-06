import { Col, Radio, Row, Select, Tag } from 'antd'
import Search from 'antd/es/input/Search'
import Paragraph from 'antd/es/typography/Paragraph'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { prioritiesFilterChange, searchFilterChange, statusFilterChange } from './filtersSlice'
const { Option } = Select
function Filters() {
  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriorities, setFilterPriorities] = useState([])

  const dispatch = useDispatch()

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFilterPriorities(value)
    dispatch(prioritiesFilterChange(value))
  }
  return (
    <Row justify={'center'}>
      <Col span={24}>
        <Paragraph style={{ fontWeight: 600, marginBottom: 3, marginTop: 10 }}>Search</Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col span={24}>
        <Paragraph style={{ fontWeight: 600, marginBottom: 3, marginTop: 10 }}>Filter By Status</Paragraph>
        <Radio.Group
          value={filterStatus}
          onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Paragraph style={{ fontWeight: 600, marginBottom: 3, marginTop: 10 }}>Filter By Priority</Paragraph>
        <Select
          value={filterPriorities}
          onChange={handlePriorityChange}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}>
          <Option
            value="High"
            label="High">
            <Tag color="red">High</Tag>
          </Option>
          <Option
            value="Medium"
            label="Medium">
            <Tag color="blue">Medium</Tag>
          </Option>
          <Option
            value="Low"
            label="Low">
            <Tag color="gray">Low</Tag>
          </Option>
        </Select>
      </Col>
    </Row>
  )
}

export default Filters
