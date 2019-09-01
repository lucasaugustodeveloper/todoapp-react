import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from '../main/routes'
import Navbar from '../templates/navbar/navbar'

export default props => (
  <div className='container-fluid'>
    <Navbar />
    <div className='container'>
      <Routes />
    </div>
  </div>
)
