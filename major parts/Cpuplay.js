import Ranpick from "../parts/Ranpick";
import Mediapick from "../parts/Mediapick";
import Gossip from "../sound/gossip.wav";
import Cashsound from "../sound/cash.wav";
import Pushtile from "../parts/Pushtile";

const gossipsound = new Audio(Gossip);
const cashsound = new Audio(Cashsound);

const defcolor = "197, 161, 113";
const custom = "252, 168, 89";

function Cpuplay(state,setting,switchp, cpuing, buy, nextcpuing){
    var priri
    var itete
    var ove
    if (state.now === 1) {
        priri = "price1";
        itete = "house1";
        ove = "over1";
      } else if (state.now === 2) {
        priri = "price2";
        itete = "house2";
        ove = "over2";
      } else if (state.now === 3) {
        priri = "price3";
        itete = "house3";
        ove = "over3";
      }
      if (state[priri] < 0) {
        if (state[itete] < 1) {
          setting("status", "You went Bankrupt!")
          setting(ove, true)

          setTimeout(
            function() {
              setting("cpuplay", false)
              setting("chosen", false)
              switchp();
            },
            1000
          );
        } else {
          setting("status", "Sell your shop to pay debt")
          setTimeout(
            function() {
              cashsound.play();
              let Picked1 = Ranpick(state);
              let newm = state[priri] + state[Picked1][1] * 0.8;
              let newarr
              let customed
              if (Picked1 === "b1" || Picked1 === "c1" || Picked1 === "d1" || Picked1 === "a4" || Picked1 === "c4") {
                newarr = [custom, state[Picked1][1]];
                customed = Picked1 + "custom";
                setting(customed, "Custom")
              } else {
                newarr = [defcolor, state[Picked1][1]];
              }
              var minusitem = state[itete] - 1;
              let soldone = Pushtile(Picked1)
              let thiscolo = "rgb("+state.color+")"
              let minusmoney = "+$" + state[Picked1][1]*0.8
              setting(Picked1, newarr)
              setting(priri, newm)
              setting(itete, minusitem)
              setting("status", "Successfully Sold")
              setting("chosen", true)
              setting("gcolor", thiscolo)
              setting("gp", soldone)
              setting("graded", minusmoney)
              
              setTimeout(
                function() {
                  setting("gcolor", "yellow")
                  setting("graded", "")
                  cpuing();
                },
                1500
              );
            },
            800
          );
        }
      } else if (!state.chosen) {
        setTimeout(
          function() {
            if (
              state[priri] > state[state.nowtile][1] + 300 &&
              state[state.nowtile][0] === defcolor
            ) {
              buy();
              setTimeout(
                function() {
                  setting("cpuplay", false)
                  setting("chosen", false)
                  switchp();
                },
                700
              );
            } else if (
              (state[priri] > state[state.nowtile][1] * 2 + 750 &&
                state[state.nowtile][0] !== state.color &&
                state[itete] > 2 &&
                state.overcount > 10 ) ||
              (state[priri] > state[state.nowtile][1] * 7 &&
                state[state.nowtile][0] !== state.color &&
                state.overcount > 10)
            ) {
              buy();
              setTimeout(
                function() {

                  setting("cpuplay", false)
                  setting("chosen", false)
                  switchp();
                },
                700
              );
            } else if (
              state[priri] > state[state.nowtile][1] + 300 &&
              state[state.nowtile][0] === custom
            ) {
              buy();
  
              setTimeout(
                function() {
                  setting("cpuplay", false)
                  setting("chosen", false)
                  setting("status", "Successfully Purchaced")
                  switchp();
                },
                1000
              );
            } else if (
              (state.nowtile === "b1" &&
                state.b1[0] === state.color &&
                state.b1custom === "Media") ||
              (state.nowtile === "c1" &&
                state.c1[0] === state.color &&
                state.c1custom === "Media") ||
              (state.nowtile === "d1" &&
                state.d1[0] === state.color &&
                state.d1custom === "Media") ||
                (state.nowtile === "a4" &&
                state.a4[0] === state.color &&
                state.a4custom === "Media") ||
                (state.nowtile === "c4" &&
                state.c4[0] === state.color &&
                state.c4custom === "Media")
            ) {
              let choose = Mediapick(state);
              let pushed = Pushtile(choose);
  
              let x = state[state.nowtile][1] * 0.5;
              let newx = Math.round(x/100)
              x = newx*100
              let y = state[choose][1] - x;
              if (y < 1000) {
                y = 1000;
              }
              let a = state[choose].slice();
              a[1] = y;
  
              setTimeout(
                function() {
                  gossipsound.play();
                  setting("chosen", a)
                  setting("status", "Successfully Spreaded")
                  setting("gcolor", "purple")
                  setting("gp", pushed)
                  setting("graded", "-$"+x)
                },
                100
              );
              setTimeout(
                function() {
                  setting("cpuplay", false)
                  setting("chosen", false)
                  setting("gcolor", "yellow")
                  setting("graded", "")
                  switchp();
                },
                1000
              );
            } else if (state[priri] > 1900 && state[itete] > 0 && state.nowtile!=="d2" && state.nowtile!=="d3" && state.nowtile!=="d4") {
              if (state[priri] > 6300) {
                setting("upprice", 5000)
              } else if (state[priri] > 5200) {
                setting("upprice", 4000)
              } else if (state[priri] > 4100) {
                setting("upprice", 3000)
              } else if (state[priri] > 3000) {
                setting("upprice", 2000)
              } else if (state[priri] > 1900) {
                setting("upprice", 1000)
              }

              setting("status", "Upgrading...")
              nextcpuing()
            } else {
              setTimeout(
                function() {
                  setting("cpuplay", false)
                  setting("chosen", false)
                  switchp();
                },
                500
              );
            }
          },
          500
        );
      } else {
        setTimeout(
          function() {

            setting("cpuplay", false)

            switchp();
          },
          500
        );
      }
}

export default Cpuplay
