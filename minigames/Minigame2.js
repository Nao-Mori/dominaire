import React from "react";
import Takesound from "../sound/take.wav";
import Awsound from "../sound/aww.wav"


const takesound = new Audio(Takesound);
const awwsound = new Audio(Awsound)

class Minigame2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: "",
      name2: "",
      name3: "",
      round: 1,
      card1: true,
      card2: true,
      card3: true,
      card4: true,
      card5: true,
      card6: true,
      card7: true,

      card01: true,
      card02: true,
      card03: true,
      card04: true,
      card05: true,
      card06: true,
      card07: true,

      drawable: false,
      drawable2: false,
      message: "Welcome to Minigame!",
      now: 2,
      money1: 0,
      money2: 0,
      money3: 0,
      cards2: [1, 2, 3, 4, 5, 6, 7],
      cards3: [1, 2, 3, 4, 5, 6, 7],
      picked1: 0,
      picked2: 0,
      picked3: 0,
      color1: "white",
      color2: "white",
      color3: "white",
      revealed: false,
      multiply: 400,
      mode: ""
    };
  }

  componentDidMount() {
    this.setState({
      name1: this.props.state.name1,
      name2: this.props.state.name2,
      name3: this.props.state.name3,
      mode: this.props.state.mode
    });
    this.letsgo();
  }

  onep = () =>{
    let msg0 = this.state.name1 + ", please look away"
    this.setState({ message: msg0});
    setTimeout(
      function() {
        let msg = this.state.name2 + ", pick a card";
        this.setState({ message: msg, drawable2: true });
      }.bind(this),
      2500
    );
  }

  letsgo = () => {
    if (this.state.round < 7) {
        setTimeout(
            function() {
              let newround = this.state.round + 1;
              let msg = "Round " + this.state.round;
              this.setState({
                message: msg,
                round: newround
              });
            }.bind(this),
            1000
          );
      if(this.props.state.mode==="1 CPU"){
        setTimeout(
          function() {
            let ran = Math.floor(Math.random() * this.state.cards3.length);
            let arr = this.state.cards3
            let picked = this.state.cards3[ran];
            let msg = this.state.name3 + " picked a card";
            console.log(this.state.cards3)
            arr.splice(ran, 1);
            console.log(arr)
            this.setState({
              message: msg,
              cards3: arr,
              picked3: picked,
            });
          }.bind(this),
          1500
        );
        setTimeout(
          function() {
            let msg = this.state.name2 + ", please look away";
            this.setState({ message: msg});
          }.bind(this),
          2000
        );
        setTimeout(
          function() {
            let msg = this.state.name1 + ", pick a card";
            this.setState({ message: msg, drawable: true });
          }.bind(this),
          4500
        );
      } else if (this.props.state.mode==="2 CPU"){
        console.log("got here")
        setTimeout(
          function() {
            let ran = Math.floor(Math.random() * this.state.cards2.length);
            let arr = this.state.cards2
            let picked = this.state.cards2[ran];
            let msg = this.state.name2 + " picked a card";
            console.log(this.state.cards2)
            arr.splice(ran, 1);
            console.log(arr)
            this.setState({
              message: msg,
              cards2: arr,
              picked2: picked,
            });
          }.bind(this),
          1500
        );
        setTimeout(
          function() {
            let ran = Math.floor(Math.random() * this.state.cards3.length);
            let arr = this.state.cards3
            let picked = this.state.cards3[ran];
            let msg = this.state.name3 + " picked a card";
            console.log(this.state.cards3)
            arr.splice(ran, 1);
            console.log(arr)
            this.setState({
              message: msg,
              cards3: arr,
              picked3: picked,
            });
          }.bind(this),
          2000
        );
        setTimeout(
          function() {
            let msg = this.state.name1 + ", pick a card";
            this.setState({ message: msg, drawable: true });
          }.bind(this),
          2500
        );
      }
    } else if(this.state.round===7) {
      let newround = this.state.round + 1;
      setTimeout(
        function() {
          let msg = "Round 7";
          this.setState({ message: msg, round: newround});
        }.bind(this),
        1000
      );
      for(let i=1; i<10; i++){
        let cardok = "card" + i
        if(this.state[cardok]===true){
          this.setState({picked1: i})
        }
      }
      if(this.state.mode==="1 CPU"){
        for(let i=1; i<10; i++){
          let cardok = "card0" + i
          if(this.state[cardok]===true){
            this.setState({picked2: i})
          }
        }
      } else{
        let picke2 = this.state.cards2[0]
      this.setState({ picked2: picke2, })
      }
      let picke3 = this.state.cards3[0]
      this.setState({ picked3: picke3, })
      setTimeout(
        function() {
          this.reveal()
        }.bind(this),
        2000
      );
      

    } else {
      setTimeout(
        function() {
          let msg = "Game Over";
          this.setState({ message: msg });
        }.bind(this),
        2000
      );
      setTimeout(
        function() {
          this.props.minigameover(this.state.money1, this.state.money2, this.state.money3)
        }.bind(this),
        3000
      );
    }
  };

  reveal() {
    let msg = "Reveal in 3";
    this.setState({ message: msg });

    setTimeout(function() {
      let msg = "Reveal in 2";
      this.setState({ message: msg });
    }.bind(this),
      500
    )
    setTimeout(function() {
        let msg = "Reveal in 1";
        this.setState({ message: msg });
      }.bind(this),
        1000
      )
    setTimeout(function() {
      let msg = "BAM!!";
      this.setState({ message: msg, revealed: true });
    }.bind(this),
      1500
    )
    setTimeout(function() {
        let msg
        let winner
        let wincolor
        let sum
        if(this.state.picked1>this.state.picked2 && this.state.picked1>this.state.picked3){
            takesound.play()
            sum = (this.state.picked2 + this.state.picked3)*this.state.multiply
            msg= this.state.name1 +" gets $" + sum + "!"
            winner="money1"
            wincolor = "color1"
        } else if(this.state.picked2>this.state.picked1 && this.state.picked2>this.state.picked3){
            takesound.play()
            sum = (this.state.picked1 + this.state.picked3)*this.state.multiply
            msg= this.state.name2 +" gets $" + sum + "!"
            winner="money2"
            wincolor = "color2"
        } else if(this.state.picked3>this.state.picked1 && this.state.picked3>this.state.picked2){
            takesound.play()
            sum = (this.state.picked1 + this.state.picked2)*this.state.multiply
            msg= this.state.name3 +" gets $" + sum + "!"
            winner="money3"
            wincolor = "color3"
        } else {
          awwsound.play()
            msg= "Too Bad! Nobody gets money!"
        }
        let total = this.state[winner] + sum
        this.setState({[winner]: total, message: msg, [wincolor]: "yellow"})
        setTimeout(function() {
            this.setState({ [wincolor]: "white" });
          }.bind(this),
            500
          )
          setTimeout(function() {
            this.setState({ [wincolor]: "yellow" });
          }.bind(this),
            1000
          )
          setTimeout(function() {
            this.setState({ [wincolor]: "white" });
          }.bind(this),
            1500
          )
          setTimeout(function() {
            this.setState({ [wincolor]: "white", revealed: false });
            this.letsgo()
          }.bind(this),
            1500
          )
      }.bind(this),
        2000
      )
  }

  draw = event => {
    if (this.state.drawable) {
      this.setState({
        [event.target.id]: false,
        drawable: false,
        picked1: Number(event.target.id[4])
      });
      if(this.state.mode==="1 CPU"){
        this.onep();
      } else{
        this.reveal()
      }
      
    }
  };

  draw2 = event => {
    if (this.state.drawable2) {
      this.setState({
        [event.target.id]: false,
        drawable2: false,
        picked2: Number(event.target.id[5])
      });
      this.reveal();
    }
  };

  render() {
    return (
      <div>
        <div className="wall2">
          <div className="container-ranking message" style={{marginBottom:"1vw",marginTop:"2vw"}}>{this.state.message}</div>
          {this.state.revealed ? (
            <div>
              <p
                className="card-2"
                style={{ position: "absolute", top: "55%", left: "45.5%", backgroundColor: this.state.color1 }}
              >
                {this.state.picked1}
              </p>
              <p
                className="card-2"
                style={{ position: "absolute", top: "25%", left: "23%", backgroundColor: this.state.color2 }}
              >
                {this.state.picked2}
              </p>
              <p
                className="card-2"
                style={{ position: "absolute", top: "25%", left: "70%", backgroundColor: this.state.color3 }}
              >
                {this.state.picked3}
              </p>
            </div>
          ) : null}

          <div style={{height:"15vw"}}/>
          {this.state.drawable ? (
            <div>
              {this.state.card1 ? (
                <button className="card-2" id="card1" onClick={this.draw}>
                  1
                </button>
              ) : null}
              {this.state.card2 ? (
                <button className="card-2" id="card2" onClick={this.draw}>
                  2
                </button>
              ) : null}
              {this.state.card3 ? (
                <button className="card-2" id="card3" onClick={this.draw}>
                  3
                </button>
              ) : null}
              {this.state.card4 ? (
                <button className="card-2" id="card4" onClick={this.draw}>
                  4
                </button>
              ) : null}
              {this.state.card5 ? (
                <button className="card-2" id="card5" onClick={this.draw}>
                  5
                </button>
              ) : null}
              {this.state.card6 ? (
                <button className="card-2" id="card6" onClick={this.draw}>
                  6
                </button>
              ) : null}
              {this.state.card7 ? (
                <button className="card-2" id="card7" onClick={this.draw}>
                  7
                </button>
              ) : null}
              
            </div>
          ) : null}
          {this.state.drawable2 ? (
            <div>
              {this.state.card01 ? (
                <button className="card-2" id="card01" onClick={this.draw2}>
                  1
                </button>
              ) : null}
              {this.state.card02 ? (
                <button className="card-2" id="card02" onClick={this.draw2}>
                  2
                </button>
              ) : null}
              {this.state.card03 ? (
                <button className="card-2" id="card03" onClick={this.draw2}>
                  3
                </button>
              ) : null}
              {this.state.card04 ? (
                <button className="card-2" id="card04" onClick={this.draw2}>
                  4
                </button>
              ) : null}
              {this.state.card05 ? (
                <button className="card-2" id="card05" onClick={this.draw2}>
                  5
                </button>
              ) : null}
              {this.state.card06 ? (
                <button className="card-2" id="card06" onClick={this.draw2}>
                  6
                </button>
              ) : null}
              {this.state.card07 ? (
                <button className="card-2" id="card07" onClick={this.draw2}>
                  7
                </button>
              ) : null}
              
            </div>
          ) : null}
            {!this.state.revealed?<div className="myprice">${this.state.money1}</div>:null}
        </div>
      </div>
    );
  }
}

export default Minigame2;
