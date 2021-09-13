import React, { useContext, useState, useEffect } from 'react';
import Title from '../components/Title/Title';
import '../style/styles.css';
import { Link } from 'react-scroll';


export default () => {

  return ( 
    <>
    <div class="navbar">
      <a class="linkstyle" href="/"><h2><b>Katherine Gomez</b></h2><h3>UX Designer</h3></a>
      <div class ="navbarLinks">  
      <a class="linkstyle" href="/"><h4>Home</h4></a>
      <a class="linkstyle" href="https://docs.google.com/document/d/1PElEYx1_ZqdVoUcLF0AlUmqOlbWGWAxepUKjydl54eg/edit?usp=sharing"><h4>Resume</h4></a>
      <a class="linkstyle" href = "mailto:katherinegomez.mfs@gmail.com"><h4>Contact</h4></a>
      </div>
    </div>


    <div class="ecommerceHeading">
     <img class="heading" src="https://s6.gifyu.com/images/MoorecoOutletThumbnail.jpg" alt="Furniture E-commerce App Showcase"/> 
     </div>
    <br/> <br/> <br/>
     <Title title="Furniture E-Commerce App" />
    <h1 class="h1ecommerce">Business Background</h1>
    <br/>
    <p class="ecommerceText">MooreCo Inc is B2B furniture manufacturing company that primarily focuses on creating school furniture and exclusively sells to authorized dealers.</p>
    <h3><b>Role:</b> UX Researcher, UI Designer</h3>
    <br/>
    <h3><b>Responsibilities:</b> Market Research, User Personas, Usability Testing, Sketching, Mid Fidelity Wireframe, High Fidelity Prototype</h3>
    <br/>
    <h3><b>Time:</b> 4 Day Sprint</h3>
    <br/> 
    <h1 class="h1ecommerce">Defining The Problem</h1>
    <br/>
    <p class="ecommerceText"> Due to COVID-19 many schools went fully remote in 2020 and this continued through 2021. School furniture upgrades were halted thus resulting in a <b>dramatic loss of revenue</b> for MooreCo.</p>
    <br/> 
    <h1 class="h1ecommerce">User Persona</h1>
    <br/>
    <img class="heading2" src="https://s6.gifyu.com/images/Tamani00daf48bcaf997be.png" alt="Tamani User Persona"/>
    <br/> <br/> <br/>
    <h1 class="h1ecommerce">Goals</h1>
    <br/>
    <h2><b>Business Goals</b></h2>
      <p>Increase sales, customer conversion, provide value to the user to maxize customer conversion.</p>
    <br/>
    <h2><b>User Goals</b></h2>
      <p>Easily find and shop for furniture pieces, easily view and select furniture finishes, easily track delivery status.</p>
      <br/> <br/>
      <h1 class="h1ecommerce">Market Research</h1>
    <p class="ecommerceText">Overstock reported more than a <b>100% increase</b> in home office furniture since the COVID-19 outbreak.
    <br/><br/>
    Havenly has seen increased interest in home office designs. A spokesperson said office-wear now makes up <b>26% of its sales</b>, compared with 6% in 2019.
    <br/><br/>
    Room & Board stated that annual <b>sales are up 30%</b> from a year ago, to nearly $500 million, adding that it expects to break $600 million this year.
    <br/><br/>
    <b>Over 49% of customers</b> use their mobile phone to purchase products online.
    </p>
      <h2><b>WFH Potential</b></h2>
    <p class="ecommerceText">After reviewing these statistics, it reinforced the necessity to create a B2C model to achieve business goals and why it’s essential to use a mobile first approach.</p>
    <br/>
      <h1 class="h1ecommerce">Solution</h1>
      <br/>
      <h2><b>Adapt or Die</b></h2>
      <p class="ecommerceText">In an effort to create a new revenue stream for MooreCo I decided to implement a B2C business strategy and target the WFH market in order to stay competitive.</p>
      <br/>
      <h1 class="h1ecommerce">Initial Ideation and Exploration</h1>
      <br/>
      <img class="sketches" src="https://s6.gifyu.com/images/Initial-Sketches9568f402bc995ff0.jpg" alt="initial sketches"/>
      <p class="ecommerceText">I started sketching based on the current website and established the hamburger button as a way to get to the categories but adding the Shop drop down menu with the rest of the categories proved to be <b>too crowded</b>. I also used the existing drop down menu to select furniture finishes but <b>it wasn’t visual enough</b> to streamline a fast mobile experience.</p>
      <br/>
      <h1 class="h1ecommerce">Usability Testing #1</h1>
      <br/>
      <h2><b>Customers Like What They Are Used To</b></h2>
      <p class="ecommerceText">The results of the first Usability Test were very insightful and informed me that customers are already used to online shopping experiences so the main goal for my second sketching iteration is to closely mimic what’s already out there in the market rather than reinvent the wheel.
      <br/><br/>
      Users wanted a <b>cart icon</b> to easily see their selected items, an easier way to find <b>product categories</b>,
      to see what their product finish choices looked like in real time and to see coupon and Paypal options
      </p>
      
      <h2><b>New Sketches After User Feedback</b></h2>
      <img class="sketches" src="https://s6.gifyu.com/images/Sketches-After-Feedback5362f40284ea368e.jpg" alt="sketches after feedback"/>
      <br/>
      <p class="ecommerceText">On the second iteration of sketches I defined what features had to be implemented to give users the best online shopping experience possible.
      <br/>
      </p>
      <br/>
      <h1 class="h1ecommerce">Mid Fidelity Wireframes</h1>
      <br/>
      <img class="sketches" src="https://s6.gifyu.com/images/Wireframe1.png" alt="mid fidelity wireframes set 1"/>
      <img class="sketches" src="https://s6.gifyu.com/images/Wireframe2.png" alt="mid fidelity wireframes set 2"/>
      <br/><br/>
      <h2><b>Focusing on Functionality</b></h2>
      <p class="ecommerceText">I created a wireframe with plenty of visual elements and used text minimally to support the graphics.</p>
      <br/>
      <h1 class="h1ecommerce">Usability Testing #2</h1>
      <p class="ecommerceText">During the second Usability Test I conducted I learned that I missed a one important thing:
      users want to be able to add or remove item quantities directly at checkout.</p>
      <br/>
      <h1 class="h1ecommerce">High Fidelity Wireframes</h1>
      <br/>
      <img class="sketches" src="https://s6.gifyu.com/images/HighFidelity1.png" alt="high fidelity wireframes set 1"/>
      <img class="sketches" src="https://s6.gifyu.com/images/HighFidelity2.png" alt="high fidelity wireframes set 2"/>
      <img class="sketches" src="https://s6.gifyu.com/images/HighFidelity3.png" alt="high fidelity wireframes set 3"/>
      <img class="sketches" src="https://s6.gifyu.com/images/HighFidelity4.png" alt="high fidelity wireframes set 4"/>
      <br/><br/>
      <h1 class="h1ecommerce">High Fidelity Prototype</h1>
      <br/>
      <img class="prototypes" src="https://s6.gifyu.com/images/Prototype1.gif" alt="high fidelity prototype part 1"/>
      <br/><br/>
      <p class="ecommerceText">By visually displaying the categories in the home page I gave users a quick way to move around the site and go directly where they need to go.
      I displayed the finish choices in bubbles and gave a real time showcase of what the user choices would look like on the product.</p>
      <img class="prototypes" src="https://s6.gifyu.com/images/Prototype2.gif" alt="high fidelity prototype part 2"/>
      <br/><br/>
      <p class="ecommerceText">I wanted to give users a quick and easy way to check on their order status directly on their account page to minimize click arounds and give a straight forward experience.</p>
      <a class="cta-btn cta-btn--hero" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/jA6OZoisU9XkuvY8cxSJT4/MooreCo-Outlet-E-Commerce-Store?page-id=56%3A1569&node-id=56%3A1634&viewport=469%2C407%2C0.07514500617980957&scaling=scale-down&starting-point-node-id=56%3A1634">Clickable Prototype</a>
      <br/><br/><br/>
      <h1 class="h1ecommerce">Outcomes</h1>
      <br/>
      <h2><b>Don't Make Them Think, Let Them Buy</b></h2>
      <p class="ecommerceText">The final solution was an E-Commerce platform that was <b>easy to use</b>, and similar to major E-Commerce platforms. For Heuristics sake I didn’t want to make customers think about the shopping process and rather be <b>familiar enough</b> to what they are already using.
I also designed the platform to allow returning customers to experience a <b>faster checkout</b> by saving the billing information and shipping address to their account.
</p>
<br/>
      <h1 class="h1ecommerce">Lessons</h1>
      <br/>
      <h2><b>Test Early, Fail Cheap</b></h2>
      <p class="ecommerceText">I learned the importance of prioritizing Usability Testing early on the Product Development Process so I could maximize time and avoid wasting resources building something that customers don’t want to use. </p>
    
    
    <div class="footerProjects">
    <a class="cta-btn cta-btn--hero" target="_blank" rel="noopener noreferrer" href="/">Go Back Home</a>
    </div>
    </>
  );

}
 

