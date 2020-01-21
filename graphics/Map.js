import React from "react";

function Map(props) {
  return (
    <div className="container-map">
      <div
        className={
          props.state.upgrader ||
          props.state.selling ||
          props.state.reing ||
          props.state.mediaing
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "10%",
          backgroundColor: `rgb(${props.state.a1[0]})`
        }}
        id="a1"
        onClick={props.sellthis}
      >
        City Hall
        <div id="a1">+${props.state.a1[1]}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.a2[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.a2[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "20%",
          backgroundColor: `rgb(${props.state.a2[0]})`
        }}
        id="a2"
        onClick={props.sellthis}
      >
        ${props.state.a2[1]}
        <div id="a2" style={{marginTop:"2vw"}}>${props.state.a2[1] * 0.4} </div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.a3[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.a3[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "30%",
          backgroundColor: `rgb(${props.state.a3[0]})`
        }}
        id="a3"
        onClick={props.sellthis}
      >
        ${props.state.a3[1]}
        <div id="a3" style={{marginTop:"2vw"}}>${props.state.a3[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.a4[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.a4[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "40%",
          backgroundColor: `rgb(${props.state.a4[0]})`
        }}
        id="a4"
        onClick={props.sellthis}
      >
        ${props.state.a4[1]}
        <div id="a4" style={{ margin: "0" }}>
          {props.state.a4custom}
        </div>
        {props.state.a4custom === "Gate" ? (
          <div id="a4">${Math.round(props.state.a4[1] * 0.07)}</div>
        ) : (
          <div id="a4">${Math.round(props.state.a4[1] * 0.35)}</div>
        )}
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.a5[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.a5[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "50%",
          backgroundColor: `rgb(${props.state.a5[0]})`
        }}
        id="a5"
        onClick={props.sellthis}
      >
        ${props.state.a5[1]}
        <div id="a5" style={{marginTop:"2vw"}}>${props.state.a5[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.a6[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.a6[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "60%",
          backgroundColor: `rgb(${props.state.a6[0]})`
        }}
        id="a6"
        onClick={props.sellthis}
      >
        ${props.state.a6[1]}
        <div id="a6" style={{marginTop:"2vw"}}>${props.state.a6[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.a7[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.a7[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "70%",
          backgroundColor: `rgb(${props.state.a7[0]})`
        }}
        id="a7"
        onClick={props.sellthis}
      >
        ${props.state.a7[1]}
        <div id="a7" style={{marginTop:"2vw"}}>${props.state.a7[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.b1[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.b1[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "10%",
          left: "80%",
          backgroundColor: `rgb(${props.state.b1[0]})`
        }}
        id="b1"
        onClick={props.sellthis}
      >
        ${props.state.b1[1]}
        <div id="b1" style={{ margin: "0" }}>
          {props.state.b1custom}
        </div>
        {props.state.b1custom === "Gate" ? (
          <div id="b1">${Math.round(props.state.b1[1] * 0.07)}</div>
        ) : (
          <div id="b1">${Math.round(props.state.b1[1] * 0.35)}</div>
        )}
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.b2[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.b2[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "30%",
          left: "80%",
          backgroundColor: `rgb(${props.state.b2[0]})`
        }}
        id="b2"
        onClick={props.sellthis}
      >
        ${props.state.b2[1]}
        <div id="b2" style={{marginTop:"2vw"}}>${props.state.b2[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.b3[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.b3[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "50%",
          left: "80%",
          backgroundColor: `rgb(${props.state.b3[0]})`
        }}
        id="b3"
        onClick={props.sellthis}
      >
        ${props.state.b3[1]}
        <div id="b3" style={{marginTop:"2vw"}}>${props.state.b3[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.b4[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.b4[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "70%",
          left: "80%",
          backgroundColor: `rgb(${props.state.b4[0]})`
        }}
        id="b4"
        onClick={props.sellthis}
      >
        ${props.state.b4[1]}
        <div id="b4" style={{marginTop:"2vw"}}>${props.state.b4[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c1[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c1[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "80%",
          backgroundColor: `rgb(${props.state.c1[0]})`
        }}
        id="c1"
        onClick={props.sellthis}
      >
        ${props.state.c1[1]}
        <div id="c1" style={{ margin: "0" }}>
          {props.state.c1custom}
        </div>
        {props.state.c1custom === "Gate" ? (
          <div id="c1">${Math.round(props.state.c1[1] * 0.07)}</div>
        ) : (
          <div id="c1">${Math.round(props.state.c1[1] * 0.35)}</div>
        )}
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c2[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c2[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "70%",
          backgroundColor: `rgb(${props.state.c2[0]})`
        }}
        id="c2"
        onClick={props.sellthis}
      >
        ${props.state.c2[1]}
        <div id="c2" style={{marginTop:"2vw"}}>${props.state.c2[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c3[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c3[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "60%",
          backgroundColor: `rgb(${props.state.c3[0]})`
        }}
        id="c3"
        onClick={props.sellthis}
      >
        ${props.state.c3[1]}
        <div id="c3" style={{marginTop:"2vw"}}>${props.state.c3[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c4[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c4[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "50%",
          backgroundColor: `rgb(${props.state.c4[0]})`
        }}
        id="c4"
        onClick={props.sellthis}
      >
        ${props.state.c4[1]}
        <div id="c4" style={{ margin: "0" }}>
          {props.state.c4custom}
        </div>
        {props.state.c4custom === "Gate" ? (
          <div id="c4">${Math.round(props.state.c4[1] * 0.07)}</div>
        ) : (
          <div id="c4">${Math.round(props.state.c4[1] * 0.35)}</div>
        )}
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c5[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c5[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "40%",
          backgroundColor: `rgb(${props.state.c5[0]})`
        }}
        id="c5"
        onClick={props.sellthis}
      >
        ${props.state.c5[1]}
        <div id="c5" style={{marginTop:"2vw"}}>${props.state.c5[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c6[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c6[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "30%",
          backgroundColor: `rgb(${props.state.c6[0]})`
        }}
        id="c6"
        onClick={props.sellthis}
      >
        ${props.state.c6[1]}
        <div id="c6" style={{marginTop:"2vw"}}>${props.state.c6[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.c7[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.c7[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "20%",
          backgroundColor: `rgb(${props.state.c7[0]})`
        }}
        id="c7"
        onClick={props.sellthis}
      >
        ${props.state.c7[1]}
        <div id="c7" style={{marginTop:"2vw"}}>${props.state.c7[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.d1[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.d1[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "90%",
          left: "10%",
          backgroundColor: `rgb(${props.state.d1[0]})`
        }}
        id="d1"
        onClick={props.sellthis}
      >
        ${props.state.d1[1]}
        <div id="d1" style={{ margin: "0" }}>
          {props.state.d1custom}
        </div>
        {props.state.d1custom === "Gate" ? (
          <div id="d1">${Math.round(props.state.d1[1] * 0.07)}</div>
        ) : (
          <div id="d1">${Math.round(props.state.d1[1] * 0.35)}</div>
        )}
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.d2[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.d2[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "70%",
          left: "10%",
          backgroundColor: `rgb(${props.state.d2[0]})`
        }}
        id="d2"
        onClick={props.sellthis}
      >
        ${props.state.d2[1]}
        <div id="d2" style={{marginTop:"2vw"}}>${props.state.d2[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.d3[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.d3[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "50%",
          left: "10%",
          backgroundColor: `rgb(${props.state.d3[0]})`
        }}
        id="d3"
        onClick={props.sellthis}
      >
        ${props.state.d3[1]}
        <div id="d3" style={{marginTop:"2vw"}}>${props.state.d3[1] * 0.4}</div>
      </div>

      <div
        className={
          ((props.state.upgrader || props.state.selling) &&
            props.state.color !== props.state.d4[0]) ||
          ((props.state.reing || props.state.mediaing) &&
            props.state.color === props.state.d4[0])
            ? "darkblock"
            : "block"
        }
        style={{
          top: "30%",
          left: "10%",
          backgroundColor: `rgb(${props.state.d4[0]})`
        }}
        id="d4"
        onClick={props.sellthis}
      >
        ${props.state.d4[1]}
        <div id="d4" style={{marginTop:"2vw"}}>${props.state.d4[1] * 0.4}</div>
      </div>
    </div>
  );
}

export default Map;
