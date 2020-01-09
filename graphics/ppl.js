import React from 'react';


export default (props) => {
    const style = {
        top: `${props.ppl[0]}%`,
        left: `${props.ppl[1]}%`,
      }
  return (
    <div className="dotppl" style={style}>
    </div>
  )
}