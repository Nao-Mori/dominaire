import React from 'react';
import './App.css';
import Top from "./Top";


function App() {
  const [mobile, setMobile]=React.useState(true)
  React.useEffect(()=>{
    if(typeof window.orientation==="undefined") setMobile(false)
  },[mobile])
  return (
    <div className="App">
      {mobile?
      <div>
        <img alt="log" src="/logo.png" style={{height:"auto",width:"100%",marginTop:"90px",maxWidth:"350px"}}/>
        <h3 style={{padding:"30px 20px",backgroundColor:"rgba(255,255,255,0.8)"}}>This app is for non-mobile devices. If you want to continue on mobile, please hold your phone horizontally and be aware that some things might not work properly on mobile.
          <button className="topbtn" style={{marginTop:"20px"}} onClick={()=>setMobile(false)}>ALRIGHT</button>
        </h3>
      </div>:
      <Top />}
    </div>
  );
}

export default App;
