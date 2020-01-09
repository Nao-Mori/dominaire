import Takesound from "../sound/take.wav";

const takesound = new Audio(Takesound);


const defcolor = "197, 161, 113";
const cityhall = "196, 196, 196";
const pink = "221, 99, 99";
const blue = "87, 122, 199";
const green = "63, 151, 75";
const custom = "252, 168, 89";


function Info (state,setting, cpuing){

    setting("selling", false)
    setting("endable", true)
    var thiscolor = state[state.nowtile][0];
    var thisprice = state[state.nowtile][1];

    var price
    var pri
    var haha
    var oveve
    var newmo 

    if (state.now === 1) {
      price = state.price1;
      pri = "price1";
      haha = "house1";
      oveve = "over1";
    } else if (state.now === 2) {
      price = state.price2;
      pri = "price2";
      haha = "house2";
      oveve = "over2";
    } else if (state.now === 3) {
      price = state.price3;
      pri = "price3";
      haha = "house3";
      oveve = "over3";
    }

    if ((price < 0 && state.now === 1 && state.hastosell === true) || (state.mode==="1 CPU" && price < 0 && state.now === 2 && state.hastosell === true)) {
      if (state[haha] === 0) {
        let ranmsg = "You went Bankrupt...";
        setting(oveve, true)
        setting("status", ranmsg)
        setting("hastosell", false)
      } else {
        let ranmsg = "Sell your shop to pay debt";
        setting("status", ranmsg)
        setting("hastosell", true)
        setting("chosen", false)
        setting("endable", false)
        setting("selling", true)
      }
    } else if (thiscolor === defcolor || thiscolor === custom) {
      newmo = price;
      let ranmsg
      if (price < thisprice) {
        ranmsg = "Not enough money!";
      } else {
        ranmsg = "On Sale! $" + thisprice;
        setting("buyable", true)
        setting("buyortake", "Buy")
      }
      setting({ shopprice: thisprice, status: ranmsg });
      setting("shopprice", thisprice)
      setting("status", ranmsg)
      setting("savestatus", ranmsg)
    } else if (thiscolor === cityhall) {
      let cash = state.a1[1];
      let ranmsg = "Lucky! You got cash back!";
      newmo = price + state.a1[1];
      setTimeout(
        function() {
          setting(pri, newmo)
          setting("status", ranmsg)
          setting("savestatus", ranmsg)
          setting("a1", [cityhall, 0])
          setting("trade", "+$" + cash)
        },
        150
      );
      setTimeout(
        function() {
          setting("trade", "")
        },
        350
      );
    } else if (
      (state.now === 1 && thiscolor === pink) ||
      (state.now === 2 && thiscolor === blue) ||
      (state.now === 3 && thiscolor === green)
    ) {
      if (
        (state.nowtile === "b1" && state.b1custom === "RealE") ||
        (state.nowtile === "c1" && state.c1custom === "RealE") ||
        (state.nowtile === "d1" && state.d1custom === "RealE") ||
        (state.nowtile === "a4" && state.a4custom === "RealE") ||
        (state.nowtile === "c4" && state.c4custom === "RealE")
      ) {
        if (state.now === 1 || (state.mode==="1 CPU" && state.now===2)) {
          let ranmsg =
            "Buy $" +
            thisprice * 0.25 +
            " Off, Take $" +
            thisprice * 0.5 +
            " Off";
          setting("status", ranmsg)
          setting("savestatus", ranmsg)
          setting("discountprice", thisprice*0.25)
          setting("available", true)
          newmo = price;
        }
      } else if (
        (state.nowtile === "b1" && state.b1custom === "Media") ||
        (state.nowtile === "c1" && state.c1custom === "Media") ||
        (state.nowtile === "d1" && state.d1custom === "Media") ||
        (state.nowtile === "c4" && state.c4custom === "Media") ||
        (state.nowtile === "a4" && state.a4custom === "Media")
      ) {
        newmo = price;
        if (state.now === 1|| (state.mode==="1 CPU" && state.now===2)) {
          let ranmsg = "Wanna spread a bad rumor?";
          setting("gossipable", true)
          setting("status", ranmsg)
          setting("savestatus", ranmsg)
        } else {
          let ranmsg = "Wanna spread a bad rumor?";
          setting("status", ranmsg)
        }
      } else {
        takesound.play();
        let ranmsg = "Bonus! +$" + thisprice / 4;
        newmo = state[pri] + thisprice / 4;

        setting(pri, newmo)
        setting("status", ranmsg)
        setting("savestatus", ranmsg)
        setting("trade", "+$" + thisprice/4)
        setTimeout(
          function() {
            setting("trade", "")
          },
          500
        );
      }
    } else {
      takesound.play();
      let ranmsg = "Ouch! $" + thisprice * 2 + " to take over.";
      if (
        state.nowtile === "b1" ||
        state.nowtile === "c1" ||
        state.nowtile === "d1" ||
        state.nowtile === "c4" ||
        state.nowtile === "a4"
      ) {
        setting("status", ranmsg)
        setting("savestatus", ranmsg)
        var nowcustom = state.nowtile + "custom";
        if (state[nowcustom] !== "Gate") {
          newmo = price - Math.round(thisprice * 0.35);
          let mes1 = "-$" + Math.round(thisprice * 0.35);
          setting(pri, newmo)
          setting("trade", mes1)
          if (thiscolor === pink) {
            let newmo1 = state.price1 + Math.round(thisprice * 0.35);
            setting("price1", newmo1)
          } else if (thiscolor === blue) {
            let newmo1 = state.price2 + Math.round(thisprice * 0.35);
            setting("price2", newmo1)
          } else if (thiscolor === green) {
            let newmo1 = state.price3 + Math.round(thisprice * 0.35);
            setting("price3", newmo1)
          }
        } else {
          newmo = price;
        }
      } else {
        newmo = price - thisprice * 0.4;
        let mes1 = "-$" + thisprice * 0.4;
        setting(pri, newmo)
        setting("status", ranmsg)
        setting("savestatus", ranmsg)
        setting("trade", mes1)
        if (thiscolor === pink) {
          let newmo1 = state.price1 + thisprice * 0.4;
          setting("price1", newmo1)
        } else if (thiscolor === blue) {
          let newmo1 = state.price2 + thisprice * 0.4;
          setting("price2", newmo1)
        } else if (thiscolor === green) {
          let newmo1 = state.price3 + thisprice * 0.4;
          setting("price3", newmo1)
        }
      }
      setTimeout(
        function() {
          setting("trade", "")
        },
        500
      );
      if (newmo >= thisprice * 2) {
        setting("buyable", true)
        setting("buyortake", "Take Over")
      }
    }
    if ((newmo < 0 && state.now === 1 && state.hastosell === false) || (state.mode==="1 CPU" && newmo < 0 && state.now === 2 && state.hastosell === false)) {
      if (state[haha] === 0) {
        let ranmsg = "You went Bankrupt...";
        setting(oveve, true)
        setting("status", ranmsg)
        setting("hastosell", false)
      } else {
        let ranmsg = "Sell your shop to pay debt";
        setting("status", ranmsg)
        setting("hastosell", true)
        setting("chosen", false)
        setting("endable", false)
        setting("selling", true)
      }
    }
    if (state[haha] > 0 && newmo > -1) {
      setting("sellable", true)
    }
    if (newmo >= 1000 && state[haha] > 0) {
      setting("upgradable", true)
    }
    setTimeout(function(){
      if (state.cpuplay === true) {
        cpuing();
      }
    },300)
}

export default Info