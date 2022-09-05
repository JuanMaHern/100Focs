import React from "react";
import '../Stylesheet/LeftMenu.css';
import Logo from "./Logo";
import ButtonContainer from "./ButtonContainer";
import SocialContact from "./SocialContact";

function LeftMenu({ changeSection, shown }) {
    return(
        <div className="left-menu">
          <div className="header-left-menu">
            <Logo />
          </div>
          <ButtonContainer changeSection={changeSection} shown={shown}/>
          <div className="footer-left-menu">
            <SocialContact />
            <div className="footer-content">
            <hr />
              © 100Focs 2022
              <br />
              Todos los derechos reservados
            </div>
          </div>
        </div>
    )
}

export default LeftMenu;