import React from "react"
import Card from "./Card.js";
import arrowUp from "../Status-card/arrow-up.png"
import arrowdown from "../Status-card/arrow-down.png"
import './Status.css'

const Component1 = () => {

    return (
        <div className="parent-component">
            <Card status="COMPLETE" cost=" 1876,32" trend="0.12%" image={arrowUp} value={60} strokeColor={"#71C07B"} rotation={0} />
            <div className="second-card" >
                <Card className="second-card" status="AVAILABLE" cost=" 418,44" trend="-3.02%" image={arrowdown} value={50} strokeColor={"#0891FE"} rotation={1.3} />
            </div>

            <Card status="PROFIT" cost=" 1457,88" trend="16.30%" image={arrowUp} value={70} strokeColor={"#FFAF2B"} rotation={0.7} />
        </div>
    )
}

export default Component1;
