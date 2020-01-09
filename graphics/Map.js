import React from "react"

function Map(props){
    return(
        <div>
        <div className="BG"></div>
        <div className={props.state.upgrader||props.state.selling||props.state.reing||props.state.mediaing? "darkblock":"block"} style={{fontSize: "30px", top: "10%", left: "10%", backgroundColor: `rgb(${props.state.a1[0]})`}} id="a1" onClick={props.sellthis}>City Hall
        
        <p id="a1" style={{fontSize: "25px", marginTop:"55px"}}>+${props.state.a1[1]}</p>}</div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.a2[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.a2[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "20%", backgroundColor: `rgb(${props.state.a2[0]})`}} id="a2" onClick={props.sellthis}>${props.state.a2[1]}
        <p id="a2" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.a2[1]*0.4} </p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.a3[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.a3[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "30%", backgroundColor: `rgb(${props.state.a3[0]})`}} id="a3" onClick={props.sellthis}>${props.state.a3[1]}
        <p id="a3" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.a3[1]*0.4}</p></div>



        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.a4[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.a4[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "40%", backgroundColor: `rgb(${props.state.a4[0]})`}} id="a4" onClick={props.sellthis}>${props.state.a4[1]}
        <p id="a4" style={{fontSize: "35px", margin: "0"}}>{props.state.a4custom}</p>
        {props.state.a4custom==="Gate"?<p id="a4" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.a4[1]*0.07)}</p> :<p id="a4" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.a4[1]*0.35)}</p>}</div>

        


        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.a5[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.a5[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "50%", backgroundColor: `rgb(${props.state.a5[0]})`}} id="a5" onClick={props.sellthis}>${props.state.a5[1]}
        <p id="a5" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.a5[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.a6[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.a6[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "60%", backgroundColor: `rgb(${props.state.a6[0]})`}} id="a6" onClick={props.sellthis}>${props.state.a6[1]}
        <p id="a6" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.a6[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.a7[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.a7[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "70%", backgroundColor: `rgb(${props.state.a7[0]})`}} id="a7" onClick={props.sellthis}>${props.state.a7[1]}
        <p id="a7" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.a7[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.b1[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.b1[0])? "darkblock":"block"} style={{fontSize: "35px", top: "10%", left: "80%", backgroundColor: `rgb(${props.state.b1[0]})`}} id="b1" onClick={props.sellthis}>${props.state.b1[1]}    
        <p id="b1" style={{fontSize: "35px", margin: "0"}}>{props.state.b1custom}</p>
        {props.state.b1custom==="Gate"?<p id="b1" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.b1[1]*0.07)}</p> :<p id="b1" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.b1[1]*0.35)}</p>}</div>
        

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.b2[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.b2[0])? "darkblock":"block"} style={{fontSize: "35px", top: "30%", left: "80%", backgroundColor: `rgb(${props.state.b2[0]})`}} id="b2" onClick={props.sellthis}>${props.state.b2[1]}
        <p id="b2" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.b2[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.b3[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.b3[0])? "darkblock":"block"} style={{fontSize: "35px", top: "50%", left: "80%", backgroundColor: `rgb(${props.state.b3[0]})`}} id="b3" onClick={props.sellthis}>${props.state.b3[1]}
        <p id="b3" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.b3[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.b4[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.b4[0])? "darkblock":"block"} style={{fontSize: "35px", top: "70%", left: "80%", backgroundColor: `rgb(${props.state.b4[0]})`}} id="b4" onClick={props.sellthis}>${props.state.b4[1]}
        <p id="b4" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.b4[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c1[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c1[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "80%", backgroundColor: `rgb(${props.state.c1[0]})`}} id="c1" onClick={props.sellthis}>${props.state.c1[1]}
        <p id="c1" style={{fontSize: "35px", margin: "0"}}>{props.state.c1custom}</p>
        {props.state.c1custom==="Gate"?<p id="c1" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.c1[1]*0.07)}</p> :<p id="c1" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.c1[1]*0.35)}</p>}</div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c2[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c2[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "70%", backgroundColor: `rgb(${props.state.c2[0]})`}} id="c2" onClick={props.sellthis}>${props.state.c2[1]}
        <p id="c2" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.c2[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c3[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c3[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "60%", backgroundColor: `rgb(${props.state.c3[0]})`}} id="c3" onClick={props.sellthis}>${props.state.c3[1]}
        <p id="c3" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.c3[1]*0.4}</p></div>


        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c4[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c4[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "50%", backgroundColor: `rgb(${props.state.c4[0]})`}} id="c4" onClick={props.sellthis}>${props.state.c4[1]}
        <p id="c4" style={{fontSize: "35px", margin: "0"}}>{props.state.c4custom}</p>
        {props.state.c4custom==="Gate"?<p id="c4" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.c4[1]*0.07)}</p> :<p id="c4" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.c4[1]*0.35)}</p>}</div>




        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c5[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c5[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "40%", backgroundColor: `rgb(${props.state.c5[0]})`}} id="c5" onClick={props.sellthis}>${props.state.c5[1]}
        <p id="c5" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.c5[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c6[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c6[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "30%", backgroundColor: `rgb(${props.state.c6[0]})`}} id="c6" onClick={props.sellthis}>${props.state.c6[1]}
        <p id="c6" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.c6[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.c7[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.c7[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "20%", backgroundColor: `rgb(${props.state.c7[0]})`}} id="c7" onClick={props.sellthis}>${props.state.c7[1]}
        <p id="c7" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.c7[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.d1[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.d1[0])? "darkblock":"block"} style={{fontSize: "35px", top: "90%", left: "10%", backgroundColor: `rgb(${props.state.d1[0]})`}} id="d1" onClick={props.sellthis}>${props.state.d1[1]}
        <p id="d1" style={{fontSize: "35px", margin: "0"}}>{props.state.d1custom}</p>
        {props.state.d1custom==="Gate"?<p id="d1" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.d1[1]*0.07)}</p> :<p id="d1" style={{fontSize: "25px", margin:"0"}}>${Math.round(props.state.d1[1]*0.35)}</p>}</div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.d2[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.d2[0])? "darkblock":"block"} style={{fontSize: "35px", top: "70%", left: "10%", backgroundColor: `rgb(${props.state.d2[0]})`}} id="d2" onClick={props.sellthis}>${props.state.d2[1]}
        <p id="d2" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.d2[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.d3[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.d3[0])? "darkblock":"block"} style={{fontSize: "35px", top: "50%", left: "10%", backgroundColor: `rgb(${props.state.d3[0]})`}} id="d3" onClick={props.sellthis}>${props.state.d3[1]}
        <p id="d3" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.d3[1]*0.4}</p></div>

        <div className={((props.state.upgrader||props.state.selling)&&props.state.color!==props.state.d4[0]) ||
            ((props.state.reing||props.state.mediaing)&&props.state.color===props.state.d4[0])? "darkblock":"block"} style={{fontSize: "35px", top: "30%", left: "10%", backgroundColor: `rgb(${props.state.d4[0]})`}} id="d4" onClick={props.sellthis}>${props.state.d4[1]}
        <p id="d4" style={{fontSize: "25px", marginTop:"50px"}}>${props.state.d4[1]*0.4}</p></div>
        </div>
    )
}

export default Map