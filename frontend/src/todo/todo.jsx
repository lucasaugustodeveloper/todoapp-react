import React, { Component } from 'react'

import PageHeader from '../templates/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

class Todo extends Component {
  render () {
    return (
      <div>
        <PageHeader name='Todo' small='cadastro' />
        <div className='row'>
          <TodoForm />
        </div>
        <div className='row'>
          <TodoList />
        </div>
      </div>
    )
  }
}

export default Todo
