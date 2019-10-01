import React from 'react'
import * as ReactGoogleCharts from 'react-google-charts'

class SensorHistoryGraph extends React.Component {
  state = {}

  render () {
    return (
      <ReactGoogleCharts.Chart chartType="Line" data={this.state.data}></ReactGoogleCharts.Chart>
    )
  }

  componentDidMount () {
    fetch('/api/sensors/history').then(response => response.json()).then(data => {
      const { error } = data

      if (error) throw new Error(error)

      this.setState({
        data: [
          ['Time', 'Temperature', 'pH', 'Salinity'],
          [new Date(1569951085000), 6, 7.4, 6.1],
          [new Date(1569959200000), 5, 7.6, 6.7],
          [new Date(1572566400000), 4, 8.1, 6.3]
        ]
      })
    })
  }
}

export default SensorHistoryGraph