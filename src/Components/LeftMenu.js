import React from "react";
import '../Stylesheet/LeftMenu.css';
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import Logo from "./Logo";
import ButtonContainer from "./ButtonContainer";

function LeftMenu({ changeSection, shown }) {
    return(
        <div className="left-menu">
          <div className="header-left-menu">
            <Logo />
          </div>
          <ButtonContainer changeSection={changeSection} shown={shown}/>
          <div className="footer-left-menu">
            <div className="social-contact">
              <AiOutlineWhatsApp className="social-icon wp" />
              <AiOutlineInstagram className="social-icon ig" />
            </div>
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