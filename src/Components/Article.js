import React from "react";
import '../Stylesheet/Article.css';

function Article({ image, title, text }) {
  return(
    <div className="article-container">
      <img
        className="article-image"
        src={image}
        alt={title}
      />
      <div className='article-content'>
        <div className='article-title'>
          <h3>{title}</h3>
        </div>
        <div className='article-text'>{text}</div>
      </div>
    </div>
  )
}

export default Article;