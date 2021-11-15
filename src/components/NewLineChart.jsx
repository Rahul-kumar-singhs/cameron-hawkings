
import React from 'react'
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip,Zoom,Legend } from '@syncfusion/ej2-react-charts';



export default function NewLineChart() {

    const data = [
        { month: 'Jan 2021', sales: 35 }, { month: 'Feb 2022', sales: 28 },
        { month: 'Mar 2021', sales: 34 }, { month: 'Apr 2022', sales: 32 },
        { month: 'May 2021', sales: 40 }, { month: 'Jun 2022', sales: 32 },
        { month: 'Jul 2021', sales: 35 }, { month: 'Aug 2022', sales: 55 },
        { month: 'Sep 2021', sales: 38 }, { month: 'Oct 2022', sales: 30 },
        { month: 'Nov 2021', sales: 25 }, { month: 'Dec 2022', sales: 32 }
    ];


    return (
        <div>
            <ChartComponent id="charts" primaryXAxis={{ valueType: 'Category'}} zoomSettings={{enableMouseWheelZooming:true,enableSelectionZooming:true}}>
                <Inject services={[ColumnSeries,Zoom, Tooltip, LineSeries, Category,Legend]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName='month' yName='sales' name='sales' />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}
