


function Switchp(state,setting,switchp,dice) {
  this.setState({
    sellable: false,
    buyable: false,
    upgradable: false,
    reing: false,
    discountprice: 0,
    mediaing: false,
    available: false,
    gossipable: false
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

  let rand = Math.floor(Math.random() * 7);

  if (mins === 50 || mins === 20) {
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
    let minus = 9000 - mins * 100;
    let That = Government(this.state, minus);
    if (That === "no") {
      this.incoming();
      if (playerkana) {
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
        500
      );
      setTimeout(
        function() {
          this.incoming();
          this.setState({ graded: "", gcolor: "yellow" });
          if (playerkana || (playerkana2 && this.state.mode === "CPU 1")) {
            this.setState({ dicing: true });
          } else {
            this.setState({ cpuplay: true });
            setTimeout(
              function() {
                this.dice();
              }.bind(this),
              1500
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
}

export default Switchp;
