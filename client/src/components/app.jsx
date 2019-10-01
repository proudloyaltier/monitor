import React from 'react'
import * as ReactBoostrap from 'react-bootstrap'
import '../bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar'
import SensorHistoryGraph from './sensor-history-graph'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <ReactBoostrap.Container>
          <SensorHistoryGraph />
        </ReactBoostrap.Container>
      </React.Fragment>
    )
  }
}

export default App