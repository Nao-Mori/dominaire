function Income(props, color) {
    var cpos = color
    var money = 0
    for(let i=1;i<8;i++){
        let tile = "a"+i
        if (cpos === props[tile][0]){
            money = money + props[tile][1]    
        }
    }
    for(let i=1;i<5;i++){
        let tile = "b"+i
        if (cpos === props[tile][0]){
            money = money + props[tile][1]    
        }
    }
    for(let i=1;i<8;i++){
        let tile = "c"+i
        if (cpos === props[tile][0]){
            money = money + props[tile][1]    
        }
    }
    for(let i=1;i<5;i++){
        let tile = "d"+i
        if (cpos === props[tile][0]){
            money = money + props[tile][1]    
        }
    }

    return money;
}
  
  export default Income;