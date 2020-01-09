import React from "react"

function Header(props){
    return(
        <div>
            <h1 style={{position: "absolute", top: "0%", left: "5%", color: `rgb(221, 99, 99)`}}>{props.state.name1}: ${props.state.price1} </h1>
            <h1  style={{position: "absolute", top: "0%", left: "25%", color: `rgb(87, 122, 199)`}}>{props.state.name2}: ${props.state.price2} </h1>
            <h1  style={{position: "absolute", top: "0%", left: "45%", color: `rgb(63, 151, 75)`}}>{props.state.name3}: ${props.state.price3} </h1>
            <h1 style={{position: "absolute", left: "70%"}}>Game Ends in {props.state.overcount} Days</h1>
        </div>
    )
}

export default Header