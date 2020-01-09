import React from "react";
import Main from "./component/Main";

function Top () {
  const [top,setTop]= React.useState(true)
  const [name1, setName1] = React.useState("Nao")
  const [name2, setName2] = React.useState("Taro")
  const [name3, setName3] = React.useState("Saki")
  const [mode, setMode] = React.useState("2 CPU")

  const checkin = event => {
    if (event.target.value.length > 7) {
      event.preventDefault();
    }
  };

    return (
      <div>
        {top ? (
          <div>
            <img alt="log" src="/logo.png" style={{height:"auto",maxWidth:"500px",marginTop:"50px",marginBottom:"30px"}}/>
            <br/>
            <div style={{maxWidth:"500px",margin:"0 auto",backgroundColor:"rgba(240,240,240,0.5)",padding:"20px",borderRadius:"10px"}}>
            <h2 style={{marginTop:"0"}}>1. CHANGE NAMES AS YOU LIKE</h2>
            <div style={{display:"flex", textAlign:"left",maxWidth:"100vw"}}>
              <div style={{marginLeft:"auto"}}>
                <h4 style={{margin:"2px"}}>PLAYER1</h4>
                <input
                  className="input"
                  name="setName1"
                  value={name1}
                  onChange={e=>setName1(e.target.value)}
                  onKeyPress={checkin}
                />
              </div>
              <div style={{margin:"0 25px"}}>
                <h4 style={{margin:"2px"}}>PLAYER2</h4>
                <input
                  className="input"
                  name="setName2"
                  value={name2}
                  onChange={e=>setName2(e.target.value)}
                  onKeyPress={checkin}
                />
              </div>
              <div style={{marginRight:"auto"}}>
                <h4 style={{margin:"2px"}}>PLAYER3</h4>
                <input
                  className="input"
                  name="setName3"
                  value={name3}
                  onChange={e=>setName3(e.target.value)}
                  onKeyPress={checkin}
                />
              </div>
            </div>
            <br/>
            <h2 style={{marginTop:"10px"}}>2. CHOOSE MODE</h2>
            <button className="topbtn" style={{backgroundColor:mode==="2 CPU"?"rgb(209, 127, 49)":null}}
            onClick={()=>setMode("2 CPU")}>
              2 CPU
            </button>
            <button className="topbtn" style={{backgroundColor:mode==="1 CPU"?"rgb(209, 127, 49)":null,margin:"0 35px"}}
            onClick={()=>setMode("1 CPU")}>
              1 CPU
            </button>
            <button className="topbtn" style={{backgroundColor:mode==="0 CPU"?"rgb(209, 127, 49)":null}}
            onClick={()=>setMode("0 CPU")}>
              0 CPU
            </button>
            <br/>
            <h2 style={{marginTop:"25px"}}>3. UM... DUH...</h2>
            <button className="btn" style={{backgroundColor:"rgb(207, 82, 33)"}} onClick={()=>setTop(false)}>
              START
            </button>
            </div>
            <p style={{ marginTop: "40px" }}></p>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                maxWidth: "500px",
                height: "200px",
                margin: "auto",
                textAlign: "left",
                overflowY: "scroll",
                paddingTop: "0px",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
            ><p><b>Latest version 5.13</b> 2019/09/03: New event: "Goverment warning" added, 2019 version Monopoly is here! Minor errors fixed(gate, government warnings), 80 days -> 85 days, new design, added a ranking board and cancellation options, buffed Real Estate.
            </p>
              <p><b>Latest version 4.3</b> 2019/08/28: Minor errors fixed, more tiles for custom shop, 100 days -> 80 days, government warning fix.
              
              </p>
              <p><b>Version 4.12</b> 2019/08/26: Added custom shops (3 brand new different
              kinds), fixed minor bugs (upgrade button didn't show in
              some situations).
              </p>
              <p>
              <b>Version 4.0</b> 2019/08/25: New minigame added "Stack it up", win it all and flip the game!!
              </p>
              <p>
              <b>Version 3.82</b> 2019/08/24: A mini game added "Monster bet", play it safe? or taking a risk for a huge come-back!!
            </p>
            </div>
            
          </div>
        ) : (
          <Main
          quit={()=>setTop(true)} 
          mode={mode}
          name1={name1}
          name2={name2}
          name3={name3}
          />
        )}
    </div>
  )
}

export default Top;
