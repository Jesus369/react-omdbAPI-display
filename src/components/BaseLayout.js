import React, { Component } from 'react'

export class BaseLayout extends Component {
  render() {
    return(
      <div>
      <Header/>
        {this.props.children}
      <Footer/>
      </div>
    )
  }
}

export class Header extends Component {
  render() {
    return(
      <div>
        Header
      </div>
    )
  }
}

export class Footer extends Component {
  render() {
    return(
      <div>
        Footer
      </div>
    )
  }
}
