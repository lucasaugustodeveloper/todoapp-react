import React, { Component } from 'react'
import If from '../../Helps/If'

export default props => (
  <If test={!props.hide}>
    <button className={`btn btn-${props.style} ${props.css}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  </If>
)
