function Tiles(props) {
  var cpos
  switch (props) {
    case "a1":
      cpos = [10,10]
      break;
    case "a2":
      cpos = [10,20]
      break;
    case "a3":
      cpos = [10,30]
      break;
    case "a4":
      cpos = [10,40]
      break;
    case "a5":
      cpos = [10,50]
      break;
    case "a6":
      cpos = [10,60]
      break;
    case "a7":
      cpos = [10,70]
      break;
    case "b1":
      cpos = [10,80]
      break;
    case "b2":
      cpos = [30,80]
      break;
    case "b3":
      cpos = [50,80]
      break;
    case "b4":
      cpos = [70,80]
      break;
    case "c1":
      cpos = [90,80]
      break;
    case "c2":
      cpos = [90,70]
      break;
    case "c3":
      cpos = [90,60]
      break;
    case "c4":
      cpos = [90,50]
      break;
    case "c5":
      cpos = [90,40]
      break;
    case "c6":
      cpos = [90,30]
      break;
    case "c7":
      cpos = [90,20]
      break;
    case "d1":
      cpos = [90,10]
      break;
    case "d2":
      cpos = [70,10]
      break;
    case "d3":
      cpos = [50,10]
      break;
    case "d4":
      cpos = [30,10]
      break;
    default:
      break;
  }

  return cpos;
}

export default Tiles;
