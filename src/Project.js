import React from "react";
import "./Project.css";
import Project1 from './img/ishop mockup.png';
import Project2 from './img/lyma mockup.png';
import Project3 from './img/send me.jpg';
import Project4 from './img/katlen.jpg';
import Project5 from './img/native.png';
import Project6 from './img/ui design.png';


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
             
{/*              <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;
