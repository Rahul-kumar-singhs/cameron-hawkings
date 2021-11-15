import React, { useState, useEffect } from 'react'
import Chart from "react-google-charts"


export default function Linechart({ data }) {


    return (
        <div>
            <Chart
                width={'100%'}
                height={'50vh'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    explorer: { 
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        maxZoomIn: 4.0
                },
                    title: 'Company Performance',
                    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                    vAxis: { minValue: 0 },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '50%', height: '70%' },
                    // lineWidth: 25
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

