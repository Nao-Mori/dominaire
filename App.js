import React from 'react';
import './App.css';
import Top from "./Top";
import Main from "./component/Main";


function App() {
  const [mobile, setMobile]=React.useState(false)
  const [top, setTop]=React.useState(true)
  const [name1, setName1] = React.useState("Nao")
  const [name2, setName2] = React.useState("Taro")
  const [name3, setName3] = React.useState("Saki")
  const [mode, setMode] = React.useState("2 CPU")

  React.useEffect(()=>{
    if(typeof window.orientation!=="undefined") setMobile(true)
  },[])
  return (
    <div>
      <div style={{minHeight:"85vh"}}>
        {top?<div className="App">
          <img alt="logo" src="/images/logo.png" style={{width:"100%",marginTop:"60px"}}/>
          {mobile?
          <div>
            <h3 style={{padding:"30px 20px",backgroundColor:"rgba(255,255,255,0.8)"}}>This app is for non-mobile devices. If you want to continue on mobile, please hold your phone horizontally and be aware that some things might not work properly on mobile.
              <br/>
              <button className="topbtn" style={{marginTop:"20px"}} onClick={()=>setMobile(false)}>Gotcha!</button>
            </h3>
          </div>:
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
          />}
        </div>:
        <Main 
          quit={()=>setTop(true)} 
          mode={mode}
          name1={name1}
          name2={name2}
          name3={name3}
        />}
      </div>
      {top?<div style={{width:"100%",textAlign:"center",backgroundColor:"rgba(240,240,240,0.7)",height:"50px",paddingTop:"20px",marginTop:"35px"}}>
        <h3 style={{margin:"0"}}>© Nao Mori 2020</h3>
      </div>:null}
    </div>
  );
}

export default App;
