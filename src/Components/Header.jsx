import React from "react";
import logo from "../../public/logo.png";
import govLogo from "../../public/govLogo.png";

export default function Header() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between flex-row align-items-center py-2 " style={{backgroundColor: 'rgba(240, 240, 240, 0.5)'}} >
        <div>
          <img
            src={logo}
            className="img-fluid"
            style={{ height: "12vh" }}
            alt="Logo"
          />
        </div>
        <div className="fs-2">South East Central Railway</div>
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
