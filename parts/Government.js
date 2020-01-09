import Income from "./Income2"

function Ranpick(props, price) {
    var arr=[]
    var cpos = "def"
    let money1 = Income(props, 1)
    let money2 = Income(props, 2)
    let money3 = Income(props, 3)
    var picked
    if(money1>money2 && money1> money3){
        cpos = "221, 99, 99"
    }
    if(money2>money1 && money2> money3){
        cpos = "87, 122, 199"
    }
    if(money3>money1 && money3>money2){
        cpos = "63, 151, 75"
    }
    if(cpos!=="def"){
        for(let i=1;i<8;i++){
            let tile = "a"+i
            if (cpos === props[tile][0] ){
                if(props[tile][1]>price+2000){
                    arr.push(tile)
                }
            }
        }
        for(let i=1;i<5;i++){
            let tile = "b"+i
            if (cpos === props[tile][0] ){
                if(props[tile][1]>price+2000){
                    arr.push(tile)
                }
            }
        }
        for(let i=1;i<8;i++){
            let tile = "c"+i
            if (cpos === props[tile][0] ){
                if(props[tile][1]>price+2000){
                    arr.push(tile)
                }  
            }
        }
        for(let i=1;i<5;i++){
            let tile = "d"+i
            if (cpos === props[tile][0] ){
                if(props[tile][1]>price+2000){
                    arr.push(tile)
                } 
            }
        }
        
        if(arr.length===0){
            picked = "no"
        } else{
            let ran = Math.floor(Math.random() * arr.length);
            picked = arr[ran]
        }
    } else{
        picked="no"
    }
    
    
    return picked;
}
  
  export default Ranpick;