import React from "react";
import Map from "../graphics/Map";
import Header from "./Headbar";
import Action from "../major parts/Action";
import Ranking from "../major parts/Ranking"

import Person1 from "../graphics/ppl";
import Person2 from "../graphics/ppl2";
import Person3 from "../graphics/ppl3";

import Spinsound from "./sound/spin.wav";
import Tiles from "../parts/Tiles";
import Income from "../parts/Income";
import Finalincome from "../parts/Finalincome";
import Takesound from "./sound/take.wav";
import Pushtile from "../parts/Pushtile";
import Minigame from "../minigames/Minigame";
import Minigame2 from "../minigames/Minigame2";
import BGMend from "./sound/bgm.wav";
import BGM from "./sound/bgm2.mp3";
import BGM2 from "./sound/chaos.mp3";
import Gossip from "./sound/gossip.wav";
import RollDice from "../parts/RollDice";
import Info from "../major parts/Info";
import Buy from "../major parts/Buy";
import Clickthis from "../major parts/Clickedthis";
//import SwitchP from "./major parts/SwitchP"


import Government from "../parts/Government";
import Cpuplay from "../major parts/Cpuplay";
import Cpuplay2 from "../major parts/Cpuplay2"
import Update from "../major parts/Update";
import Move from "../major parts/Move";
import Minigameover from "../major parts/Minigameover";

const spinsound = new Audio(Spinsound);
const takesound = new Audio(Takesound);
const gossipsound = new Audio(Gossip);
const bgm = new Audio(BGM);
const bgm2 = new Audio(BGM2);
const bgmend = new Audio(BGMend);

const defcolor = "197, 161, 113";
const cityhall = "196, 196, 196";
const pink = "221, 99, 99";
const blue = "87, 122, 199";
const green = "63, 151, 75";
const custom = "252, 168, 89";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      howmany: 0,
      rolling: false,
      roll: 0,
      dicing: false,
      unmoved: true,
      gogo: false,
      name1: "",
      price1: 10000,
      total1: 10000,
      house1: 0,
      starting1: false,
      name2: "",
      price2: 10000,
      total2: 10000,
      house2: 0,
      name3: "",
      price3: 10000,
      total3: 10000,
      house3: 0,
      color: defcolor,
      now: 0,
      nowppl: "ppl",
      ppl: [10, 10],
      ppl2: [10, 10],
      ppl3: [10, 10],
      direction: "right",
      direction2: "right",
      direction3: "right",
      nowtile: "a1",
      over: false,
      chosen: false,
      status: "Welcome to Dominaire!",
      savestatus: "",
      shopprice: 0,
      selling: false,
      upgrading: false,
      upgrader: false,
      upprice: 0,
      cpuplay: false,
      hastosell: false,
      over1: false,
      over2: false,
      over3: false,
      a1: [cityhall, 0],
      a2: [defcolor, 1500],
      a3: [defcolor, 1900],
      a4: [custom, 2000],
      a4custom: "Custom",
      a5: [defcolor, 2100],
      a6: [defcolor, 1700],
      a7: [defcolor, 2200],
      b1: [custom, 2000],
      b1custom: "Custom",
      b2: [defcolor, 2100],
      b3: [defcolor, 2700],
      b4: [defcolor, 2100],
      c1: [custom, 2000],
      c1custom: "Custom",
      c2: [defcolor, 2300],
      c3: [defcolor, 1700],
      c4: [custom, 2000],
      c4custom: "Custom",
      c5: [defcolor, 2200],
      c6: [defcolor, 3200],
      c7: [defcolor, 1900],
      d1: [custom, 2000],
      d1custom: "Custom",
      d2: [defcolor, 3600],
      d3: [defcolor, 3800],
      d4: [defcolor, 3300],
      winmsg: "",
      overcount: 85,
      final1: 0,
      final2: 0,
      final3: 0,
      gp: [10, 10],
      graded: "",
      upgradable: false,
      sellable: false,
      buyable: false,
      buyortake: "Buy",
      minigame: false,
      prize: 2000,
      custommenu: false,
      endable: true,
      paid: false,
      trade: "",
      RealE: false,
      Media: true,
      Gate: false,
      reing: false,
      discountprice: 0,
      indirect: "",
      available: false,
      mediaing: false,
      gossipable: false,
      gcolor: "yellow",
      rpg: false,
      mode: "",
      cancel: false,
      bgm: "ON"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ppl !== this.state.ppl && this.state.ppl) {
      Update(this.state, this.settingstate, this.state.ppl, "price1", pink);
    }
    if (prevState.ppl2 !== this.state.ppl2 && this.state.ppl2) {
      Update(this.state, this.settingstate, this.state.ppl2, "price2", blue);
    }
    if (prevState.ppl3 !== this.state.ppl3 && this.state.ppl3) {
      Update(this.state, this.settingstate, this.state.ppl3, "price3", green);
    }
  }

  componentDidMount() {
    bgm.loop = true;
    bgm.play();
    let ran = Math.floor(Math.random() * 3);
    ran = ran + 1;
    var color11;
    var ppldesu;
    if (ran === 1) {
      color11 = pink;
      ppldesu = "ppl";
    } else if (ran === 2) {
      color11 = blue;
      ppldesu = "ppl2";
    } else if (ran === 3) {
      color11 = green;
      ppldesu = "ppl3";
    }
    this.setState({
      name1: this.props.state.name1,
      name2: this.props.state.name2,
      name3: this.props.state.name3,
      now: ran,
      color: color11,
      nowppl: ppldesu,
      mode: this.props.mode
    });
    if (this.props.mode === "2 CPU") {
      if (ran === 2 || ran === 3) {
        this.setState({ cpuplay: true });
        setTimeout(
          function() {
            this.dice();
          }.bind(this),
          1200
        );
      } else {
        this.setState({ dicing: true });
      }
    } else if (this.props.mode === "1 CPU") {
      if (ran === 3) {
        this.setState({ cpuplay: true });
        setTimeout(
          function() {
            this.dice();
          }.bind(this),
          1200
        );
      } else {
        this.setState({ dicing: true });
      }
    } else {
      this.setState({ dicing: true });
    }
  }

  Wintxt = () => {
    var p1 = this.state.price1 + Finalincome(this.state, pink);
    var p2 = this.state.price2 + Finalincome(this.state, blue);
    var p3 = this.state.price3 + Finalincome(this.state, green);
    this.setState({ final1: p1, final2: p2, final3: p3 });
    if (p1 > p2 && p1 > p3) {
      let winn = this.state.name1 + ", Win!";
      this.setState({ winmsg: winn });
    } else if (p2 > p3 && p2 > p1) {
      let winn = this.state.name2 + ", Win!";
      this.setState({ winmsg: winn });
    } else if (p3 > p1 && p3 > p2) {
      let winn = this.state.name3 + ", Win!";
      this.setState({ winmsg: winn });
    }
  };

  incoming = () => {
    setTimeout(
      function() {
        var income = Income(this.state);
        var additional
        if(this.state.now===1){additional = this.state.house1*50 + 500}
        if(this.state.now===2){additional = this.state.house2*50 + 500}
        if(this.state.now===3){additional = this.state.house3*50 + 500}
        income = Math.round(income * 0.04 + additional);
        var prie;
        var pricee;
        if (this.state.now === 1) {
          pricee = this.state.price1 + income;
          prie = "price1";
        } else if (this.state.now === 2) {
          pricee = this.state.price2 + income;
          prie = "price2";
        } else if (this.state.now === 3) {
          pricee = this.state.price3 + income;
          prie = "price3";
        }
        var msg = "Daily Income! $" + income;
        this.setState({ [prie]: pricee, status: msg, trade: "+$" + income });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ trade: "" });
      }.bind(this),
      500
    );
  };

  info = () => {
    Info(this.state, this.settingstate, this.cpuing);
  };

  gossip = () => {
    let ranmsg = "Choose a shop you gossip";
    this.setState({
      mediaing: true,
      status: ranmsg,
      chosen: true,
      endable: false,
      cancel: true
    });
  };

  discount = () => {
    let ranmsg = "Choose a shop to buy/takeover";
    this.setState({
      reing: true,
      status: ranmsg,
      chosen: true,
      endable: false,
      cancel: true
    });
  };

  buy = () => {
    Buy(this.state, this.settingstate, this.switchp);
  };

  upgrade = () => {
    console.log(this.state.house1);
    var pricen
    var housen
    if (this.state.now === 1) {
      pricen = this.state.price1;
      housen = this.state.house1;
    } else if (this.state.now === 2) {
      pricen = this.state.price2;
      housen = this.state.house2;
    } else if (this.state.now === 3) {
      pricen = this.state.price3;
      housen = this.state.house3;
    }
    if (housen > 0 && pricen >= 1000 && !this.state.hastosell) {
      this.setState({
        chosen: true,
        upgrading: true,
        status: "Choose the amount",
        endable: false,
        cancel: true
      });
    }
  };

  customer = event => {
    if (this.state.indirect !== "") {
      let real = this.state.indirect + "custom";
      this.setState({
        [real]: event.target.id,
        custommenu: false,
        status: "Let's go!!",
        RealE: false,
        Media: true,
        Gate: false
      });
      if (
        this.state.now === 1 ||
        (this.state.mode === "1 CPU" && this.state.now === 2)
      ) {
        setTimeout(
          function() {
            this.switchp();
          }.bind(this),
          1000
        );
      }
    } else {
      let real = this.state.nowtile + "custom";
      this.setState({
        [real]: event.target.id,
        custommenu: false,
        status: "Let's go!!",
        indirect: "",
        RealE: false,
        Media: false,
        Gate: false
      });
      if (
        this.state.now === 1 ||
        (this.state.mode === "1 CPU" && this.state.now === 2)
      ) {
        setTimeout(
          function() {
            this.switchp();
          }.bind(this),
          1000
        );
      }
    }
  };

  cancel=()=>{
    this.setState({cancel: false, chosen: false, upgrading: false, endable: true, selling: false, upgrader: false, mediaing: false, reing: false, status: this.state.savestatus})
  }

  upgrader = event => {
    var pricen1
    if (this.state.now === 1) {
       pricen1 = this.state.price1;
    } else if (this.state.now === 2) {
       pricen1 = this.state.price2;
    } else if (this.state.now === 3) {
       pricen1 = this.state.price3;
    }
    if (event.target.id <= pricen1) {
      this.setState({
        upprice: [event.target.id],
        upgrader: true,
        upgrading: false,
        status: "Choose a shop to upgrade"
      });
    }
  };

  sell = () => {
    var hehe;
    if (this.state.now === 1) {
      hehe = "house1";
    } else if (this.state.now === 2) {
      hehe = "house2";
    } else if (this.state.now === 3) {
      hehe = "house3";
    }
    if (this.state[hehe] === 0) {
    } else {
      if (this.state.hastosell) {
        this.setState({
          chosen: true,
          selling: true,
          status: "Choose a shop to sell"
        });
      } else {
        this.setState({
          chosen: true,
          selling: true,
          status: "Choose a shop to sell",
          endable: false,
          cancel: true
        });
      }
    }
  };

  sellthis = event => {
    console.log("clicked");
    Clickthis(
      this.state,
      this.settingstate,
      this.switchp,
      event.target.id,
      this.info
    );
  };

  move = () => {
    Move(this.state, this.settingstate, this.premove);
    if (this.state.howmany === 1) {
      setTimeout(
        function() {
          let place = Tiles(this.state);
          console.log(place);
          this.setState({ gogo: false, unmoved: false, nowtile: place });
          this.info();
        }.bind(this),
        250
      );
    }
  };

  premove = () => {
    var pos
    var dire
    if (this.state.now === 1) {
      pos = this.state.ppl;
      dire = "direction";
    } else if (this.state.now === 2) {
      pos = this.state.ppl2;
      dire = "direction2";
    } else if (this.state.now === 3) {
      pos = this.state.ppl3;
      dire = "direction3";
    }
    if (pos[0] === 10 && pos[1] === 80) {
      this.setState({ [dire]: "down" });
    } else if (pos[0] === 90 && pos[1] === 80) {
      this.setState({ [dire]: "left" });
    } else if (pos[0] === 90 && pos[1] === 10) {
      this.setState({ [dire]: "up" });
    } else if (pos[0] === 10 && pos[1] === 10) {
      this.setState({ [dire]: "right" });
    }
    this.move();
  };

  cpuing = () => {
    Cpuplay(this.state, this.settingstate, this.switchp, this.cpuing, this.buy, this.nextcpuing);
  };

  nextcpuing=()=>{
    Cpuplay2(this.state,this.settingstate, this.switchp)
  }

  settingstate = (category, item) => {
    this.setState({ [category]: item });
  };

  dice = () => {
    if (!this.state.over) {
      spinsound.play();
    }

    var ran = Math.floor(Math.random() * 6);

    if (this.state.now === 1) {
      this.setState({ starting: true });
    }
    var truran = ran + 1;

    this.setState({
      howmany: truran,
      dicing: false,
      rolling: true
    });
    RollDice(this.settingstate);
    setTimeout(
      function() {
        this.setState({ rolling: false });
        this.setState({ gogo: true });
      }.bind(this),
      800
    );
    setTimeout(
      function() {
        this.premove();
      }.bind(this),
      1200
    );
  };

  switchp = () => {
    let p1 = this.state.price1 + Finalincome(this.state, pink);
    let p2 = this.state.price2 + Finalincome(this.state, blue);
    let p3 = this.state.price3 + Finalincome(this.state, green);
    this.setState({ total1: p1, total2: p2, total3: p3 });
    //SwitchP(this.state, this.settingstate, this.switchp, this.dice)
    this.setState({
      sellable: false,
      buyable: false,
      upgradable: false,
      reing: false,
      discountprice: 0,
      mediaing: false,
      available: false,
      gossipable: false,
      hastosell: false,
    });

    var mins = this.state.overcount - 1;
    this.setState({ overcount: mins });
    var Over = false;
    console.log(this.state.overcount);

    if (mins === 0) {
      Over = true;
      this.setState({ over: true });
      this.Wintxt();
      bgm2.pause();
      bgmend.play();
    }
    var playerkana = false;
    var playerkana2 = false;

    if (this.state.now === 1) {
      if (this.state.over2 === false) {
        this.setState({ now: 2, color: blue, nowppl: "ppl2" });
        playerkana2 = true;
      } else if (this.state.over2 === true && this.state.over3 === true) {
        Over = true;
        this.setState({ over: true });
        this.Wintxt();
      } else {
        this.setState({ now: 3, color: green, nowppl: "ppl3" });
      }
    } else if (this.state.now === 2) {
      if (this.state.over3 === false) {
        this.setState({ now: 3, color: green, nowppl: "ppl3" });
      } else if (this.state.over1 === true && this.state.over3 === true) {
        Over = true;
        this.setState({ over: true });
        this.Wintxt();
      } else {
        playerkana = true;
        this.setState({ now: 1, color: pink, nowppl: "ppl" });
      }
    } else if (this.state.now === 3) {
      if (this.state.over1 === false) {
        playerkana = true;
        this.setState({ now: 1, color: pink, nowppl: "ppl" });
      } else if (this.state.over1 === true && this.state.over2 === true) {
        Over = true;
        this.setState({ over: true });
        this.Wintxt();
      } else {
        playerkana2 = true;
        this.setState({ now: 2, color: blue, nowppl: "ppl2" });
      }
    }

    this.setState({
      unmoved: true,
      chosen: false,
      upgrading: false,
      selling: false,
      upgrader: false
    });

    let rand = Math.floor(Math.random() * 8);

    if (mins === 70 || mins === 50 || mins === 20) {
      this.setState({ status: "Time for Mini Game!!" });
      setTimeout(
        function() {
          bgm.pause();
          bgm.currentTime = 0;
          this.setState({ rpg: true, minigame: true });
        }.bind(this),
        1500
      );
    } else if (mins === 35) {
      this.setState({ status: "Time for Mini Game!!" });
      setTimeout(
        function() {
          bgm.pause();
          bgm.currentTime = 0;
          this.setState({ rpg: false, minigame: true });
        }.bind(this),
        1500
      );
    } else if (rand === 0 && mins > 1 && mins < 50) {
      let minus = 6000 - mins * 100;
      let That = Government(this.state, minus);
      if (That === "no") {
        this.incoming();
        if (this.state.now===1 || (this.state.now===2 && this.state.mode==="1 CPU")) {
          this.setState({ dicing: true });
        } else {
          this.setState({ cpuplay: true });
          setTimeout(
            function() {
              this.dice();
            }.bind(this),
            1000
          );
        }
      } else {
        let Place = Pushtile(That);
        let a = this.state[That].slice();
        a[1] = this.state[That][1] - minus;
        this.setState({ status: "Government Warning!" });
        setTimeout(
          function() {
            gossipsound.play();
            this.setState({
              gp: Place,
              gcolor: "purple",
              graded: "-$" + minus,
              [That]: a
            });
          }.bind(this),
          800
        );
        setTimeout(
          function() {
            this.incoming();
            this.setState({ graded: "", gcolor: "yellow" });
            if (this.state.now===1 || (this.state.now===2 && this.state.mode === "1 CPU")) {
              this.setState({ dicing: true });
            } else {
              this.setState({ cpuplay: true });
              setTimeout(
                function() {
                  this.dice();
                }.bind(this),
                2300
              );
            }
          }.bind(this),
          1500
        );
      }
    } else {
      this.incoming();
      setTimeout(
        function() {
          this.setState({ dicing: true });
        }.bind(this),
        100
      );
      if (this.props.mode === "No CPU") {
      } else if (this.props.mode === "1 CPU") {
        if (!Over && !playerkana && !playerkana2) {
          this.setState({ cpuplay: true });
          setTimeout(
            function() {
              this.dice();
            }.bind(this),
            1000
          );
        }
      } else {
        if (!Over && !playerkana) {
          this.setState({ cpuplay: true });
          setTimeout(
            function() {
              this.dice();
            }.bind(this),
            1000
          );
        }
      }
    }
    if (mins === 19) {
      bgm.pause();
      bgm.currentTime = 0;
      bgm2.loop = true;
      bgm2.play();
    }
  };

  quit = () => {
    this.props.quit();
  };

  toggle = event => {
    this.setState({ [event.target.id]: true });
  };
  toggleout = event => {
    this.setState({ [event.target.id]: false });
  };

  bgmoff=()=>{
    if(this.state.bgm==="ON"){
      bgm.pause()
      bgm2.pause()
      this.setState({bgm: "OFF"})
    } else{
      if(this.state.overcount>18){
        bgm.play()
      } else{
        bgm2.play()
      }
      this.setState({bgm: "ON"})
    }
    
  }

  minigameover = (one, two, three) => {
    if(this.state.bgm==="ON"){
      bgm.loop = true;
      bgm.play();
    }
    Minigameover(this.state,this.settingstate, one, two, three)
    setTimeout(
      function() {
        let p1 = this.state.price1 + Finalincome(this.state, pink);
        let p2 = this.state.price2 + Finalincome(this.state, blue);
        let p3 = this.state.price3 + Finalincome(this.state, green);
        this.setState({ total1: p1, total2: p2, total3: p3 });
        this.incoming();
        if (
          this.state.now === 1 ||
          (this.state.mode === "1 CPU" && this.state.now === 2)
        ) {
          this.setState({ dicing: true });
        } else {
          this.setState({ cpuplay: true });
          setTimeout(
            function() {
              this.dice();
            }.bind(this),
            1000
          );
        }
      }.bind(this),
      5000
    );
  };

  minigameover2 = (one, two, three) => {
    if(this.state.bgm==="ON"){
      bgm.loop = true;
      bgm.play();
    }
    console.log(one, two, three);
    this.setState({ minigame: false });
    setTimeout(
      function() {
        takesound.play();
        let msg = this.state.name1 + " gets $" + one;
        let neumoney = this.state.price1 + one;
        this.setState({ status: msg, price1: neumoney });
      }.bind(this),
      500
    );
    setTimeout(
      function() {
        takesound.play();
        let msg = this.state.name2 + " gets $" + two;
        let neumoney = this.state.price2 + two;
        this.setState({ status: msg, price2: neumoney });
      }.bind(this),
      2000
    );
    setTimeout(
      function() {
        takesound.play();
        let msg = this.state.name3 + " gets $" + three;
        let neumoney = this.state.price3 + three;
        this.setState({ status: msg, price3: neumoney });
      }.bind(this),
      3500
    );
    setTimeout(
      function() {
        let p1 = this.state.price1 + Finalincome(this.state, pink);
       let p2 = this.state.price2 + Finalincome(this.state, blue);
       let p3 = this.state.price3 + Finalincome(this.state, green);
       this.setState({ total1: p1, total2: p2, total3: p3 });
        this.incoming();
        if (
          this.state.now === 1 ||
          (this.state.mode === "1 CPU" && this.state.now === 2)
        ) {
          this.setState({ dicing: true });
        } else {
          this.setState({ cpuplay: true });
          setTimeout(
            function() {
              this.dice();
            }.bind(this),
            1000
          );
        }
      }.bind(this),
      5000
    );
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.over ? (
            <div>
              <div>
              {!this.state.minigame?
                <Ranking state={this.state} bgmoff={this.bgmoff}/>
                :null}
              </div>
              <div className="container2 shadow">
                
                <Header state={this.state} quit={this.quit} />

              </div>
              <div className="container">
                {this.state.minigame ? (
                  <div>
                    {this.state.rpg ? (
                      <Minigame
                        state={this.state}
                        minigameover={this.minigameover}
                      />
                    ) : (
                      <Minigame2
                        state={this.state}
                        minigameover={this.minigameover2}
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    <Map state={this.state} sellthis={this.sellthis} />
                    <Action
                      state={this.state}
                      color={this.state.color}
                      dice={this.dice}
                      buy={this.buy}
                      upgrade={this.upgrade}
                      upgrader={this.upgrader}
                      sell={this.sell}
                      switchp={this.switchp}
                      cancel={this.cancel}
                      customer={this.customer}
                      discount={this.discount}
                      gossip={this.gossip}
                      toggle={this.toggle}
                      toggleout={this.toggleout}
                    />
                    <Person1 ppl={this.state.ppl} />
                    <Person2 ppl={this.state.ppl2} />
                    <Person3 ppl={this.state.ppl3} />
                    <h1
                      className="title2"
                      style={{
                        position: "absolute",
                        top: `${this.state.gp[0]}%`,
                        left: `${this.state.gp[1]}%`,
                        color: `${this.state.gcolor}`
                      }}
                    >
                      {this.state.graded}
                    </h1>
                    <h1
                      className="title2"
                      style={{
                        position: "absolute",
                        top: `${this.state[this.state.nowppl][0]}%`,
                        left: `${this.state[this.state.nowppl][1]}%`,
                        color: `rgb(${this.state.color})`
                      }}
                    >
                      {this.state.trade}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="BG2">
              <h1 className="title">{this.state.winmsg}</h1>
              <h1>
                {this.state.name1}: ${this.state.final1}
              </h1>
              <h1>
                {this.state.name2}: ${this.state.final2}
              </h1>
              <h1>
                {this.state.name3}: ${this.state.final3}
              </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
