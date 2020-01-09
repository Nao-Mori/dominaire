
const pink = "221, 99, 99";
const blue = "87, 122, 199";
const green = "63, 151, 75";



function Gate(state, setting, tile, money){
            let minusmoney = Math.round(state[tile][1] *0.07);
            let newmama = state[money] - minusmoney;
            let mes = "-$" + minusmoney;
            setting(money, newmama)
            setting("paid", true)
            setting("trade", mes)
            setTimeout(
              function() {
                setting("trade", "")
              },
              200
            );
            if (state[tile][0] === pink) {
                let mama1 = state.price1 + minusmoney;
                setting("price1", mama1)
            } else if (state[tile][0] === blue) {
              let mama1 = state.price2 + minusmoney;
              setting("price2", mama1)
            } else if (state[tile][0] === green) {
              let mama1 = state.price3 + minusmoney;
              setting("price3", mama1)
            }
}

export default Gate