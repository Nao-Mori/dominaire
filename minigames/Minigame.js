import React from "react";
import Dragonsound from "../sound/dragon.wav";
import Ghostsound from "../sound/ghost.wav";
import Zombiesound from "../sound/zombie.wav";
import Zombiesound2 from "../sound/zombie2.wav";
import Ghostsound2 from "../sound/ghost2.wav";
import Dragonsound2 from "../sound/dragon2.wav";
import BGM from "../sound/minibgm2.mp3"
import Magesound from "../sound/mage.wav";
import Magesound2 from "../sound/mage2.wav";
import Golemsound from "../sound/golem.wav";
import Golemsound2 from "../sound/golem2.wav";
import Wizzardsound from "../sound/wizzard.wav";
import Wizzardsound2 from "../sound/wizzard2.wav";
import Gurlsound from "../sound/gurl.wav";
import Gurlsound2 from "../sound/gurl2.wav";
import Gurlsound3 from "../sound/gurl3.wav"
import Gurlsound4 from "../sound/gurl4.wav"
import Gurlsound5 from "../sound/gurl5.wav"
import Gurlsound6 from "../sound/gurl6.wav"


const bgm = new Audio(BGM)
const ghostsound = new Audio(Ghostsound);
const dragonsound = new Audio(Dragonsound);

const ghostsound2 = new Audio(Ghostsound2);
const dragonsound2 = new Audio(Dragonsound2);

const zombiesound = new Audio(Zombiesound);
const zombiesound2 = new Audio(Zombiesound2);

const magesound = new Audio(Magesound)
const magesound2 = new Audio(Magesound2)

const golemsound = new Audio(Golemsound)
const golemsound2 = new Audio(Golemsound2)

const wizzardsound = new Audio(Wizzardsound)
const wizzardsound2 = new Audio(Wizzardsound2)

const gurlsound = new Audio(Gurlsound)
const gurlsound2 = new Audio(Gurlsound2)
const gurlsound3 = new Audio(Gurlsound3)
const gurlsound4 = new Audio(Gurlsound4)
const gurlsound5 = new Audio(Gurlsound5)
const gurlsound6 = new Audio(Gurlsound6)

class Minigame extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: "",
      name2: "",
      name3: "",
      message: "",
      chosen: false,
      ghosthp: 2500,
      zombiehp: 2000,
      dragonhp: 3000,
      over: false,
      dead: 10,
      ghost: [2, 5],
      zombie: [40, 37],
      dragon: [5, 55],
      before: true,
      winner: "",
      onechose: "",
      twochose: "",
      threechose: "",
      prize: 2000,
      fire: false,
      heal: false,
      now: 1,
      gorm: "",
      dorg: "",
      zorg: "",
      draining: false,
      drain: [2, 5],
      helling: false,
      ice: false,
      wizzard: false,
    };
  }
  componentDidMount() {
    let messe = this.props.state.name1 + ", choose a monster you think will win"
    this.setState({
      name1: this.props.state.name1,
      name2: this.props.state.name2,
      name3: this.props.state.name3,
      message: messe,
      chosen: false,
      ghosthp: 2500,
      zombiehp: 2000,
      dragonhp: 3000,
      over: false,
      dead: 10,
      ghost: [2, 5],
      zombie: [40, 37],
      dragon: [5, 55],
      before: true,
      prize: this.props.state.prize,
    });
    let ran = 2//Math.floor(Math.random() * 3)
    if(ran===0){
      this.setState({gorm: "Mage"})
    } else if(ran===1){
      this.setState({gorm: "Ghost"})
    } else{
      this.setState({gorm: "Wizzard", ghosthp: 3000})
    }
    let ran2 = Math.floor(Math.random() * 2)
    if(ran2===0){
      this.setState({dorg: "Golem", dragonhp: 3500})
    } else{
      this.setState({dorg: "Dragon"})
    }
    let ran3 = Math.floor(Math.random() * 2)
    if(ran3===0){
      this.setState({zorg: "Gurl"})
    } else{
      this.setState({zorg: "Zombie"})
    }
    if(this.props.state.bgm==="ON"){
      bgm.loop = true
      bgm.play()
    }
    
    
  }

  dragonmove() {
    setTimeout(
      function() {
        this.setState({ dragon: [10, 45] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ dragon: [15, 40] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ dragon: [20, 35] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ dragon: [15, 40] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ dragon: [10, 45] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ dragon: [5, 55] });
      }.bind(this),
      350
    );
  }

  dragonmove2() {
    setTimeout(
      function() {
        this.setState({ dragon: [5, 45] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ dragon: [5, 35] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ dragon: [5, 25] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ dragon: [5, 35] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ dragon: [5, 45] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ dragon: [5, 55] });
      }.bind(this),
      350
    );
  }
  
  ghostmove(item) {
    setTimeout(
      function() {
        this.setState({ [item]: [3, 10] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ [item]: [5, 15] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ [item]: [7, 20] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ [item]: [5, 20] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ [item]: [3, 10] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ [item]: [2, 5] });
        this.setState({draining: false})
      }.bind(this),
      350
    );
  }
  ghostmove2(item) {
    setTimeout(
      function() {
        this.setState({ [item]: [3, 15] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ [item]: [3, 25] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ [item]: [4, 35] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ [item]: [3, 25] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ [item]: [2, 15] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ [item]: [2, 5] });
        this.setState({draining: false})
      }.bind(this),
      350
    );

  }
  zombiemove() {
    setTimeout(
      function() {
        this.setState({ zombie: [38, 37] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ zombie: [36, 37] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ zombie: [34, 37] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ zombie: [36, 37] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ zombie: [38, 37] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ zombie: [40, 37] });
      }.bind(this),
      350
    );
  }
  zombiemove1() {
    setTimeout(
      function() {
        this.setState({ zombie: [38, 34] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ zombie: [36, 31] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ zombie: [34, 28] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ zombie: [36, 31] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ zombie: [38, 34] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ zombie: [40, 37] });
      }.bind(this),
      350
    );
  }
  zombiemove2() {
    setTimeout(
      function() {
        this.setState({ zombie: [38, 40] });
      }.bind(this),
      100
    );
    setTimeout(
      function() {
        this.setState({ zombie: [36, 43] });
      }.bind(this),
      150
    );
    setTimeout(
      function() {
        this.setState({ zombie: [34, 46] });
      }.bind(this),
      200
    );
    setTimeout(
      function() {
        this.setState({ zombie: [36, 43] });
      }.bind(this),
      250
    );
    setTimeout(
      function() {
        this.setState({ zombie: [38, 40] });
      }.bind(this),
      300
    );
    setTimeout(
      function() {
        this.setState({ zombie: [40, 37] });
      }.bind(this),
      350
    );
  }

  over() {
    var one = "";
    var two = "";
    var three = "";
    if (this.state.winner === this.state.onechose) {
      one = this.state.winner;
    }
    if (this.state.winner === this.state.twochose) {
      two = this.state.winner
    }
    if (this.state.winner === this.state.threechose) {
      three = this.state.winner
    }
    bgm.pause()
    bgm.currentTime = 0
    this.props.minigameover(one, two, three);
  }

  battle() {
    setTimeout(
      function() {
        console.log(this.state.dead);
        var ran = 10;
        var damagedhp
        var damaged
        var damagedhp2
        while (ran === 10 || ran === this.state.dead) {
          ran = Math.floor(Math.random() * 3);
        }
        if (ran === 0 && this.state.gorm==="Ghost") {
          let ran1 = Math.floor(Math.random() * 2);
          let ran2 = Math.floor(Math.random() * 4);
          let ran3 = Math.floor(Math.random() * 3);
          if (this.state.dead === 1) {
            ran1 = 1;
          } else if (this.state.dead === 2) {
            ran1 = 0;
          }

          if (ran1 === 0) {
            this.ghostmove("ghost");
            let msg

            if(ran3===0){
              ghostsound2.play();
              ran2 = (ran2 * 100 + 500)*2;
              damagedhp = this.state.zombiehp - ran2;
              msg = "Ghost used Hell Arm! "
              setTimeout(function(){
                this.setState({ helling: true, hell: [25,20]})
              }.bind(this),200)
              setTimeout(function(){
                this.setState({ helling: false})
              }.bind(this),600)
            } else{
              ghostsound.play();
              ran2 = ran2 * 100 + 500;
              damagedhp = this.state.zombiehp - ran2;
              msg = "Ghost deals "
            }
            
            damaged = 1;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: msg + ran2 + " damage to " + this.state.zorg + "!",
              zombiehp: damagedhp
            });
          } else if (ran1 === 1) {
            this.ghostmove2("ghost");
            let msg
            if(ran3===0){
              ghostsound2.play();
              ran2 = (ran2 * 100 + 500)*2;
              damagedhp = this.state.dragonhp - ran2;
              msg = "Ghost used Hell Arm! "
              let pos = this.state.dragon
              setTimeout(function(){
                this.setState({ helling: true, hell: pos})
              }.bind(this),200)
              setTimeout(function(){
                this.setState({ helling: false})
              }.bind(this),600)
            } else{
              ghostsound.play();
              ran2 = ran2 * 100 + 500;
              damagedhp = this.state.dragonhp - ran2;
              msg = "Ghost deals "
            }
            damaged = 2;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: msg + ran2 + " damage to " +this.state.dorg + "!",
              dragonhp: damagedhp
            });
          } 
        } else if (ran === 0 && this.state.gorm==="Mage") {
          
          let ran1 = Math.floor(Math.random() * 2);
          let ran2 = Math.floor(Math.random() * 3);
          let ran3 = Math.floor(Math.random() * 3);
          if (this.state.dead === 1) {
            ran1 = 1;
          } else if (this.state.dead === 2) {
            ran1 = 0;
          }
          let msg
          if (ran1 === 0) {
            this.ghostmove("ghost");
            ran2 = ran2 * 100 + 700;
            damagedhp = this.state.zombiehp - ran2;

            if(ran3===0){
              magesound2.play();
              this.setState({draining:true})
              msg = "Mage used Mega Drain! Drained " + ran2 + " from " + this.state.zorg + "!"
              let healed = this.state.ghosthp + ran2
              if(healed>2500){
                healed = 2500
              }
              this.setState({ghosthp: healed})
            } else{
              magesound.play();
              msg = "Mage deals " + ran2 + " damage to " + this.state.zorg + "!"
            }
            damaged = 1;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: msg,
              zombiehp: damagedhp
            });
          } else if (ran1 === 1) {
            this.ghostmove2("ghost");
            ran2 = ran2 * 100 + 700;
            damagedhp = this.state.dragonhp - ran2;

            if(ran3===0){
              magesound2.play();
              this.setState({draining:true})
              msg = "Mage used Mega Drain! Drained " + ran2 + " from " + this.state.dorg + "!"
              let healed = this.state.ghosthp + ran2
              if(healed>2500){
                healed = 2500
              }
              this.setState({ghosthp: healed})
            } else{
              magesound.play();
              msg = "Mage deals " + ran2 + " damage to " + this.state.dorg + "!"
            }
            damaged = 2;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: msg,
              dragonhp: damagedhp
            });
          } 
        } else if (ran === 0 && this.state.gorm==="Wizzard") {
          let ran1 = Math.floor(Math.random() * 3);
          let ran2 = Math.floor(Math.random() * 8);
          if (this.state.dead === 1) {
            ran1 = 0;
          } else if (this.state.dead === 2) {
            ran1 = 1;
          }
          if (ran1 === 0) {
            this.ghostmove2("ghost");
            wizzardsound.play();
            ran2 = ran2 * 100 + 400;
            damagedhp = this.state.dragonhp - ran2;
            damaged = 2;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Wizzard deals " + ran2 + " damage to " + this.state.dorg + "!",
              dragonhp: damagedhp
            });
          } else if (ran1 === 1) {
            this.ghostmove("ghost");
            wizzardsound.play();
            ran2 = ran2 * 100 + 400;
            damagedhp = this.state.zombiehp - ran2;
            damaged = 1;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Wizzard deals " + ran2 + " damage to " + this.state.zorg + "!",
              zombiehp: damagedhp
            });
          } else {
            wizzardsound2.play();
            ran2 = ran2 * 100 + 400;
            damagedhp = this.state.dragonhp - ran2;
            damagedhp2 = this.state.zombiehp - ran2;
            damaged = 2;
            if(damagedhp<0){
              damagedhp = 0
            }
            if(damagedhp2<0){
              damagedhp2 = 0
            }
            this.setState({
              message:
                "Wizzard used Frozen Orb!! " + ran2 + " damage to everyone",
              dragonhp: damagedhp,
              zombiehp: damagedhp2,
              wizzard: true
            });
            setTimeout(function(){
                this.setState({ice: true})
            }.bind(this),200
            )
            setTimeout(function(){
                this.setState({ice: false, wizzard: false})
            }.bind(this),500
            )
          }
        } else if (ran === 1 && this.state.zorg==="Zombie") {
          let ran1 = Math.floor(Math.random() * 3);
          let ran2 = Math.floor(Math.random() * 4);
          let ran3 = Math.floor(Math.random() * 3);
          if (this.state.dead === 2) {
            if(ran3===0){
              ran1 = 2
            } else{
              ran1 = 0;
            }
          } else if (this.state.dead === 0) {
            if(ran3===0){
              ran1 = 2
            } else{
              ran1 = 1;
            }
          }
          if (ran1 === 0) {
            this.zombiemove1();
            zombiesound.play();
            ran2 = ran2 * 100 + 300;
            damagedhp = this.state.ghosthp - ran2;
            damaged = 0;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Zombie deals " + ran2 + " damage to " +this.state.gorm + "!",
              ghosthp: damagedhp
            });
          } else if (ran1 === 1) {
            this.zombiemove2();
            zombiesound.play();
            ran2 = ran2 * 100 + 300;
            damagedhp = this.state.dragonhp - ran2;
            damaged = 2;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Zombie deals " + ran2 + " damage to " +this.state.dorg + "!",
              dragonhp: damagedhp
            });
          } else if (ran1 === 2) {
            this.zombiemove();
            zombiesound2.play();
            this.setState({
              message: "Zombie used Replication! Fully healed herself.",
              zombiehp: 2000,
            });
            setTimeout(function(){
                this.setState({heal: true})
            }.bind(this),200
            )
            setTimeout(function(){
                this.setState({heal: false})
            }.bind(this),500
            )
          }
        } else if (ran === 1 && this.state.zorg==="Gurl") {
          let ran1 = Math.floor(Math.random() * 3);
          let ran2 = Math.floor(Math.random() * 20);
          if (this.state.dead === 2) {
            ran1 = 0;
          } else if (this.state.dead === 0) {
            ran1 = 1;
          }
          if (ran1 === 0) {
            this.zombiemove1();
            if(ran2>13){
              gurlsound3.play();
            } else if(ran2>9){
              gurlsound6.play();
            } else if(ran2>4){
              gurlsound.play();
            } else {
              gurlsound4.play()
            }
            ran2 = ran2 * 100 + 100;
            damagedhp = this.state.ghosthp - ran2;
            damaged = 0;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Gurl deals " + ran2 + " damage to " +this.state.gorm + "!",
              ghosthp: damagedhp
            });
          } else if (ran1 === 1) {
            this.zombiemove2();
            if(ran2>13){
              gurlsound3.play();
            } else if(ran2>9){
              gurlsound6.play();
            } else if(ran2>4){
              gurlsound.play();
            } else {
              gurlsound4.play()
            }
            ran2 = ran2 * 100 + 100;
            damagedhp = this.state.dragonhp - ran2;
            damaged = 2;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Gurl deals " + ran2 + " damage to " +this.state.dorg + "!",
              dragonhp: damagedhp
            });
          } else if (ran1 === 2) {
            this.zombiemove();
            
            let ran5 = Math.floor(Math.random() * 4);
            if(ran5===0){
              gurlsound5.play();
              this.setState({
                message: "Gurl used SANG! 5000 damage to everyone!",
                ghosthp: 0,
                dragonhp: 0
              });
              damaged = 0;
              damagedhp=0
              damagedhp2 = 0
            } else{
              gurlsound2.play();
              this.setState({
                message: "Gurl used SANG! Nothing happened.",
              });
            }
            
          }
        } else if (ran === 2 && this.state.dorg==="Dragon") {
          let ran1 = Math.floor(Math.random() * 3);
          let ran2 = Math.floor(Math.random() * 5);
          if (this.state.dead === 0) {
            ran1 = 1;
          } else if (this.state.dead === 1) {
            ran1 = 0;
          }
          if (ran1 === 0) {
            this.dragonmove2();
            dragonsound2.play();
            ran2 = ran2 * 100 + 600;
            damagedhp = this.state.ghosthp - ran2;
            damaged = 0;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Dragon deals " + ran2 + " damage to " + this.state.gorm + "!",
              ghosthp: damagedhp
            });
          } else if (ran1 === 1) {
            this.dragonmove();
            dragonsound2.play();
            ran2 = ran2 * 100 + 600;
            damagedhp = this.state.zombiehp - ran2;
            damaged = 1;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: "Dragon deals " + ran2 + " damage to " + this.state.zorg + "!",
              zombiehp: damagedhp
            });
          } else {
            this.dragonmove();
            dragonsound.play();
            ran2 = ran2 * 100 + 600;
            damagedhp = this.state.ghosthp - ran2;
            damagedhp2 = this.state.zombiehp - ran2;
            damaged = 0;
            if(damagedhp<0){
              damagedhp = 0
            }
            if(damagedhp2<0){
              damagedhp2 = 0
            }
            this.setState({
              message:
                "Dragon used Fire Breath!! " + ran2 + " damage to everyone",
              ghosthp: damagedhp,
              zombiehp: damagedhp2,
            });
            setTimeout(function(){
                this.setState({fire: true})
            }.bind(this),200
            )
            setTimeout(function(){
                this.setState({fire: false})
            }.bind(this),500
            )
          }
        } else if (ran === 2 && this.state.dorg==="Golem") {
          let ran1 = Math.floor(Math.random() * 2);
          let ran2 = Math.floor(Math.random() * 2);
          let ran3 = Math.floor(Math.random() * 3);
          if (this.state.dead === 0) {
            ran1 = 1;
          } else if (this.state.dead === 1) {
            ran1 = 0;
          }
          if (ran1 === 0) {
            this.dragonmove2();
            
            let msg
            if(ran3===0){
              ran2 = 1000;
              damagedhp = this.state.ghosthp - ran2;
              msg= "Golem used Rock Punch! "
              golemsound2.play();
            } else{
              ran2 = ran2 * 100 + 400;
              damagedhp = this.state.ghosthp - ran2;
              msg= "Golem deals "
              golemsound.play();
            }
            damaged = 0;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: msg + ran2 + " damage to " + this.state.gorm + "!",
              ghosthp: damagedhp
            });
          } else if (ran1 === 1) {
            let msg
            this.dragonmove();

            if(ran3===0){
              ran2 = 1000;
              damagedhp = this.state.zombiehp - ran2;
              msg= "Golem used Rock Punch! "
              golemsound2.play();
            } else{
              ran2 = ran2 * 100 + 400;
              damagedhp = this.state.zombiehp - ran2;
              msg= "Golem deals "
              golemsound.play();
            }
            damaged = 1;
            if(damagedhp<0){
              damagedhp = 0
            }
            this.setState({
              message: msg + ran2 + " damage to " + this.state.zorg + "!",
              zombiehp: damagedhp
            });
          } 
        }
        var over = false;
        if (damagedhp <= 0 && damagedhp2 <= 0) {
          over = true;
        } else if (damagedhp <= 0) {
          if (this.state.dead < 4) {
            over = true;
          } else {
            this.setState({ dead: damaged });
          }
        } else if (damagedhp2 <= 0) {
          if (this.state.dead < 4) {
            over = true;
          } else {
            this.setState({ dead: 1 });
          }
        }
        setTimeout(
          function() {
            if (over === false) {
              this.battle();
            } else {
              if (this.state.ghosthp > 0) {
                this.setState({ message: this.state.gorm + ", Win!", winner: this.state.gorm });
              } else if (this.state.zombiehp > 0 && this.state.zorg==="Zombie") {
                this.setState({ message: "Zombie, Win!", winner: "Zombie" });
              } else if (this.state.zombiehp > 0 && this.state.zorg==="Gurl") {
                this.setState({ message: "Gurl, Win!", winner: "Gurl" });
              } else if (this.state.dragonhp > 0 && this.state.dorg==="Dragon") {
                this.setState({ message: "Dragon, Win!", winner: "Dragon" });
              } else if (this.state.dragonhp > 0 && this.state.dorg==="Golem") {
                this.setState({ message: "Golem, Win!", winner: "Golem" });
              }
              setTimeout(
                function() {
                  this.over();
                }.bind(this),
                1500
              );
            }
          }.bind(this),
          1500
        );
      }.bind(this),
      700
    );
  }

  choose = event => {
    if(this.state.now===1){
      this.setState({
        chosen: true,
        message: this.state.name1 + " chose " + event.target.id,
        onechose: event.target.id
      });
    } else if(this.state.now===2){
      this.setState({
        chosen: true,
        message: this.state.name2 + " chose " + event.target.id,
        twochose: event.target.id
      });
    }
    
    if(this.props.state.mode==="1 CPU" && this.state.now===1){
      setTimeout(
        function() {
          let messs = this.state.name2 + ", choose a monster you think will win"
          this.setState({now: 2, chosen: false, message: messs})
        }.bind(this),
        1000
      );
      
    }
    else if(this.props.state.mode==="1 CPU" && this.state.now===2){
      setTimeout(
        function() {
          let ran = Math.floor(Math.random() * 3);
          let chose
          switch(ran){
              case 0:
                  chose=this.state.gorm
                  break
              case 1:
                chose = this.state.zorg
                  break
              case 2:
                chose=this.state.dorg
                  break
              default:
                  break
          }
          this.setState({ message: this.state.name3 + " chose "+chose, threechose: chose });
        }.bind(this),
        1500
      );
      setTimeout(
        function() {
          this.setState({ message: "Battle Begins...", before: false });
        }.bind(this),
        2000
      );
      setTimeout(
        function() {
          this.battle();
        }.bind(this),
        2500
      );
    }
    else if(this.props.state.mode==="2 CPU") {
    setTimeout(
      function() {
        let ran = Math.floor(Math.random() * 3);
        let chose
        switch(ran){
            case 0:
                chose=this.state.gorm
                break
            case 1:
                chose = this.state.zorg
                break
            case 2:
              chose=this.state.dorg
                break
            default:
                break
        }
        this.setState({ message: this.state.name2 + " chose " + chose, twochose: chose });
      }.bind(this),
      1500
    );
    setTimeout(
      function() {
        let ran = Math.floor(Math.random() * 3);
        let chose
        switch(ran){
            case 0:
                chose=this.state.gorm
                break
            case 1:
              chose = this.state.zorg
                break
            case 2:
              chose=this.state.dorg
                break
            default:
                break
        }
        this.setState({ message: this.state.name3 + " chose "+chose, threechose: chose });
      }.bind(this),
      3000
    );
    setTimeout(
      function() {
        this.setState({ message: "Battle Begins...", before: false });
      }.bind(this),
      4500
    );
    setTimeout(
      function() {
        this.battle();
      }.bind(this),
      5000
    );
    }
  };

  render() {
    return (
      <div >
          <div className="wall"></div>
        <h1 className="containersmall2">{this.state.message}</h1>

        {this.state.before ? (
          <div>
            {this.state.gorm==="Mage"?
            <div className="ghostdesc">
            <h1 className="nomargin">Mage</h1>
            <h3 className="nomargin">HP: {this.state.ghosthp}</h3>
            <h3 className="nomargin">DM: 700-900</h3>
            <h3 className="nomargin">SP: Mega Drain (Damage+Heal)</h3>
            <h3 className="nomargin">Prize: ${this.state.prize*1.5}</h3>
            
          </div>
            : this.state.gorm==="Ghost"?
            <div className="ghostdesc">
              <h1 className="nomargin">Ghost</h1>
              <h3 className="nomargin">HP: {this.state.ghosthp}</h3>
              <h3 className="nomargin">DM: 500-800</h3>
              <h3 className="nomargin">SP: Hell Arm (Damagex2)</h3>
              <h3 className="nomargin">Prize: ${this.state.prize*2}</h3>
              
            </div>:
            <div className="ghostdesc">
            <h1 className="nomargin">Wizzard</h1>
            <h3 className="nomargin">HP: {this.state.ghosthp}</h3>
            <h3 className="nomargin">DM: 400-1200</h3>
            <h3 className="nomargin">SP: Frozen Orb (Area Damage)</h3>
            <h3 className="nomargin">Prize: ${this.state.prize}</h3>
              </div>
          }
            
            {this.state.zorg==="Zombie"?
            <div className="zombiedesc">
            <h1 className="nomargin">Zombie</h1>
            <h3 className="nomargin">HP: {this.state.zombiehp}</h3>
            <h3 className="nomargin">DM: 300-600</h3>
            <h3 className="nomargin">SP: Replication (Heal)</h3>
            <h3 className="nomargin">Prize: ${this.state.prize*4}</h3>
            {!this.state.chosen ? (
              <button className="smallbtn2" id="Zombie" onClick={this.choose}>
                Choose
              </button>
            ) : null}
          </div>
            :
            <div className="zombiedesc">
              <h1 className="nomargin">Gurl</h1>
              <h3 className="nomargin">HP: {this.state.zombiehp}</h3>
              <h3 className="nomargin">DM: 100-2000</h3>
              <h3 className="nomargin">SP: SANG! (????????)</h3>
              <h3 className="nomargin">Prize: ${this.state.prize*3}</h3>
              {!this.state.chosen ? (
                <button className="smallbtn2" id="Gurl" onClick={this.choose}>
                  Choose
                </button>
              ) : null}
            </div>}
            
            
            {this.state.dorg==="Dragon"?
              <div className="dragondesc">
              <h1 className="nomargin">Dragon</h1>
              <h3 className="nomargin">HP: {this.state.dragonhp}</h3>
              <h3 className="nomargin">DM: 600-1000</h3>
              <h3 className="nomargin">SP: Fire Breath (Area Damage)</h3>
              <h3 className="nomargin">Prize: ${this.state.prize}</h3>
              {!this.state.chosen ? (
                <button className="smallbtn2" id="Dragon" onClick={this.choose}>
                  Choose
                </button>
              ) : null}
            </div>
            :
            <div className="dragondesc">
            <h1 className="nomargin">Golem</h1>
            <h3 className="nomargin">HP: {this.state.dragonhp}</h3>
            <h3 className="nomargin">DM: 400-500</h3>
            <h3 className="nomargin">SP: Rock Punch (1000 damage)</h3>
            <h3 className="nomargin">Prize: ${this.state.prize*1.5}</h3>
            {!this.state.chosen ? (
              <button className="smallbtn2" id="Golem" onClick={this.choose}>
                Choose
              </button>
            ) : null}
          </div>
            }
            
          </div>
        ) : (
          <div>
            <h1
              className="boxshadow"
              style={{
                position: "absolute",
                top: `10%`,
                left: `0%`,
                fontSize: "40px"
              }}
            >
              HP: {this.state.ghosthp}
            </h1>
            <h1
              className="boxshadow"
              style={{
                position: "absolute",
                top: `80%`,
                left: `25%`,
                fontSize: "40px"
              }}
            >
              HP: {this.state.zombiehp}
            </h1>
            <h1
              className="boxshadow"
              style={{
                position: "absolute",
                top: `10%`,
                left: `50%`,
                fontSize: "40px"
              }}
            >
              HP: {this.state.dragonhp}
            </h1>
          </div>
        )}
        {this.state.zorg==="Zombie"?
          <div>{this.state.zombiehp > 0 ? (
            <div
              className="zombie"
              style={{
                top: `${this.state.zombie[0]}%`,
                left: `${this.state.zombie[1]}%`
              }}
            />
          ) : null}</div>
        :
        <div>{this.state.zombiehp > 0 ? (
          <div
            className="gurl"
            style={{
              top: `${this.state.zombie[0]}%`,
              left: `${this.state.zombie[1]}%`
            }}
          />
        ) : null}</div>}
        
        {this.state.gorm==="Mage"?
        <div>{this.state.ghosthp > 0 ? (
          <div
            className="mage"
            style={{
              top: `${this.state.ghost[0]}%`,
              left: `${this.state.ghost[1]}%`
            }}
          />
        ) : null}
        </div>
        :this.state.gorm==="Ghost"?
        <div>{this.state.ghosthp > 0 ? (
          <div
            className="ghost"
            style={{
              top: `${this.state.ghost[0]}%`,
              left: `${this.state.ghost[1]}%`
            }}
          />
        ) : null}
        </div>
        :
        <div>{this.state.ghosthp > 0 ? (
          <div>
          {this.state.wizzard? <div
            className="dragon2-2"
            style={{
              top: `${this.state.ghost[0]}%`,
              left: `${this.state.ghost[1]}%`
            }}
          /> :<div
            className="dragon2"
            style={{
              top: `${this.state.ghost[0]}%`,
              left: `${this.state.ghost[1]}%`
            }}
          />}
          </div>
        ) : null}
        </div>
        }
        
        {this.state.dorg==="Dragon"?
          <div>{this.state.dragonhp > 0 ? (
            <div
              className="dragon"
              style={{
                top: `${this.state.dragon[0]}%`,
                left: `${this.state.dragon[1]}%`
              }}
            />
          ) : null}
          </div>
        :
        <div>{this.state.dragonhp > 0 ? (
          <div
            className="golem"
            style={{
              top: `${this.state.dragon[0]}%`,
              left: `${this.state.dragon[1]}%`
            }}
          />
        ) : null}
        </div>
        }
        {this.state.draining ? (
          <div
            className="drain"
            style={{
              top: `${this.state.ghost[0]}%`,
              left: `${this.state.ghost[1]}%`
            }}
          />
        ) : null}
        {this.state.helling ? (
          <div
            className="hell"
            style={{
              top: `${this.state.hell[0]}%`,
              left: `${this.state.hell[1]}%`
            }}
          />
        ) : null}
        
        {this.state.fire?
        <div className="fire" />
        :null}
        {this.state.ice?
        <div className="ice" />
        :null}
        {this.state.heal?
        <div className="heal" />
        :null}
        {!this.state.chosen ? (
          <div>{this.state.gorm==="Mage"?
            <button className="smallbtn2 spbtn" id="Mage" onClick={this.choose}>
          Choose
        </button>: this.state.gorm==="Ghost"?
          <button className="smallbtn2 spbtn" id="Ghost" onClick={this.choose}>
          Choose
        </button>:
        <button className="smallbtn2 spbtn" id="Wizzard" onClick={this.choose}>
        Choose
      </button>
      }
                
          </div>
              ) : null}
      </div>
    );
  }
}

export default Minigame;
