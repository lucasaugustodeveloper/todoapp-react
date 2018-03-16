import React from 'react'

import Grid from '../templates/grid/grid'
import Button from '../templates/button/button'
import './todoList.css'

export default props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <div className="btn-group" role='group' aria-label='Actions Groups'>
            <Button style='success' css='btn-lg' icon='check' hide={todo.done} onClick={() => props.handleCompleted(todo)} />
            <Button style='warning' css='btn-lg' icon='undo' hide={!todo.done} onClick={() => props.handlePending(todo)} />
            <Button style='danger' css='btn-lg' icon='trash-o' hide={!todo.done} onClick={() => props.handleRemove(todo)} />
          </div>
        </td>
      </tr>
    ))
  }

  return (
    <Grid cols="12 11 11 11">
      <table className='table table-striped'>
        <thead>
          <tr>
            <th width='85%'>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </Grid>
  )
}
