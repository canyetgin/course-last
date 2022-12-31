import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
  const valueArray = props.dataPoints.map((item) => item.value)
  const totalMaximum = Math.max(...valueArray)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        )
      })}
    </div>
  )
}

export default Chart
