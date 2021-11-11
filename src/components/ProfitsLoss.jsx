import React, { useState } from 'react'
import Barchart from './Barchart';
import Linechart from './Linechart';
import Piechart from './Piechart';
import Areachart from "./Areachart"
import { Select } from "antd"

export default function ProfitsLoss() {

    const [key, setkey] = useState("1")
    const date = ["Oct 2019", "Nav 2019", "Dec 2019", "Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020", "Jun 2020", "Jul 2020", "Aug 2020", "Sept 2020", "Oct 2020"]
    const value = ["17", "16", "15", "14", "13", "12", "11", "1", "09"]

    return (
        <div>
            <div className='d-flex justify-content-between bg-white p-2' >
                <div className='d-flex'>
                    <h5>Showing</h5>
                    <h5 className='ms-4'>
                        <Select defaultValue="1" style={{ width: 120 }} onChange={(value) => {
                            console.log(value)
                            setkey(value)
                        }} bordered={false}>
                            <Select.Option value="1">Line Chart</Select.Option>
                            <Select.Option value="2">Bar Chart</Select.Option>
                            <Select.Option value="3">Pie Chart</Select.Option>
                            <Select.Option value="4">Area Chart</Select.Option>
                        </Select>

                    </h5>
                </div>
                <div> Select a predefined chart </div>
            </div>

            <div style={{ height: "600px" }}>
                
                {key === "1" && <Linechart date={date} value={value} style={{ height: "100%" }} />}

                {key === "2" && <Barchart date={date} value={value} />}

                {key === "3" && <Piechart date={date} value={value} />}

                {key === "4" && <Areachart date={date} value={value} />}

            </div>


        </div>
    )
}
