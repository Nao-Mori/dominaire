import React from "react";


function Action(props) {
  return (
    <div className="container-center">
      <div className="container-action">
      {!props.state.rolling && !props.state.gogo ? (
        <div style={{maxWidth:"70vh",margin:"0 auto"}}>
          <div className="container-textboard">
            {props.state.status}
          </div>
        </div>
      ) : null}
      {props.state.rolling ? (
        <div
          className="dice"
          style={{
            color: `rgb(${props.color})`,
          }}
        >
          {props.state.roll}
        </div>
      ) : null}
      {props.state.gogo ? (
        <div
          className="dice"
          style={{
            color: `rgb(${props.color})`,
          }}
        >
          {props.state.howmany}
        </div>
      ) : null}
      {!props.state.cpuplay ? (
        <div>
          {props.state.dicing && !props.state.hastosell ? (
            <button
              className="btn"
              style={{
                backgroundColor: `rgb(${props.color})`
              }}
              onClick={props.dice}
            >
              Move
            </button>
          ) : null}

          {props.state.upgrading ? (
            <div>
              {(props.state.now===1 &&props.state.price1>=1000) || (props.state.now===2 && props.state.price2>=1000)?
              <button
              className="smallbtn"
              id="1000"
              style={{
                backgroundColor: `rgb(${props.color})`
              }}
              onClick={props.upgrader}
            >
              $1000
            </button>
              :null}
              {(props.state.now===1 &&props.state.price1>=2000) || (props.state.now===2 && props.state.price2>=2000)?
              <button
                className="smallbtn"
                id="2000"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.upgrader}
              >
                $2000
              </button>
              :null}
              {(props.state.now===1 &&props.state.price1>=3000) || (props.state.now===2 && props.state.price2>=3000)?
              <button
                className="smallbtn"
                id="3000"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.upgrader}
              >
                $3000
              </button>
              :null}
              {(props.state.now===1 &&props.state.price1>=4000) || (props.state.now===2 && props.state.price2>=4000)?
              <button
                className="smallbtn"
                id="4000"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.upgrader}
              >
                $4000
              </button>
              :null}
              {(props.state.now===1 &&props.state.price1>=5000) || (props.state.now===2 && props.state.price2>=5000)?
              <button
                className="smallbtn"
                id="5000"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.upgrader}
              >
                $5000
              </button>
              :null}
            </div>
          ) : null}

          {props.state.custommenu ? (
            <div>
              <button
                className="smallbtn"
                id="RealE"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.customer}
                onMouseEnter={props.toggle} onMouseLeave={props.toggleout}
              >
                Real Estate
              </button>
              <button
                className="smallbtn"
                id="Media"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.customer}
                onMouseEnter={props.toggle} onMouseLeave={props.toggleout}
              >
                Media
              </button>
              <button
                className="smallbtn"
                id="Gate"
                style={{
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.customer}
                onMouseEnter={props.toggle} onMouseLeave={props.toggleout}
              >
                Gate
              </button>
              <div className="container-map" style={{backgroundColor:"rgba(255,255,255,0.7)",padding:"5px",width:"80%",margin:"0 auto"}}>
                {props.state.Gate?"Creates a gate that charges others a small amount when passing / landing"
                :props.state.Media?"You can manipulate the reputation of any shop decreasing their value depending on its value when landing"
                :props.state.RealE?"You can buy / takeover any shop with a discount depending on its value when landing":null}
              </div>
            </div>
          ) : null}

          {!props.state.unmoved ? (
            <div className="">
              {!props.state.chosen ? (
                <div>
                  {props.state.upgradable ? (
                    <button
                      className="btn"
                      style={{
                        backgroundColor: `rgb(${props.color})`
                      }}
                      onClick={props.upgrade}
                    >
                      Upgrade
                    </button>
                  ) : null}
                  {props.state.buyable ? (
                    <button
                      className="btn"
                      style={{
                        backgroundColor: `rgb(${props.color})`
                      }}
                      onClick={props.buy}
                    >
                      {props.state.buyortake}
                    </button>
                  ) : null}
                  {props.state.available ? (
                    <button
                      className="btn"
                      style={{
                        backgroundColor: `rgb(${props.color})`
                      }}
                      onClick={props.discount}
                    >
                      Discount
                    </button>
                  ) : null}
                  {props.state.gossipable ? (
                    <button
                      className="btn"
                      style={{
                        backgroundColor: `rgb(${props.color})`
                      }}
                      onClick={props.gossip}
                    >
                      Gossip
                    </button>
                  ) : null}
                  {props.state.sellable ? (
                    <button
                      className="btn"
                      style={{
                        backgroundColor: `rgb(${props.color})`
                      }}
                      onClick={props.sell}
                    >
                      Sell
                    </button>
                  ) : null}
                </div>
              ) : null}
              {props.state.endable ? (
                <button
                  className="btn"
                  style={{
                    marginTop: "1vw",
                    backgroundColor: `rgb(${props.color})`
                  }}
                  onClick={props.switchp}
                >
                  End Turn
                </button>
              ) : null}
              {props.state.cancel ? (
                <button
                  className="btn"
                  style={{
                    marginTop: "1vw",
                    backgroundColor: `rgb(${props.color})`
                  }}
                  onClick={props.cancel}
                >
                  Cancel
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      </div>
    </div>
  );
}

export default Action;
