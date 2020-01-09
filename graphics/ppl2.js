import React from 'react';


export default (props) => {
    const style = {
        top: `${props.ppl[0]}%`,
        left: `${props.ppl[1]}%`,
        backgroundColor: `rgb(93, 169, 204)`,
        marginTop: "4%",
        marginLeft: "2.5%"
      }
  return (
    <div className="dotppl" style={style}>
    </div>
  )
}