import React, { useContext, useState, useEffect } from 'react';
import Title from '../components/Title/Title';
import '../style/styles.css';
import { Link } from 'react-scroll';


export default () => {

  return ( 
    <>
    <div class="navbar">
      <a class="linkstyle" href="/"><h2><b>Katherine Gomez</b></h2><h3>UX Designer</h3></a>
      <a class="linkstyle" href="/"><h4>Home</h4></a>
      <a href="https://www.docdroid.net/ZXqOjAs/uxdesignerkatherinegomez-pdf"><h4>Resume</h4></a>
      <a href = "mailto:katherinegomez.mfs@gmail.com"><h4>Contact</h4></a>
    </div>


    <div class="goingonceHeading">
     <img class="heading" src="https://s6.gifyu.com/images/Going-Once-Cover.png" alt="Sustainability App Showcase"/> 
     </div>
    <br/> <br/> <br/>
     <Title title="Sustainability App" />
    <h1 class="h1goingonce">Overview</h1>
    <br/>
    <p class="ecommmerceText"><b>75% of America's waste is recyclable and we only recycle around 30% of it.
</b></p>
    <p class="ecommerceText">The environment is an exhaustible resource, therefore it is important to use its resources rationally and protect it for the good of the Earth, our environment, humanity and all living things. </p>
    <h3><b>Role:</b> UX Researcher, UI Designer</h3>
    <br/>
    <h3><b>Responsibilities:</b> Competitive Analysis, Affinity Mapping, User Flows, Branding, Rapid Prototyping</h3>
    <br/>
    <h3><b>Designers:</b> Katherine, Lena, Rachel</h3>
    <br/>
    <h3><b>Developers:</b> Matt, Sean, Antonio</h3>
    <br/>
    <h3><b>Time:</b> 2 Week Sprint</h3>
    <br/> 
    <h1 class="h1goingonce">Defining The Problem</h1>
    <br/>
    <p class="ecommerceText">Our users need an efficient way to <b>discover specific items</b> in good condition <b>within an accessible area</b> to reuse and upcycle to save money and the environment.</p>
    <img class="heading2" src="https://s6.gifyu.com/images/Going-Once-Presentation.jpg" alt="discarded furniture on street" />
    <p class="ecommerceText"><b>How May We Solve The Problem?</b> <br/><br/>By contributing to <b>Conscious Consumerism</b> which is shopping in ways one believes makes a positive social, environmental or economic impact.

<br/>By being a <b>Specialized Platform</b> with an active community engagement, to spread awareness and optimize the process of notifying, locating and distributing the artifacts.</p>
    <h1 class="h1goingonce">User Persona</h1>
    <br/>
    <img class="heading2" src="https://s6.gifyu.com/images/Going-Once-User-Persona.jpg" alt="Elsi User Persona"/>
    <br/> <br/> <br/>
    <h1 class="h1goingonce">User Goals</h1>

      <p class="ecommerceText">
      After collecting data from 60+ user surveys from the target audience we learned that users:

      <br/><br/>
    <b>Often search for specific items<br/>
Make sustainable choices<br/>
Like the novelty of discovery</b>
<br/><br/>
Our users expressed that they have an interest in reusing and upcyling because they want to save money and the environment and 9/10 said they would recycle more if it was easier. 
    
</p>

      <br/> <br/>

      <h1 class="h1goingonce">Interviews and Affinity Mapping</h1>
    <p class="ecommerceText">After conducting 4 one on one interviews we synthesized the information we gathered into Affinity Maps to create an ideal user persona.

    <br/><br/>
    <img class="heading2" src="https://s6.gifyu.com/images/Going-Once-Affinity-Map.jpg" alt="Affinity Map"/>
    <br/><br/>
    Users explained that they often use social media when searching for new items and really enjoy the art of <b>discovering a one-of-a-kind piece</b> with character.
    Users emphasized the importance of sustainability in their lives and preferred stooping and thrift stores to buying new.
    
    <br/><br/> Users stated that they like to search for a specific category of an item when stopping or thrifting, so being able to <b>find that item quickly</b> is important to them, as well as knowing if the item is still available. 
    Renters who moved frequently—opt for cheaper alternatives such as Ikea or Wayfair. When it’s time to relocate, it’s often more <b>convenient to toss your furniture</b> and start over from scratch than pay to move a large item to a new home.
    </p>
    <br/>
    <h1 class="h1goingonce">Competitor Analysis</h1>
    <br/>
    <p class="ecommerceText">I investigated and compared the features that our competitors had to evaluate which features would be worth to offer to make us stand out in the market.</p>
    <br/>
    <img class="heading2" src="https://s6.gifyu.com/images/Competitor-analysis.png" alt="Competitor analysis" />
    <br/><br/><br/>
    <br/>
    <h1 class="h1goingonce">User Flows</h1>
    <br/>
    <p class="ecommerceText">By creating multiple user flows we are able to define what tasks our users need to complete to use the app and how they should get there.</p>
    <br/>
    <img class="heading3" src="https://s6.gifyu.com/images/User-Flows.jpg" alt="User Flows" />
    <br/><br/><br/>
   
      <h1 class="h1goingonce">Solution</h1>
      <br/>
      <h2><b>Bringing the Thrill of Discovery to Sustainability</b></h2>
      <p class="ecommerceText">We believe that by creating an app which will enable users to discover specific items and help them to acquire them quicker to help close monetary and environmental gaps.</p>
      <br/>
      <h1 class="h1goingonce">Initial Ideation and Exploration</h1>
      <br/>
      <img class="heading2" src="https://s6.gifyu.com/images/going-once-sketch2.jpg" alt="initial sketches 1"/>
      <img class="heading2" src="https://s6.gifyu.com/images/going-once-sketch1.jpg" alt="initial sketches 2"/>
      <img class="heading2" src="https://s6.gifyu.com/images/going-once-sketch3.jpg" alt="initial sketches 3"/>
      <p class="ecommerceText">Our entire team did a design studio together and we discussed what we were looking for visually. After reviewing all of the team's contributions, 
      I sketched a couple of screens that gathered the best way to show features and implemented them into more concise elements with better spacing, padding and margin.</p>
      <br/>
      
      
      <h1 class="h1goingonce">Mid Fidelity Wireframes</h1>
      <br/>
      <img class="sketches" src="https://s6.gifyu.com/images/Lofi-Wireframe.jpg" alt="mid fidelity wireframes set 1"/>
      <br/><br/>

      <p class="ecommerceText">We wanted to put <b>discovery</b> at the forefront and designed the app to be immediately useful after downloading the app by showing items around the user's surroundings in the map <b>even as a guest</b>.</p>
      <br/>
      
      <h1 class="h1goingonce">High Fidelity Wireframes</h1>
      <br/>
      <img class="sketches" src="https://s6.gifyu.com/images/Hifi-Wireframe.jpg" alt="high fidelity wireframes set 1"/>
      
      <br/><br/>
      <p class="ecommerceText">We opted for a fresh and modern look with a bright and saturated color palette. Referencing <b>Color Psychology</b> we chose green as the primary color because of its association with sustainability and ecological consciousness.</p>
      <h1 class="h1goingonce">High Fidelity Prototype</h1>
      <br/>
      <img class="prototypes" src="https://s6.gifyu.com/images/GoingOnce-Prototype1.gif" alt="high fidelity prototype part 1"/>
      <br/><br/>
      <p class="ecommerceText">An important feature of our app is the ability to communicate with other users to check the availability of an item which most of our competitors lacked.</p>
      <img class="prototypes" src="https://s6.gifyu.com/images/GoingOnce-Prototype2.gif" alt="high fidelity prototype part 2"/>
      <br/><br/>
      <p class="ecommerceText">We wanted to make posting an item simple and familiar so we mimicked modern image posting platforms with the gallery view and image taking function. </p>
      <a class="cta-btn cta-btn--hero" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/C138pCE67HwXMe59iTKmMU/Going-Once?node-id=83%3A2744&scaling=scale-down&page-id=51%3A148&starting-point-node-id=83%3A1944&show-proto-sidebar=1">Clickable Prototype</a>
      <br/><br/><br/>
      <a class="cta-btn cta-btn--hero" target="_blank" rel="noopener noreferrer" href="https://going-once.herokuapp.com/">Deployed App</a>
      <br/><br/><br/>
      <h1 class="h1goingonce">Outcomes</h1>
      <br/>
      <h2><b>How Our Product Stands Out</b></h2>
      <p class="ecommerceText">While there are popular stooping accounts and groups on social media right now, there still isn't an app <b>exclusively dedicated</b> to it. Going Once offers users the opportunity to find and share free stuff close to them; bringing <b>community and upcycling</b> to their fingertips.
</p>
<br/>
      <h1 class="h1goingonce">Lessons</h1>
      <br/>
      <p class="ecommerceText">I learned to work with a <b>cross-functional team</b>, how to work with developer constraints and how to prioritize feature funtionality on a short sprint. </p>
    
    
    <div class="footerProjects">
    <a class="cta-btn cta-btn--hero" target="_blank" rel="noopener noreferrer" href="/">Go Back Home</a>
    </div>
    </>
  );

}
 

