import React from 'react'
import * as ReactGoogleCharts from 'react-google-charts'
import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyB87R_NkLPy2lUQFHb_3japiTDrlJkvp7c',
  authDomain: 'forcloud-monitor-db.firebaseapp.com',
  databaseURL: 'https://forcloud-monitor-db.firebaseio.com',
  projectId: 'forcloud-monitor-db',
  storageBucket: '',
  messagingSenderId: '538640326535',
  appId: '1:538640326535:web:b62493e6dd63f11b48bd22'
})

const database = firebase.database()

class SensorHistoryGraph extends React.Component {
  state = { headers: ['Time'], rows: [] }

  render () {
    const { headers, rows } = this.state

    return (
      <ReactGoogleCharts.Chart chartType="Line" data={[headers].concat(rows)}></ReactGoogleCharts.Chart>
    )
  }

  componentDidMount () {
    const { headers } = this.state

    database.ref('sensors/history').on('child_added', child => {
      const row = [new Date(Number.parseInt(child.key))]

      child.val().sensors.forEach(sensor => {
        const { name } = sensor

        if (!headers.includes(name)) {
          headers.push(name)
        }

        row.push(sensor.value)
      })

      this.setState({ headers, rows: this.state.rows.concat([row]) })
    })
  }
}

export default SensorHistoryGraph