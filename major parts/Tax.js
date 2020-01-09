const cityhall = "196, 196, 196";

function Tax(state,setting,money,tax){
        let all = tax / 10;
        let newmo = state[money] - all;
        let mes = "-$" + all;
        let add = state.a1[1] + 1000;

        setting(money, newmo)
        setting("trade", mes)
        setting("paid", true)
        setting("a1", [cityhall, add])
        setTimeout(
          function() {
            setting("trade", "")
          },150
        );
}

export default Tax