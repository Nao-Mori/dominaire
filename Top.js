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
          <div style={{maxWidth:"550px",padding:"10px",margin:"0 auto"}}>
            <img alt="log" src="/logo.png" style={{width:"100%",marginTop:"50px",marginBottom:"30px"}}/>
            <br/>
            <div style={{maxWidth:"500px",margin:"0 auto",backgroundColor:"rgba(240,240,240,0.7)",padding:"20px",borderRadius:"10px"}}>
            <h2 style={{marginTop:"0"}}>1. CHANGE NAMES AS YOU LIKE</h2>
            <div style={{display:"flex", textAlign:"left",maxWidth:"100vw", flexWrap:"wrap"}}>
              <div style={{margin:"0 auto"}}>
                <h4 style={{margin:"2px",color:"rgb(221, 99, 99)"}}>PLAYER1</h4>
                <input
                  className="input"
                  name="setName1"
                  value={name1}
                  onChange={e=>setName1(e.target.value)}
                  onKeyPress={checkin}
                  style={{backgroundColor:"rgb(221, 99, 99)",color:"white"}}
                />
              </div>
              <div style={{margin:"0 auto"}}>
                <h4 style={{margin:"2px",color:"rgb(87, 122, 199)"}}>PLAYER2</h4>
                <input
                  className="input"
                  name="setName2"
                  value={name2}
                  onChange={e=>setName2(e.target.value)}
                  onKeyPress={checkin}
                  style={{backgroundColor:"rgb(87, 122, 199)",color:"white"}}
                />
              </div>
              <div style={{margin:"0 auto"}}>
                <h4 style={{margin:"2px",color:"rgb(63, 151, 75)"}}>PLAYER3</h4>
                <input
                  className="input"
                  name="setName3"
                  value={name3}
                  onChange={e=>setName3(e.target.value)}
                  onKeyPress={checkin}
                  style={{backgroundColor:"rgb(63, 151, 75)",color:"white"}}
                />
              </div>
            </div>
            <br/>
            <h2 style={{marginTop:"10px"}}>2. CHOOSE A NUMBER OF CPU</h2>
            <div style={{display: "flex",flexWrap:"wrap"}}>
            <button className="topbtn" style={{backgroundColor:mode==="2 CPU"?"rgb(209, 127, 49)":null,margin:"5px auto"}}
            onClick={()=>setMode("2 CPU")}>
              2 CPU
            </button>
            <button className="topbtn" style={{backgroundColor:mode==="1 CPU"?"rgb(209, 127, 49)":null,margin:"5px auto"}}
            onClick={()=>setMode("1 CPU")}>
              1 CPU
            </button>
            <button className="topbtn" style={{backgroundColor:mode==="0 CPU"?"rgb(209, 127, 49)":null,margin:"5px auto"}}
            onClick={()=>setMode("0 CPU")}>
              0 CPU
            </button>
            </div>
            <br/>
            <h2 style={{margin:"15px"}}>3. UM... DUH...</h2>
            <button className="btn" style={{backgroundColor:"rgb(207, 82, 33)"}} onClick={()=>setTop(false)}>
              START
            </button>
            </div>
            <p style={{ marginTop: "40px" }}/>
            <div style={{maxWidth:"700px",margin:"0 auto",backgroundColor:"rgba(240,240,240,0.7)",padding:"10px",borderRadius:"10px"}}>
              <h1 style={{marginTop:"0"}}>HOW TO PLAY</h1>
              <ul style={{textAlign:"left", fontWeight:"bold",fontSize:"18px"}}>
                <li>Dominaire is a 3 person board game and you can play with your friends locally (online battles are not available at this point).</li>
                <br/>
                <li>The color of buttons indicates one's turn (Pink, Blue, Green).</li>
                <br/>
                <li>Draw dice, buy tiles (land) and upgrade them. If your opponents land on your tile you take money from them.</li>
                <br/>
                <li>Occupy the city and be the "Dominaire"!</li>
              </ul>
            </div>
            <p style={{ marginTop: "40px" }}/>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                maxWidth: "600px",
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
