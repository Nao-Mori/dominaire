import React from 'react';
import './App.css';
import './Container.css';
import Top from "./Top";
import Main from "./component/Main";


function App() {
  const [mobile, setMobile]=React.useState(false)
  const [mobileAlert, setMobileAlert]=React.useState(false)
  const [top, setTop]=React.useState(true)
  const [name1, setName1] = React.useState("Nao")
  const [name2, setName2] = React.useState("Taro")
  const [name3, setName3] = React.useState("Saki")
  const [mode, setMode] = React.useState("2 CPU")
  const [bg, setBg] = React.useState("bg-gold")

  React.useEffect(()=>{
    if(typeof window.orientation!=="undefined") {
      setMobileAlert(true)
      setMobile(true)
    }
  },[])
  return (
    <div className={bg} style={{minHeight:"100vh"}}>
      <div style={{minHeight:"90vh"}}>
        <div style={{minHeight:"70vw"}}>
        {top?
          <div className="container-intro">
            <h1 className="logo">DOMINAIRE</h1>
            {mobileAlert?
              <div>
                <h3 style={{padding:"30px 20px",backgroundColor:"rgba(255,255,255,0.8)"}}>
                  Dear mobile users.<br/>Please hold your phone horizontally for a better experience.
                  <br/>
                  <button className="topbtn" style={{marginTop:"20px"}} onClick={()=>setMobileAlert(false)}>Gotcha!</button>
                </h3>
              </div>
              :
              <Top
                play={()=>setTop(false)}
                name1={name1}
                name2={name2}
                name3={name3}
                mode={mode}
                setName1={e=>setName1(e)}
                setName2={e=>setName2(e)}
                setName3={e=>setName3(e)}
                setMode={e=>setMode(e)}
              />
            }
          </div>
          :
          <Main 
            quit={()=>setTop(true)} 
            mode={mode}
            name1={name1}
            name2={name2}
            name3={name3}
            mobile={mobile}
            setBg={prop=>setBg(prop)}
          />
          }
          </div>
        </div>
        <div style={{width:"100%",textAlign:"center",backgroundColor:"rgba(240,240,240,0.7)",height:"50px",paddingTop:"20px",marginTop:"35px"}}>
          <h3 style={{margin:"0"}}>© Nao Mori 2020</h3>
        </div>
    </div>
  );
}

export default App;
