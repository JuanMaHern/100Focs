import React, { useState } from "react";
import '../Stylesheet/Article.css';
import SocialIcons from '../Images/SocialIcons.svg';

function Article({ image, title, text, amount, price }) {
  const msj = `Estoy interesado/a en el *${title}* para *${amount}* personas a *$${price}* publicado en la pagina web`;
  const [show, setShow] = useState('');
  const ExpandArticle = () => {
    if (show === 'show'){
    setShow('');
    } else {
      setShow('show');
    }
  }
  return(
    <div className='article-container' onClick={ExpandArticle}>
      <img
        className="article-image"
        src={image}
        alt={title}
      />
      <div className='article-content'>
        <div className='article-title'>
          <h3>{title}</h3>
        </div>
        <div className={`article-text ${show}`}>{text}</div>
        <div className={`article-info ${show}`}>
          <div className="article-amount">{amount} Personas</div>
          <div className="article-price">${price}</div>
          <svg className="article-wp"><a href={`https://wa.me/2494642499?text=${msj}`} target='_blank' rel="nofollow noopener noreferrer"><use href={`${SocialIcons}#wp`} /></a></svg>
        </div>
      </div>
    </div>
  )
}

export default Article;