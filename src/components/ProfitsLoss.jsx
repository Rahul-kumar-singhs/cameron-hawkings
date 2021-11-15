import React, { useState, useEffect } from 'react'
import Barchart from './Barchart';
import Linechart from './Linechart';
import Areachart from "./Areachart"
import { Select, Slider } from "antd"
import { Table } from "react-bootstrap"

export default function ProfitsLoss() {
    let [key, setkey] = useState("1");
    const [mark, setMark] = useState({})
    const [data, setData] = useState([
        ['Year', 'Expenses'],
        ['2013', 1000],
        ['2014', 1170],
        ['2015', 660],
        ['2016', 1030],
        ['2017', 1050],
        ['2018', 1210],
        ['2019', 770],
        ['2020', 1030],
        ['2021', 1000],
        ['2022', 1170],
        ['2023', 660],
        ['2024', 1030],
        ['2025', 1000],
        ['2026', 1170],
        ['2027', 660],
        ['2028', 1030],

    ])
    const [displaydata, setDisplayData] = useState([])


    function onAfterChange(value) {
        // console.log('onAfterChange: ', value);
        let fil_arr = data.filter((record, i) => i != 0);
        console.log("filter data :", [data[0]].concat(fil_arr.filter((record, index) => (
            index >= value[0] && index <= value[1])
        )))

        setDisplayData([data[0]].concat(fil_arr.filter((record, index) => (
            index >= value[0] && index <= value[1])
        )))

    }

    useEffect(() => {
        let fil_arr = data.filter((record, i) => i != 0);
        setMark(fil_arr.reduce((a, v, i) => {
            return ({ ...a, [i]: v[0] })
        }))
        setDisplayData(data)
    }, [])


    useEffect(() => {
        console.log("displaydata", displaydata)
    })


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
                            <Select.Option value="3">Area Chart</Select.Option>
                        </Select>

                    </h5>
                </div>
                <div> Select a predefined chart </div>
            </div>


            <div >

                {key === "1" && <Linechart data={displaydata} />}

                {key === "2" && <Barchart data={displaydata} />}

                {key === "3" && <Areachart data={displaydata} />}

            </div>

            <div>
                <Slider
                    range
                    min={0}
                    max={Object.keys(mark).length - 1}
                    marks={mark}
                    onAfterChange={onAfterChange}
                />
            </div>

            <br />
            <Table striped bordered hover>
                <tbody>
                    {
                        data.map((record, index) => (
                            <tr>
                                <td className='ms-2'>{record[0]}</td>
                                <td className='text-end me-2'>{record[1]}</td>
                               
                            </tr>
                        ))
                    }


                </tbody>
            </Table>


        </div>
    )
}
