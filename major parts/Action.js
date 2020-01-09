import React from "react";


function Action(props) {
  return (
    <div>
      {!props.state.rolling && !props.state.gogo ? (
        <div className="containersmall">
          <h1
            style={{
              fontSize: "50px",
              marginTop: "8px"
            }}
          >
            {props.state.status}
          </h1>
        </div>
      ) : null}
      {props.state.rolling ? (
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "47%",
            color: `rgb(${props.color})`,
            fontSize: "150px"
          }}
        >
          {props.state.roll}
        </h1>
      ) : null}
      {props.state.gogo ? (
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "47%",
            color: `rgb(${props.color})`,
            fontSize: "150px"
          }}
        >
          {props.state.howmany}
        </h1>
      ) : null}
      {!props.state.cpuplay ? (
        <div>
          {props.state.dicing && !props.state.hastosell ? (
            <button
              className="btn"
              style={{
                position: "absolute",
                top: "53%",
                left: "43%",
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
                position: "absolute",
                top: "53%",
                left: "25%",
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
                  position: "absolute",
                  top: "53%",
                  left: "35%",
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
                  position: "absolute",
                  top: "53%",
                  left: "45%",
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
                  position: "absolute",
                  top: "53%",
                  left: "55%",
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
                  position: "absolute",
                  top: "53%",
                  left: "65%",
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
                className="mediumbtn"
                id="RealE"
                style={{
                  position: "absolute",
                  top: "53%",
                  left: "25%",
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.customer}
                onMouseEnter={props.toggle} onMouseLeave={props.toggleout}
              >
                Real Estate
              </button>
              {props.state.RealE? <p className="hovermenu" style={{
                  backgroundColor: "white"
                }}>You can buy / takeover any shop with a discount depending on its value when landing</p> :null}
              <button
                className="mediumbtn"
                id="Media"
                style={{
                  position: "absolute",
                  top: "53%",
                  left: "43%",
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.customer}
                onMouseEnter={props.toggle} onMouseLeave={props.toggleout}
              >
                Media
              </button>
              {props.state.Media? <p className="hovermenu" style={{
                  backgroundColor: "white"
                }}>You can manipulate the reputation of any shop decreasing their value depending on its value when landing</p> :null}
              <button
                className="mediumbtn"
                id="Gate"
                style={{
                  position: "absolute",
                  top: "53%",
                  left: "60.3%",
                  backgroundColor: `rgb(${props.color})`
                }}
                onClick={props.customer}
                onMouseEnter={props.toggle} onMouseLeave={props.toggleout}
              >
                Gate
              </button>
              {props.state.Gate? <p className="hovermenu" style={{
                  backgroundColor: "white"
                }}>Creates a gate that charges others a small amount when passing / landing</p> :null}
            </div>
          ) : null}

          {!props.state.unmoved ? (
            <div>
              {!props.state.chosen ? (
                <div>
                  {props.state.upgradable ? (
                    <button
                      className="btn"
                      style={{
                        position: "absolute",
                        top: "53%",
                        left: "26%",
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
                        position: "absolute",
                        top: "53%",
                        left: "43%",
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
                        position: "absolute",
                        top: "53%",
                        left: "43%",
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
                        position: "absolute",
                        top: "53%",
                        left: "43%",
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
                        position: "absolute",
                        top: "53%",
                        left: "60.3%",
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
                    position: "absolute",
                    top: "71%",
                    left: "43%",
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
                    position: "absolute",
                    top: "71%",
                    left: "43%",
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
  );
}

export default Action;
