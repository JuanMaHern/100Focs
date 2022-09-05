import React from "react";
import '../Stylesheet/SocialContact.css';
import SocialIcons from '../Images/SocialIcons.svg';

export default function SocialContact () {
  return (
    <div className="social-contact">
      <svg className="social-icon"><a href="https://wa.me/2494642499" target='_blank' rel="nofollow noopener noreferrer"><use href={`${SocialIcons}#wp`} /></a></svg>
      <svg className="social-icon"><a href='https://www.instagram.com/100focs/' target='_blank' rel="nofollow noopener noreferrer"><use href={`${SocialIcons}#ig`} /></a></svg>
      <svg className="social-icon"><a href='https://www.facebook.com/cien.focs' target='_blank' rel="nofollow noopener noreferrer"><use href={`${SocialIcons}#fb`} /></a></svg>
    </div>
  )
}