import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../templates/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = `http://localhost:3003/api/todos`

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      description: '',
      list: []
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCompleted = this.handleCompleted.bind(this)
    this.handlePending = this.handlePending.bind(this)

    this.refresh()
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleAdd () {
    const description = this.state.description
    axios.post(URL, { description })
      .then(res => this.refresh())
  }
  handleChange (e) {
    this.setState({ ...this.state, description: e.target.value })
  }
  handleRemove (todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description))
  }
  handleCompleted (todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => this.refresh(this.state.description))
  }
  handlePending (todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => this.refresh(this.state.description))
  }

  refresh (description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(res => this.setState({
        ...this.state,
        description,
        list: res.data
      }))
  }

  handleSearch () {
    this.refresh(this.state.description)
  }
  handleClear () {
    this.refresh()
  }

  render () {
    return (
      <div>
        <PageHeader name='Todo' small='cadastro' />
        <div className='row'>
          <TodoForm
            description={this.state.description}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
            handleSearch={this.handleSearch}
            handleClear={this.handleClear} />
        </div>
        <div className='row todoList'>
          <TodoList
            list={this.state.list}
            handleRemove={this.handleRemove}
            handleCompleted={this.handleCompleted}
            handlePending={this.handlePending}
          />
        </div>
      </div>
    )
  }
}

export default Todo
