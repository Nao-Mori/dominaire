function Ranpick(props) {
    var biggest = 0
    var biggestshop = ""
    var cpos = ""
    var cpos2 = ""
    switch (props.now) {
      case 1:
        if(props.total2===props.total3){
            cpos = "87, 122, 199"
            cpos2 = "63, 151, 75"
        } else if(props.total2>props.total3){
            cpos = "87, 122, 199"
        } else {
            cpos2 = "63, 151, 75"
        }
        break;
      case 2:
        if(props.total1===props.total3){
            cpos = "221, 99, 99"
            cpos2 = "63, 151, 75"
        } else if(props.total1>props.total3){
            cpos = "221, 99, 99"
        } else {
            cpos2 = "63, 151, 75"
        }
        break;
      case 3:
        if(props.total1===props.total2){
            cpos = "221, 99, 99"
            cpos2 = "87, 122, 199"
        } else if(props.total1>props.total2){
            cpos = "221, 99, 99"
        } else {
            cpos2 = "87, 122, 199"
        }
        break;
        
      default:
        break;
    }
    for(let i=1;i<8;i++){
        let tile = "a"+i
        if (cpos === props[tile][0] || cpos2 === props[tile][0]){
            if(biggest<props[tile][1]){
                biggest = props[tile][1]
                biggestshop = tile
            }    
        }
    }
    for(let i=1;i<5;i++){
        let tile = "b"+i
        if (cpos === props[tile][0] || cpos2 === props[tile][0]){
            if(biggest<props[tile][1]){
                biggest = props[tile][1]
                biggestshop = tile
            }    
        }
    }
    for(let i=1;i<8;i++){
        let tile = "c"+i
        if (cpos === props[tile][0] || cpos2 === props[tile][0]){
            if(biggest<props[tile][1]){
                biggest = props[tile][1]
                biggestshop = tile
            }    
        }
    }
    for(let i=1;i<5;i++){
        let tile = "d"+i
        if (cpos === props[tile][0] || cpos2 === props[tile][0]){
            if(biggest<props[tile][1]){
                biggest = props[tile][1]
                biggestshop = tile
            }    
        }
    }
    return biggestshop;
}
  
  export default Ranpick;