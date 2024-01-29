import React from "react";
import logo from "/logo.png";
import govLogo from "/govLogo.png";

export default function Header() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between flex-row align-items-center py-2 " style={{backgroundColor: 'rgba(240, 240, 240, 0.5)',fontFamily :'sans-serif'}} >
        <div>
          <img
            src={logo}
            className="img-fluid"
            style={{ height: "12vh" }}
            alt="Logo"
          />
        </div>
        <div style={{fontSize :'2.3rem',textShadow: '2px 2px 4px rgba(180, 180, 200, 0.75)',color:"#2f4676"}}>South East Central Railway</div>
        <div>
        <img
            src={govLogo}
            className="img-fluid"
            style={{ height: "12vh" }}
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
}
