function Tiles(props) {
  var cpos
  switch (props.now) {
    case 1:
      cpos = props.ppl;
      break;
    case 2:
      cpos = props.ppl2;
      break;
    case 3:
      cpos = props.ppl3;
      break;
    default:
      break;
  }
  var y = cpos[0];
  var x = cpos[1];
  var posid
  if (y === 10 && x === 10) {
    posid = "a1";
  } else if (y === 10 && x === 20) {
    posid = "a2";
  } else if (y === 10 && x === 30) {
    posid = "a3";
  } else if (y === 10 && x === 40) {
    posid = "a4";
  } else if (y === 10 && x === 50) {
    posid = "a5";
  } else if (y === 10 && x === 60) {
    posid = "a6";
  } else if (y === 10 && x === 70) {
    posid = "a7";
  } else if (y === 10 && x === 80) {
    posid = "b1";
  } else if (y === 30 && x === 80) {
    posid = "b2";
  } else if (y === 50 && x === 80) {
    posid = "b3";
  } else if (y === 70 && x === 80) {
    posid = "b4";
  } else if (y === 90 && x === 80) {
    posid = "c1";
  } else if (y === 90 && x === 70) {
    posid = "c2";
  } else if (y === 90 && x === 60) {
    posid = "c3";
  } else if (y === 90 && x === 50) {
    posid = "c4";
  } else if (y === 90 && x === 40) {
    posid = "c5";
  } else if (y === 90 && x === 30) {
    posid = "c6";
  } else if (y === 90 && x === 20) {
    posid = "c7";
  } else if (y === 90 && x === 10) {
    posid = "d1";
  } else if (y === 70 && x === 10) {
    posid = "d2";
  } else if (y === 50 && x === 10) {
    posid = "d3";
  } else if (y === 30 && x === 10) {
    posid = "d4";
  }

  console.log(posid);
  return posid;
}

export default Tiles;
