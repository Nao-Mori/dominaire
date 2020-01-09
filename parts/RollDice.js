function RollDice(props) {
    props("roll", 1)
  setTimeout(function() {
    props("roll", 5);
  }, 100);
  setTimeout(function() {
    props("roll", 2);
  }, 200);
  setTimeout(function() {
    props("roll", 3);
  }, 300);
  setTimeout(function() {
    props("roll", 1);
  }, 400);
  setTimeout(function() {
    props("roll", 6);
  }, 500);
  setTimeout(function() {
    props("roll", 4);
  }, 600);

  return;
}

export default RollDice;
