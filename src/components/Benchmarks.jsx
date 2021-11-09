import React from 'react'
import { Button, Form, Dropdown } from "react-bootstrap"

export default function Benchmarks() {
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
                <Button variant="success" className="me-1" style={{ backgroundColor: "white", color: "black", border: "none" }}>  <Form.Check type="radio" label="Amount" /></Button>{' '}
                <Button variant="warning" className="me-1" style={{ backgroundColor: "white", border: "none" }}>Percentage</Button>{' '}
                <Button variant="warning" className="me-1" style={{ backgroundColor: "white", border: "none" }}>Expand All</Button>{' '}
            </div>
        </div >
    )
}
