
import './Footer.css';
import React, { useEffect, useState } from 'react';
import CIcon  from '@coreui/icons-react';
import {cibReact,cifPt} from '@coreui/icons';

const Footer = () => {
 

  return (
    <div className='Container'>
      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">RodasaL</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br></br>
          
      
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2024 RodasaL. No rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <CIcon className='icons' icon={cibReact}  style={{ width: '2.6%'}}  /> remotely from Portugal <CIcon className='icons' icon={cifPt}  style={{ width: '2.6%'}}  /></span>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Footer;
