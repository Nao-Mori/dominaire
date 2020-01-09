
import Cashsound from "../sound/cash.wav";
import Gossip from "../sound/gossip.wav";
import Pushtile from "../parts/Pushtile"



const cashsound = new Audio(Cashsound);
const gossipsound = new Audio(Gossip);


const defcolor = "197, 161, 113";
const pink = "221, 99, 99";
const blue = "87, 122, 199";
const green = "63, 151, 75";
const custom = "252, 168, 89";



function Checkthis(state, setting, switchp, tile, info){
    var thispp
    var thisite
    if (state.now === 1) {
      thispp = "price1";
      thisite = "house1";
    } else if (state.now === 2) {
      thispp = "price2";
      thisite = "house2";
    } else if (state.now === 3) {
      thispp = "price3";
      thisite = "house3";

    }
    console.log(tile);
    var thisco = state[tile][0];

    if (state.selling && state.color === thisco) {
      cashsound.play();
      var thisp = state[tile][1];
      var thisarr
      if (
        tile === "b1" ||
        tile === "c1" ||
        tile === "d1" ||
        tile === "a4" ||
        tile === "c4"
      ) {
        thisarr = [custom, thisp];
        let customed = tile + "custom";
        setting(customed, "Custom")
      } else {
        thisarr = [defcolor, thisp];
      }
      let nowyen = state[thispp];
      let nowite = state[thisite] - 1;
      nowyen = nowyen + thisp * 0.8;
      let Place = Pushtile(tile);
      let Wipe = "+$" + thisp*0.8;
      let thiscolo = "rgb("+state.color+")"
      setting(tile, thisarr)
      setting("selling", false)
      setting(thispp, nowyen)
      setting("status", "Successfully Sold")
      setting(thisite, nowite)
      setting("gp", Place)
      setting("gcolor", thiscolo)
      setting("graded", Wipe)
      setting("endable", false)
      setting("cancel", false)
      setTimeout(
        function() {
          setting("graded", "")
          setting("gcolor", "yellow")
        },
        500
      );
      if (nowyen < 0) {
        setTimeout(
          function() {
            info();
          },
          500
        );
      } else {
        setting("hastosell", false)
        if(state.now===1 || (state.mode==="1 CPU" && state.now===2)){
          setTimeout(function(){
            switchp()
          },1000)
        }
      }
    } else if (state.upgrader && state.color === thisco) {
      cashsound.play();

      let Place = Pushtile(tile);
      let Wipe = "+$" + state.upprice;
        
      let thisp = state[tile][1];
      let nowyen = state[thispp];
      thisp = thisp + Number(state.upprice);
      nowyen = nowyen - Number(state.upprice);
      let thisarr = [thisco, thisp];

      setting(tile, thisarr)
      setting("upgrader", false)
      setting(thispp, nowyen)
      setting("status", "Successfully Upgraded")
      setting("upprice", 0)
      setting("gp", Place)
      setting("gcolor", "yellow")
      setting("graded", Wipe)
      setting("endable", false)
      setting("cancel", false)

      setTimeout(
        function() {
          setting("graded", "")
        },
        500
      );
      if(state.now===1 || (state.mode==="1 CPU" && state.now===2)){
        setTimeout(function(){
          switchp()
        },1000)
      }
    } else if (
      (state.reing === true &&
      state.now === 1 &&
      thisco !== pink) || 
      (state.reing === true &&
      state.now === 2 &&
      thisco !== blue)
    ) {
      var discounted =
        state[tile][1] - state.discountprice;
      console.log(discounted);
      if (
        (state.price1 >= discounted && thisco === defcolor) ||
        (state.price1 >= discounted && thisco === custom)
      ) {
        cashsound.play();
        let thisp = state[tile][1];
        let colorin = pink
        if(state.now===2){colorin = blue}
        let thisarr = [colorin, thisp];
        let imanow = state[thispp] - discounted;

        setting(thispp, imanow)
        setting("status", "Successfully Purchaced")
        setting(tile, thisarr)
        setting("endable", false)
        setting("cancel", false)
        setting("reing", false)
        if (
            tile === "b1" ||
            tile === "c1" ||
            tile === "d1" ||
            tile === "a4" ||
            tile === "c4"
          ) {
            setting("custommenu", true)
            setting("endable", false)
            setting("indirect", tile)
            setting("Media", false)
          } else {
            if(state.now===1 ||(state.mode==="1 CPU" && state.now===2)){
              setTimeout(function(){
                switchp()
              },1000)
            }
          }
      } else if (
        state.price1 >=
        state[tile][1] * 2 - state.discountprice*2
      ) {
        cashsound.play();
        let thisp = state[tile][1];
        let oldcolor = state[tile][0]
        let ownerget
        let ownerloose
        if(oldcolor === pink){
          ownerget = state.price1 + thisp
          ownerloose = state.house1 - 1

          setting("price1", ownerget)
          setting("house1", ownerloose)
        } else if(oldcolor === blue){
          ownerloose = state.house2 - 1
          ownerget = state.price2 + thisp

          setting("price2", ownerget)
          setting("house2", ownerloose)
        } else if(oldcolor === green){
          ownerloose = state.house3 - 1
          ownerget = state.price3 + thisp

          setting("price3", ownerget)
          setting("house3", ownerloose)
        }
        let colorin = pink
        if(state.now===2){colorin = blue}
        let thisarr = [colorin, thisp];
        let imanow = state[thispp] - (thisp * 2 - state.discountprice * 2);
        
        setting(thispp, imanow)
        setting("status", "Successfully Purchaced")
        setting(tile, thisarr)
        setting("endable", false)
        setting("cancel", false)
        setting("reing", false)
        if (
            tile === "b1" ||
            tile === "c1" ||
            tile === "d1" ||
            tile === "a4" ||
            tile === "c4"
          ) {
            setting("custommenu", true)
            setting("endable", false)
            setting("indirect", tile)
          } else {
            if(state.now===1 ||(state.mode==="1 CPU" && state.now===2)){
              setTimeout(function(){
                switchp()
              },1000)
            }
          }
      } else{
        let original = state.status
        setting("status", "Not Enough Money!")
        setTimeout(function(){
          setting("status", original)
        },500)
      }
    } else if (
      (state.mediaing === true &&
      state.now === 1 &&
      thisco !== pink) ||
      (state.mediaing === true &&
      state.now === 2 &&
      thisco !== blue)
    ) {
      gossipsound.play();
      let x = state[state.nowtile][1] * 0.5
      let newx = Math.round(x/100)
      x = newx*100
      var lala =
        state[tile][1] - x
      if (lala < 1000) {
        lala = 1000;
      }
      let Place = Pushtile(tile);
      let Wipe = "-$" + x;
      let neu = [state[tile][0], lala];
      setting("status", "Successfully Spreaded")
      setting(tile, neu)
      setting("gp", Place)
      setting("gcolor", "purple")
      setting("mediaing", false)
      setting("graded", Wipe)
      setting("endable", false)
      setting("cancel", false)
      setTimeout(
        function() {
          setting("graded", "")
          setting("gcolor", "yellow")
        },
        500
      );
      if(state.now===1 || (state.mode==="1 CPU" && state.now===2)){
        setTimeout(function(){
          switchp()
        },1000)
      }
    }
}

export default Checkthis