import Cashsound from "../sound/cash.wav";

const cashsound = new Audio(Cashsound);


const defcolor = "197, 161, 113";
const cityhall = "196, 196, 196";
const pink = "221, 99, 99";
const blue = "87, 122, 199";
const green = "63, 151, 75";
const custom = "252, 168, 89";


function Buy(state,setting,switchp){
    var notcustom = true
    var bought = true

    setting("endable", false)
    var ima = state[state.nowtile][0];
    var imakane = state[state.nowtile][1];
    var have
    var pricin
    var housin
    if (state.now === 1) {
      have = state.price1;
      pricin = "price1";
      housin = "house1";
    } else if (state.now === 2) {
      have = state.price2;
      pricin = "price2";
      housin = "house2";
    } else if (state.now === 3) {
      have = state.price3;
      pricin = "price3";
      housin = "house3";
    }
    if (state.hastosell) {
      console.log("error caught")
    } else if (
      ima === state.color ||
      state.shopprice > state[pricin] ||
      ima === cityhall
    ) {bought = false
    } else if (ima === defcolor) {
      cashsound.play();
      let adding = state[housin] + 1;
      let newm = state[pricin] - state.shopprice;
      let nt = [state.color, imakane];
      setting(state.nowtile, nt)
      setting(housin, adding)
      setting(pricin, newm)
      setting("chosen", true)
      setting("status", "Successfully Purchaced")
    } else if ( (ima === custom && state.now === 1) || (ima===custom && state.mode==="1 CPU" && state.now===2)) {
      cashsound.play();
      let adding = state[housin] + 1;
      let newm = state[pricin] - state.shopprice;
      let nt = [state.color, imakane];

      setting(state.nowtile, nt)
      setting(housin, adding)
      setting(pricin, newm)
      setting("chosen", true)
      setting("status", "You wanna make your shop...")
      setting("custommenu", true)
      notcustom = false
    } else if (ima === custom) {
      cashsound.play();
      console.log(state.nowtile);
      let adding = state[housin] + 1;
      let newm = state[pricin] - state.shopprice;
      let nt = [state.color, imakane];
      let chosed = state.nowtile + "custom";
      let ran = Math.floor(Math.random() * 2);
      let type;
      if (ran === 0) {
        type = "Gate";
      } else {
        type = "Media";
      }
      setting(state.nowtile, nt)
      setting(housin, adding)
      setting(pricin, newm)
      setting("chosen", true)
      setting("status", "Successfully Purchaced")
      setting(chosed, type)
    } else {
      console.log("take over challenge")
      let imanokane = imakane * 2;
      if (imanokane <= have) {
        cashsound.play();
        let adding = state[housin] + 1;
        let newm = have - imanokane;
        let nt = [state.color, imakane];
        setting(state.nowtile, nt)
        setting(housin, adding)
        setting(pricin, newm)
        setting("chosen", true)
        setting("status", "Successfully Purchaced")

        if (
          state.nowtile === "b1" ||
          state.nowtile === "c1" ||
          state.nowtile === "d1" ||
          state.nowtile === "a4" ||
          state.nowtile === "c4"
        ) {
          notcustom=false
          if (state.now === 1|| (state.mode==="1 CPU" && state.now===2)) {
            setting("custommenu", true)
          } else {
            let neu = state.nowtile + "custom";
            let ran = Math.floor(Math.random() * 2);
            let type;
            if (ran === 0) {
              type = "Gate";
            } else {
              type = "Media";
            }
            setting(neu, type)
          }
        }
        let added
        let added1
        if (ima === pink) {
          added = state.price1 + imakane;
          added1 = state.house1 - 1;
          setting("price1", added)
          setting("house1", added1)
        } else if (ima === blue) {
          added = state.price2 + imakane;
          added1 = state.house2 - 1;
          setting("price2", added)
          setting("house2", added1)
        } else if (ima === green) {
          added = state.price3 + imakane;
          added1 = state.house3 - 1;
          setting("price3", added)
          setting("house3", added1)
        }
      }
    }
    if((state.now===1 && notcustom && bought) || (state.now===2 && state.mode==="1 CPU" && notcustom && bought)){
      setTimeout(function(){
        switchp()
      },1000)
    }
}
export default Buy