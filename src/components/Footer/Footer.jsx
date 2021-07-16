import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';


const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
 

  return (
<div class="footer-bg">
  <a href="https://github.com/katherinevgomez">
   <img class="gh-logo" src="https://cdn.onlinewebfonts.com/svg/img_44605.png"></img>
   </a>
   <a href="https://www.linkedin.com/in/katherine-v-gomez-34343393/">
   <img class="gh-logo" src="https://maxcdn.icons8.com/windows8/PNG/512/Social_Networks/linkedin-512.png"></img>
   </a>
</div>
  )}
export default Footer;
