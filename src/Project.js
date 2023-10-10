import React from "react";
import "./Project.css";
import Project1 from './img/ishop mockup.png';
import Project2 from './img/lyma mockup.png';
import Project3 from './img/send me.jpg';
import Project4 from './img/katlen.jpg';
import Project5 from './img/native.png';
import Project6 from './img/ui design.png';
import Project7 from './img/blog.png';
import Project8 from './img/election.png';
import Project9 from './img/online-assignment.png';
import Project10 from './img/salon.jpeg';
import Project11 from './img/app-ui.jpeg';
import Project12 from './img/desktop.png';


function Project() {
  return (
    <div className="project component__space " id="Portfolio">
      <div className="heading">
        <h1 className="heading" data-aos="fade-up">My Latest Project</h1>
        <p className="heading p__color" data-aos="fade-up">
          Below are some of the major projects which i have created.
        </p>
        <p className="heading p__color" data-aos="fade-up">
          Ecommerce website , landing page , portfolio , etc
        </p>
      </div>
       <div className="container" >
           <div className="row">
             
             <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">ishop</h5>
                     <h5 className="project__text">An Ecommerce Website</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>


             <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">MARCO</h5>
                     <h5 className="project__text">Business landing page</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>


             <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">The Siren</h5>
                     <h5 className="project__text">Blogging website</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>


             <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Solution</h5>
                     <h5 className="project__text">Store images on cloud</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>


             <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Send Me</h5>
                     <h5 className="project__text">Email Marketing templates</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>


             <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Chattingo</h5>
                     <h5 className="project__text">App UI Design</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>

            

        <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project7} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Blog website</h5>
                     <h5 className="project__text">first front-end react website</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>

  <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project8} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Election</h5>
                     <h5 className="project__text">College election website</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>

  <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project9} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Test-Me</h5>
                     <h5 className="project__text">Online Assignment Website</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>

  <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project10} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">HairWayOn App</h5>
                     <h5 className="project__text">Real time salon locator</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>

                       <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project12} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Rescuter</h5>
                     <h5 className="project__text">Application to connect rescue nearby agency</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>

  <div className="col__3" data-aos="flip-left" ata-aos-easing="linear"
     data-aos-duration="500">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project11} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className=" mono">Mobile Ui design</h5>
                     <h5 className="project__text">Interactive Ui UX design</h5>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     </div>
                 </div>
             </div>
             
{/*              <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;
