


function Move(state, setting, premove){
  var pos1
  var dir
    if (state.now === 1) {
        pos1 = state.ppl;
        dir = state.direction;
      } else if (state.now === 2) {
        pos1 = state.ppl2;
        dir = state.direction2;
      } else if (state.now === 3) {
        pos1 = state.ppl3;
        dir = state.direction3;
      }
      switch (dir) {
        case "right":
          pos1 = [pos1[0], pos1[1] + 10];
          break;
        case "left":
          pos1 = [pos1[0], pos1[1] - 10];
          break;
        case "up":
          pos1 = [pos1[0] - 20, pos1[1]];
          break;
        case "down":
          pos1 = [pos1[0] + 20, pos1[1]];
          break;
        default:
          break;
      }
      setTimeout(
        function() {
          switch (state.now) {
            case 1:
              setting("ppl", pos1)
              break;
            case 2:
              setting("ppl2", pos1)
              break;
            case 3:
              setting("ppl3", pos1)
              break;
            default:
              break;
          }
          if (state.howmany > 1) {
            let count = state.howmany;
            let countdown = count - 1;
            setting("howmany", countdown)
            premove();
          }
        },
        200
      );
}

export default Move