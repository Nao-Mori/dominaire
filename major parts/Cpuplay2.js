import Takesound from "../sound/take.wav";
import Pushtile from "../parts/Pushtile";
import Ranpick from "../parts/Ranpick";


const takesound = new Audio(Takesound);

function Cpuplay2(state, setting, switchp){
    var priri
    if (state.now === 1) {
        priri = "price1";
      } else if (state.now === 2) {
        priri = "price2";
      } else if (state.now === 3) {
        priri = "price3";
      }

    setTimeout(
      function() {
        takesound.play();
        var Picked = Ranpick(state);
        var Place = Pushtile(Picked);
        var Wipe = "+$" + state.upprice;
  
        var orprice = state[Picked][1];
        orprice = orprice + state.upprice;
        var Parr = [state.color, orprice];
        var Minus = state[priri] - state.upprice;
  
        setting(Picked, Parr)
        setting("upprice", 0)
        setting(priri, Minus)
        setting("status", "Successfully Upgraded")
        setting("gp", Place)
        setting("graded", Wipe)
        setting("gcolor", "yellow")
  
        setTimeout(
          function() {
            setting("cpuplay", false)
            setting("chosen", false)
            setting("graded", "")
            switchp();
          },
          1500
        );
      },
      700
    );
  }
  
  export default Cpuplay2