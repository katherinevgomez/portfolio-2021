// import React, { useContext, useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
// import { Container, Row, Col } from 'react-bootstrap';
// import Title from '../Title/Title';
// import AboutImg from '../Image/AboutImg';
// import PortfolioContext from '../../context/context';

// const Skills = () => {
//   const { skills } = useContext(PortfolioContext);
//   const { paragraphOne } = skills;

//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 769) {
//       setIsDesktop(true);
//       setIsMobile(false);
//     } else {
//       setIsMobile(true);
//       setIsDesktop(false);
//     }
//   }, []);

//   return (
//     <section style={{textAlign: "center"}} id="skills">
//       <Container>
//         <Title title="Skills" />
//         <Row className="skills-wrapper">
//           <Col md={2} sm={8}>
//           </Col>
//           <Col md={8} sm={12}>
//             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
//               <div style={{textAlign: "center"}} className="skills-wrapper__info">
//                 <p className="skills-wrapper__info-text">
//                   {paragraphOne ||
//                     "UX Research, Heuristic Evaluation, User Interviews and Surveys, Usability Testing, UI Design, Visual Design, Rapid Prototyping, Wireframing, Low Fidelity Prototypes, High Fidelity Prototypes, HTML, CSS, Sass, Javascript, React, 3D Rendering, Adobe Creative Suite, Figma, Miro, Balsamiq, GitHub, Git Branching, 3DS Max."}
//                 </p>
               
                
//               </div>
//             </Fade>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Skills;
