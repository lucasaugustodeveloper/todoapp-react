import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' data-toggle='collapse' data-target='#navbar-collapse' className='navbar-toggle collapsed' aria-expanded='false'>
              <span className='src-only'>Toggle Navigation</span>
              <i className='icon-bar'></i>
              <i className='icon-bar'></i>
              <i className='icon-bar'></i>
            </button>
            <a href='#' className='navbar-brand'>
              <i className='fa fa-calendar-check-o'></i> TodoApp
            </a>
          </div>
          <div className='collapse navbar-collapse' id='navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li>
                <a href='#/todos'>Tarefas</a>
              </li>
              <li>
                <a href='#/about'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
