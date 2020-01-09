import React from "react"

function Ranking(props){
    return(
        <div>
            <div className="container4 shadow"></div>
                <h1 style={{position: "absolute", top: "22%",left:"7%"}}>Ranking</h1>
            <div className="container5">
            <div className={props.state.total1>props.state.total2 && props.state.total1>props.state.total3? "container3 win": "container3"} style={{top:"20%", backgroundColor: `rgb(221, 99, 99)`}}>
            <h1 className="nomargin">{props.state.name1}</h1>
            <h1 className="nomargin">${props.state.total1}</h1>
            </div>
            <div className={props.state.total2>props.state.total1 && props.state.total2>props.state.total3? "container3 win": "container3"} style={{top:"35%", backgroundColor: `rgb(87, 122, 199)`}}>
            <h1 className="nomargin">{props.state.name2}</h1>
            <h1 className="nomargin">${props.state.total2}</h1>
            </div>
            <div className={props.state.total3>props.state.total1 && props.state.total3>props.state.total2? "container3 win": "container3"} style={{top:"50%", backgroundColor: `rgb(63, 151, 75)`}}>
            <h1 className="nomargin"style={{fontSize: "auto"}}>{props.state.name3}</h1>
            <h1 className="nomargin">${props.state.total3}</h1>
            </div>
            </div>
            <div>
            <button onClick={props.bgmoff} className="smallbtn" style={{position: "absolute", top: "10%", left:"8%", width:"100px"}}>BGM {props.state.bgm}</button>
              </div>
        </div>
    )
}

export default Ranking