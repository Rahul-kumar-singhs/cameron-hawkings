import React ,{useState} from 'react'
import { Button, Form, Dropdown, Table } from "react-bootstrap"
import TableContant from './TableContant'

export default function Benchmarks() {

const [expandall, setexpandall] = useState(false)


    const data = {
        tittle: "Income", actualYTD: "7900", rolingaverage: "100000", annualized: "79,468", clientsaverage: "100%", industryaverage: "100%",

        data: [
            { tittle: "patient fee income", actualYTD: "900", rolingaverage: "100", annualized: "78468", clientsaverage: "4%", industryaverage: "" },

            { tittle: "patient fee income", actualYTD: "900", rolingaverage: "100", annualized: "78468", clientsaverage: "4%", industryaverage: "4%" },

            { tittle: "patient fee income", actualYTD: "900", rolingaverage: "100", annualized: "78468", clientsaverage: "4%", industryaverage: "2%" }
        ]
    }


    return (
        <div className="container">
            <div className="p-2 rounded d-flex ">
                <div style={{ width: "200px" }} className="me-1" > <Form.Control type="date" placeholder="Enter email" style={{ border: "none" }} /></div>
                <Dropdown className="me-1 "  >
                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ backgroundColor: "white" }}>
                        Monthly
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="">Yearly</Dropdown.Item>
                        <Dropdown.Item href="">Monthly</Dropdown.Item>
                        <Dropdown.Item href="">Weekly</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="btn d-flex bg-white me-1 ">
                    <Form.Check
                        inline
                        checked
                        label="Amount"
                        name="group1"
                        type={"radio"}

                    />
                    <Form.Check
                        inline
                        label="Percentage"
                        name="group1"
                        type={"radio"}

                    />
                </div>
                <Button variant="warning" className="me-1" style={{ backgroundColor: "white", border: "none" }} onClick={()=>{
                            setexpandall(!expandall)
                        }}>Expand All</Button>{' '}
            </div>
            <div className='bg-white mt-2'>
                <div className='d-flex justify-content-between p-3'>

                    <div className='d-flex flex-column'>
                        <h2>Percentology</h2>
                        <span>january 2021 to march 2021</span>
                    </div>

                    <div className='d-flex flex-column '>
                        <h2>Benchmarks</h2>
                        <span>Report Date: 02/21/2021</span>
                    </div>


                </div>

                <Table striped bordered hover style={{margin:"0px"}}>
                    <thead>
                        <tr>
                            <th width="350px">
                                <div className='d-flex flex-column'>
                                    <h5 style={{ fontWeight: "bold" }}>Benchmark Categories</h5>
                                    <h6>March, 2021</h6>
                                </div>
                            </th>
                            <th width="150px">
                                <div className='d-flex flex-column'>
                                    <span>Actual YTD</span>
                                    <h6>$ Amount</h6>
                                </div>
                            </th>
                            <th width="150px">
                                <div className='d-flex flex-column'>
                                    <span>Rolling Average</span>
                                    <h6>$ Amount</h6>
                                </div>
                            </th>
                            <th width="150px">
                                <div className='d-flex flex-column'>
                                    <span>Annualized</span>
                                    <h6>$ Amount</h6>
                                </div>
                            </th>
                            <th width="150px">
                                <div className='d-flex flex-column'>
                                    <span>Clients Average</span>
                                    <h6>% of Income</h6>
                                </div>
                            </th>
                            <th width="150px">
                                <div className='d-flex flex-column'>
                                    <span>Industry Average </span>
                                    <h6>% of Income</h6>
                                </div>
                            </th>

                        </tr>
                    </thead>
                </Table>
                <TableContant data={data} isExpend={expandall}/>
                <TableContant data={data}  isExpend={expandall}/>
            </div>

        </div >
    )
}
