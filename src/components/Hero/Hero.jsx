import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
     <div class="navbar">
      <a class="linkstyle" href="/"><h2><b>Katherine Gomez</b></h2><h3>UX Designer</h3></a>
      <a class="linkstyle" href="/"><h4>Home</h4></a>
      <a href="https://www.docdroid.net/ZXqOjAs/uxdesignerkatherinegomez-pdf"><h4>Resume</h4></a>
      <a href = "mailto:katherinegomez.mfs@gmail.com"><h4>Contact</h4></a>
    </div>
    
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Howdy, my name is'}{' '}
            <span className="text-color-main">{name || 'Katherine Gomez'}</span>
            <br />
            {subtitle || "I'm a UX Designer"}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Get to Know Me'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
    </>
  );
};

export default Header;
