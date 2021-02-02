import React, { Component } from 'react'

export default class Button extends Component {

  render() {
    const { onClick } = this.props
    return (
      <div>
        <button type='button' onClick={ onClick }>New Dog</button>
      </div>
    )
  }
}
