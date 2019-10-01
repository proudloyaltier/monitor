import React from 'react'
import * as ReactBoostrap from 'react-bootstrap'

class Navbar extends React.Component {
  render () {
    return (
      <ReactBoostrap.Navbar bg="dark" variant="dark">
        <ReactBoostrap.Navbar.Brand>Monitor</ReactBoostrap.Navbar.Brand>
      </ReactBoostrap.Navbar>
    )
  }
}

export default Navbar