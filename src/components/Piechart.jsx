import React from 'react'

import { Pie } from 'react-chartjs-2'; 

export default function Piechart({date,value}) {
    return (
        <div>
             <Pie  
                 data={{
                    labels:date,
                    datasets: [

                        {
                            label: 'Profit and Loss',
                            data: value,
                            backgroundColor: [
                                "#3cb371",
                                "#0000FF",
                                "#9966FF",
                                "#4C4CFF",
                                "#00FFFF",
                                "#f990a7",
                                "#aad2ed",
                                "#FF00FF",
                                "Blue",
                                "Red"
                            ]
                        }

                    ]

                }}
               
          
                options={{ maintainAspectRatio: false }} />  

        </div>
    )
}
