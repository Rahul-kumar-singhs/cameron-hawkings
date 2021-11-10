
import React, { useState } from 'react'
import { Tabs, Tab } from "react-bootstrap"
import Benchmarks from './Benchmarks';
import ProfitsLoss from "./ProfitsLoss";

export default function Dashboard() {

    const [key, setKey] = useState('1');
    return (
        <div className="container p-3 border border-3 rounded " style={{ height: "100%", backgroundColor: "ghostwhite" }}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="1" title="Benchmarks">
                    <Benchmarks />
                </Tab>
                <Tab eventKey="2" title="Profit & Loss">
                    <ProfitsLoss />
                </Tab>
            </Tabs>
        </div >
    )
}
