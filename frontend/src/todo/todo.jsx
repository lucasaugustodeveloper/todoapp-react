import React, { Component } from 'react'

import PageHeader from '../templates/pageHeader'

class Todo extends Component {
  render () {
    return (
      <div>
        <PageHeader name='Todo' small='list' />
      </div>
    )
  }
}

export default Todo
