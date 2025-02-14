import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <div className="cell"><Cell value={val}/></div>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

let value = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']

Matrix.defaultProps = {
values: [value, value, value, value, value, value, value, value, value, value]
}
