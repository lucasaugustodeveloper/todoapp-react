import React from 'react'
import Grid from '../templates/grid/grid'
import Button from '../templates/button/button'

export default props => {
  const keyHandler = (e) => {
    console.log(e.keyCode)
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div className='todoForm'>
      <div className='todoForm_task row' role='form'>
        <Grid cols='12 10 9 6'>
          <input type='text' id='description' className='form-control input-lg' placeholder='Adicione uma tarefa'
            value={props.description} onChange={props.handleChange} onKeyUp={keyHandler} />
        </Grid>
        <Grid cols='12 3 3 2'>
          <div className="btn-group">
            <Button style='primary' icon='plus' css='btn-lg' onClick={props.handleAdd} />
            <Button style='default' icon='search' css='btn-lg' onClick={props.handleSearch} />
            <Button style='default' icon='close' css='btn-lg' onClick={props.handleClear} />
          </div>
        </Grid>
      </div>
    </div>
  )
}
