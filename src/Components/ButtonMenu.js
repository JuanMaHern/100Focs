import React from "react";
import '../Stylesheet/ButtonMenu.css';

function ButtonMenu(props) {

    let style;
    if (props.shown === props.children) {
        style = 'button-menu presed'
    } else {
        style = 'button-menu'
    }

    return(
        <div className={style} onClick={() => props.changeSection(props.children)} >
            {props.children}
        </div>
    )
}

export default ButtonMenu;