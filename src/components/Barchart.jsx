import React from 'react'
import { Chart } from "react-google-charts"

export default function Barchart({ data }) {


    return (
        <div>
            <Chart
                width={'100%'}
                height={'50vh'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Company Performance',
                    hAxis: { title: 'value', titleTextStyle: { color: '#333' } },
                    vAxis: { title: 'Year', minValue: 0 },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '50%', height: '70%' },
                    // lineWidth: 25
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}

            />

        </div>
    )
}
