import React from "react"

function Header(props){
    return(
        <div className="container-headbar shadow">
            <div style={{ color: `rgb(221, 99, 99)`, fontSize:"25px", paddingRight:"15px"}}>
                {props.state.name1}: ${props.state.price1}
            </div>
            <div style={{color: `rgb(87, 122, 199)`, fontSize:"25px", paddingRight:"15px"}}>
                {props.state.name2}: ${props.state.price2}
            </div>
            <div style={{color: `rgb(63, 151, 75)`, fontSize:"25px", paddingRight:"15px"}}>
             {props.state.name3}: ${props.state.price3}
            </div>  
            <div style={{marginLeft: "auto", fontSize:"25px"}}>   
                Game Ends in {props.state.overcount} Days
            </div>  
            
        </div>
    )
}

export default Header