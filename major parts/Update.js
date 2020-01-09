import Income from "../parts/Income"
import Gate from "./Gate"
import Tax from "./Tax"
import Takesound from "../sound/take.wav";

const takesound = new Audio(Takesound);

function Update (state,setting,pos,price, color){
    setting("paid", false)
    

    if (pos[0] === 10 && pos[1] === 40) {
        if (state.a4custom === "Gate" && state.a4[0] !== color) {
            takesound.play();
            Gate(state, setting, "a4", price)
        }
    } else if (pos[0] === 10 && pos[1] === 80) {
        if (state.b1custom === "Gate" && state.b1[0] !== color) {
            takesound.play();
            Gate(state, setting, "b1", price)
        }
      } else if (pos[0] === 90 && pos[1] === 80) {
        if (state.c1custom === "Gate") {
          if (state.c1[0] !== color) {
            takesound.play();
            Gate(state, setting, "c1", price)
          }
        }
      } else if (pos[0] === 90 && pos[1] === 50) {
        if (state.c4custom === "Gate") {
          if (state.c4[0] !== color) {
            takesound.play();
            Gate(state, setting, "c4", price)
          }
        }
      } else if (pos[0] === 90 && pos[1] === 10) {
        if (state.d1custom === "Gate" && state.d1[0] !== color) {

            takesound.play();
            Gate(state, setting, "d1", price)
          
        }
      } else if (pos[0] === 10 && pos[1] === 10) {
        let all = Income(state);
        Tax(state,setting,price, all)
      }
}

export default Update