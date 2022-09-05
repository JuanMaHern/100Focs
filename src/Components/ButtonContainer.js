import React from "react";
import '../Stylesheet/ButtonContainer.css';
import ButtonMenu from "./ButtonMenu";

export default function ButtonContainer({ changeSection, shown }) {
  return(
    <div className="button-container">
      <ButtonMenu changeSection={changeSection} shown={shown} >Nosotros</ButtonMenu>
      <ButtonMenu changeSection={changeSection} shown={shown} >Menu</ButtonMenu>
      <ButtonMenu changeSection={changeSection} shown={shown} >Catering</ButtonMenu>
      <ButtonMenu changeSection={changeSection} shown={shown} >Sandwiches</ButtonMenu>
      {/* <ButtonMenu changeSection={changeSection} shown={shown} >Cargar Datos</ButtonMenu> */} 
    </div>
  ) 
}