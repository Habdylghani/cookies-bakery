import React from "react";
import Co from "./chocolate-cookies.png";

export class House extends React.Component {
  state = {
    hideCookieR: true,
    hideCookieL: true,
  };

  setCookiesVisibility = (visibility, pos) =>
    pos === "R"
      ? this.setState({ hideCookieR: visibility })
      : this.setState({ hideCookieL: visibility });

  render() {
    const { hideCookieR, hideCookieL } = this.state;
    return (
      <div className="container">
        <div className="sun float-right"></div>
        <div style={{ marginLeft: "30%" }}>
          <div
            className="triangle container1"
            onClick={() => {
              console.log("hhhhhh");
            }}
          ></div>
          <div className="rectangle outerDiv">
            <div>
              {hideCookieL ? (
                <div
                  className="circle float-left"
                  onMouseOver={() => this.setCookiesVisibility(false, "L")}
                ></div>
              ) : (
                <img
                  src={Co}
                  className="cookies"
                  onMouseOut={() => {
                    this.setCookiesVisibility(true, "L");
                  }}
                />
                /*<div
                className="circle float-left"
                onMouseOver={(evt) => this.setCookiesVisibility(true)}
              ></div>*/
              )}
              {hideCookieR ? (
                <div
                  className="circle float-right"
                  onMouseOver={() => this.setCookiesVisibility(false, "R")}
                ></div>
              ) : (
                <img
                  src={Co}
                  className="cookies"
                  onMouseOut={() => {
                    this.setCookiesVisibility(true, "R");
                  }}
                />
                /*<div
                className="circle float-left"
                onMouseOver={(evt) => this.setCookiesVisibility(true)}
              ></div>*/
              )}
            </div>
            <div className="porte"></div>
            <div className="mailBox">Mail Box</div>
          </div>
        </div>
      </div>
    );
  }
}
