import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
