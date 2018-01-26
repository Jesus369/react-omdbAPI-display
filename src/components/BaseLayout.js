import React, { Component } from 'react'

export class BaseLayout extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
