//import Income2 from "../parts/Income2"
import Takesound from "../sound/take.wav";

const takesound = new Audio(Takesound);

function Minigameover(state,setting,one,two,three){
    setting("minigame", false)

    setTimeout(
      function() {
        var msg22;
        var mon22;
        if (one === "Dragon"|| one==="Wizzard") {
          takesound.play();
          msg22 = state.name1 + " gets $" + state.prize;
          mon22 = state.price1 + state.prize;
        } else if (one === "Mage" || one==="Golem") {
          takesound.play();
          msg22 = state.name1 + " gets $" + state.prize * 1.5;
          mon22 = state.price1 + state.prize * 1.5;
        } else if (one === "Ghost") {
          takesound.play();
          msg22 = state.name1 + " gets $" + state.prize * 2;
          mon22 = state.price1 + state.prize * 2;
        } else if (one === "Zombie") {
          takesound.play();
          msg22 = state.name1 + " gets $" + state.prize * 4;
          mon22 = state.price1 + state.prize * 4;
        } else if (one === "Gurl") {
          takesound.play();
          msg22 = state.name1 + " gets $" + state.prize * 3;
          mon22 = state.price1 + state.prize * 3;
        } else {
          // let all = Income2(state, 1);
          // all = all / 10;
          // msg22 = state.name1 + " pays $" + all + " for losing";
          // mon22 = state.price1 - all;
          msg22= state.name1 + " earns no money."
          mon22 = state.price1
        }
        setting("status", msg22)
        setting("price1", mon22)
      },
      500
    );
    setTimeout(
      function() {
        var msg22;
        var mon22;
        if (two === "Dragon"|| two==="Wizzard") {
          takesound.play();
          msg22 = state.name2 + " gets $" + state.prize;
          mon22 = state.price2 + state.prize;
        } else if (two === "Mage" || two==="Golem") {
          takesound.play();
          msg22 = state.name2 + " gets $" + state.prize * 1.5;
          mon22 = state.price2 + state.prize * 1.5;
        } else if (two === "Ghost") {
          takesound.play();
          msg22 = state.name2 + " gets $" + state.prize * 2;
          mon22 = state.price2 + state.prize * 2;
        } else if (two === "Zombie") {
          takesound.play();
          msg22 = state.name2 + " gets $" + state.prize * 4;
          mon22 = state.price2 + state.prize * 4;
        } else if (two === "Gurl") {
          takesound.play();
          msg22 = state.name2 + " gets $" + state.prize * 3;
          mon22 = state.price2 + state.prize * 3;
        } else {
          msg22= state.name2 + " earns no money"
          mon22 = state.price2
        }
        setting("status", msg22)
        setting("price2", mon22)
      },
      2000
    );
    setTimeout(
      function() {
        var msg22;
        var mon22;
        if (three === "Dragon" || three==="Wizzard") {
          takesound.play();
          msg22 = state.name3 + " gets $" + state.prize;
          mon22 = state.price3 + state.prize;
        } else if (three === "Mage" || three==="Golem") {
          takesound.play();
          msg22 = state.name3 + " gets $" + state.prize * 1.5;
          mon22 = state.price3 + state.prize * 1.5;
        } else if (three === "Ghost") {
          takesound.play();
          msg22 = state.name3 + " gets $" + state.prize * 2;
          mon22 = state.price3 + state.prize * 2;
        } else if (three === "Zombie") {
          takesound.play();
          msg22 = state.name3 + " gets $" + state.prize * 4;
          mon22 = state.price3 + state.prize * 4;
        } else if (three === "Gurl") {
          takesound.play();
          msg22 = state.name3 + " gets $" + state.prize * 3;
          mon22 = state.price3 + state.prize * 3;
        } else {
          msg22= state.name3 + " ain't got not'n!"
          mon22 = state.price3
        }
        //let newprize = state.prize * 2;

        setting("status", msg22)
        setting("price3", mon22)
        //setting("prize", newprize)
      },
      3500
    );
}

export default Minigameover