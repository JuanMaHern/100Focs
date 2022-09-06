import './App.css';
import { useState } from 'react';
import LeftMenu from './Components/LeftMenu';
import Section from './Components/Section.js';
import Logo from './Components/Logo';
import ButtonMenu from './Images/ButtonMenu.svg';
import ButtonContainer from './Components/ButtonContainer';
import SocialContact from './Components/SocialContact';

function App() {

  const newArticle = {
    id: '01',
    section: 'Menu',
    image: 'Pernil',
    title: 'Pernil',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa odit laborum! Reprehenderit dolorem culpa architecto mollitia quisquam ullam! Saepe aut a dignissimos quisquam quam expedita pariatur repellendus eveniet? Maiores!',
    amount: 15,
    price: 5000
  }

  const [section, setSection] = useState('');
  const [content, setContent] = useState([newArticle])

  const changeSection = key => {
    /* const array = JSON.parse(localStorage.getItem(key)); */
    setSection(key)
    /* if (array) {
      setContent(array);
    } else {
      setContent([]);
    } */
  }

  const agregarArticulo = article => {
    console.log(article);
    const key= article.section;
    const array = JSON.parse(localStorage.getItem(key));
    const newArray=[];
    const newObject = {
      id: article.id,
      section: article.section,
      title: article.title,
      text: article.text,
      amount: article.amount,
      price: article.price
    }
    console.log(newObject);
    if (array) {
      array.push(newObject);
      localStorage.setItem(key, JSON.stringify(array));
    } else {
      newArray.push(newObject);
      localStorage.setItem(key, JSON.stringify(newArray));
    }
  }

  

  const [open, setOpen]= useState('')
  const openMenu = () =>{
    if (open === 'opened'){
      setOpen('')
    }else {
      setOpen('opened')
    }
  }
  const closeMenu = () =>{
    if (open === 'opened'){
      setOpen('')
    }
  }

  return (
    <div className="App" onClick={closeMenu}>
      <nav className='nav-menu-container'>
        <div className='logo-container'><Logo /></div>
        <div className='cascade-menu' onClick={openMenu}><img className='button-menu-img' src={ButtonMenu} alt='Button Menu' /></div>
      </nav>
      <div className={`menu-responsive ${open}`}><ButtonContainer changeSection={changeSection} shown={section} /> <SocialContact /></div>
      <div className='left-menu-container'>
        <LeftMenu changeSection={changeSection} shown={section} />
      </div>
      <Section 
        title={section}
        array={content}
        onSubmit={agregarArticulo}
      />
    </div>
  );
}

export default App;
