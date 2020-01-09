import React from "react";
import Main from "./component/Main";

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      top: true,
      name1: "Player1",
      name2: "Player2",
      name3: "Player3",
      mode: "No CPU"
    };
  }

  start = () => {
    this.setState({ top: false });
  };
  changename = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkin = event => {
    if (event.target.value.length > 7) {
      event.preventDefault();
    }
  };

  switchmode = () => {
    switch (this.state.mode) {
      case "No CPU":
        this.setState({ mode: "1 CPU" });
        break;
      case "1 CPU":
        this.setState({ mode: "2 CPU" });
        break;
      case "2 CPU":
        this.setState({mode: "No CPU"})
        break;
      default:
        break;
    }
  };

  quit = () => {
    this.setState({ top: true });
  };

  render() {
    return (
      <div>
        {this.state.top ? (
          <div>
            <img alt="log" src="/logo.png" style={{height:"100px",widht:"auto",marginTop:"90px",marginBottom:"70px"}}/>
            <br/>
            <input
              className="input"
              name="name1"
              value={this.state.name1}
              onChange={this.changename}
              onKeyPress={this.checkin}
            ></input>
            <input
              className="input"
              name="name2"
              value={this.state.name2}
              onChange={this.changename}
              onKeyPress={this.checkin}
            ></input>
            <input
              className="input"
              name="name3"
              value={this.state.name3}
              onChange={this.changename}
              onKeyPress={this.checkin}
            ></input>
            <button className="btn" onClick={this.switchmode}>
              {this.state.mode}
            </button>
            <button className="btn" onClick={this.start}>
              Start
            </button>
            <p style={{ marginTop: "50px" }}></p>
            <div
              style={{
                backgroundColor: "white",
                width: "780px",
                height: "250px",
                margin: "auto",
                textAlign: "left",
                overflowY: "scroll",
                paddingTop: "0px",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
            ><p><b>Latest version 5.13</b> 2019/09/03: New event: "Goverment warning" added, 2019 version Monopoly is here! Minor errors fixed(gate, government warnings), 80 days -> 85 days, new design, added a ranking board and cancellation options, buffed Real Estate.
            </p>
              <p><b>Latest version 4.3</b> 2019/08/28: Minor errors fixed, more tiles for custom shop, 100 days -> 80 days, government warning fix.
              
              </p>
              <p><b>Version 4.12</b> 2019/08/26: Added custom shops (3 brand new different
              kinds), fixed minor bugs (upgrade button didn't show in
              some situations).
              </p>
              <p>
              <b>Version 4.0</b> 2019/08/25: New minigame added "Stack it up", win it all and flip the game!!
              </p>
              <p>
              <b>Version 3.82</b> 2019/08/24: A mini game added "Monster bet", play it safe? or taking a risk for a huge come-back!!
            </p>
            </div>
            
          </div>
        ) : (
          <Main quit={this.quit} state={this.state} mode={this.state.mode} />
        )}
      </div>
    );
  }
}

export default Top;
