import React from 'react'
import Grid from '../templates/grid/grid'
import Button from '../templates/button/button'

export default props => (
  <div className='todoForm'>
    <div className='todoForm_task row' role='form'>
      <Grid cols='12 10 10 6'>
        <input type='text' id='description' className='form-control' placeholder='Adicione uma tarefa' />
      </Grid>
      <Grid cols='12 3 2 2'>
        <Button style='primary' icon='plus' css='btn-md' onClick={props.handleAdd} />
      </Grid>
    </div>
  </div>
)
