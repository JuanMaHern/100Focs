import React from "react";
import '../Stylesheet/Section.css';
import Article from './Article.js';
import CargarDatos from "./CargarDatos.js";
/* import Pernil from '../Images/pernil.jpg'; */

function Section({ title, array, onSubmit }) {
  let show = [];
  if (title == 'Menu'){
    show = array;
  }else {
    show = [];
  }
  return(
    <div className={'section-container'}>
      <h2 className="section-title">{title}</h2>
      {show.map((article) =>
        <Article key={article.id}
          image= {article.image}
          title={article.title}
          text={article.text}
          amount={article.amount}
          price={article.price}
        />
        )
      }
    </div>
  )
}

export default Section;
