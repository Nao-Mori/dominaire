function Ranpick(props) {
    var arr =[]
    var cpos
    switch (props.now) {
      case 1:
        cpos = "221, 99, 99"
        break;
      case 2:
        cpos = "87, 122, 199"
        break;
      case 3:
        cpos = "63, 151, 75"
        break;
      default:
        break;
    }
    for(let i=1;i<8;i++){
        let tile = "a"+i
        if (cpos === props[tile][0]){
            arr.push(tile)    
        }
    }
    for(let i=1;i<5;i++){
        let tile = "b"+i
        if (cpos === props[tile][0]){
            arr.push(tile)   
        }
    }
    for(let i=1;i<8;i++){
        let tile = "c"+i
        if (cpos === props[tile][0]){
            arr.push(tile)   
        }
    }
    for(let i=1;i<5;i++){
        let tile = "d"+i
        if (cpos === props[tile][0]){
            arr.push(tile)  
        }
    }
    var ran = Math.floor(Math.random() * arr.length);
    var picked = arr[ran]
    return picked;
}
  
  export default Ranpick;
  