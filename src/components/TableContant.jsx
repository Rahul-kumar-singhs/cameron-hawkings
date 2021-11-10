import React ,{useState,useEffect} from 'react'
import { Table } from "react-bootstrap"
import {DownOutlined,UpOutlined} from "@ant-design/icons"

export default function TableContant({ data,isExpend }) {

    const [state, setstate] = useState(false)

    useEffect(() => {
       setstate(isExpend)
    }, [isExpend])

    return (
        <div>
            <Table striped bordered hover style={{margin:"0px"}}>
                <tbody>
                    <tr>
                        <th width="350px" onClick={()=>{
                            setstate(!state)
                        }} >
                            <div>
                            <div style={{width: "14px",height:"14px",display:"inline-block"}} className='bg-primary me-2'></div>
                            <span>{state?<UpOutlined />:<DownOutlined/> }</span>
                            <span className='ms-2'>{data.tittle}</span>
                            </div>
                        </th>
                        <th width="150px">{data.actualYTD}</th>
                        <th width="150px">{data.rolingaverage}</th>
                        <th width="150px">{data.annualized}</th>
                        <th width="150px">{data.clientsaverage}</th>
                        <th width="150px">{data.industryaverage}</th>
                    </tr>
                    {state&&
                        data.data.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <td >{record.tittle}</td>
                                    <td >{record.actualYTD}</td>
                                    <td >{record.rolingaverage}</td>
                                    <td >{record.annualized}</td>
                                    <td >{record.clientsaverage}</td>
                                    <td >{record.industryaverage}</td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}
