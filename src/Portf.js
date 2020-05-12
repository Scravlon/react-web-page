import React from 'react';
import horizon from './images/horizon.png';
import greenlight from './images/greenlight.png';
import snooze from './images/snooze.png';
import splitme from './images/splitme.png';
import period from './images/1.png';
import nfclogo from './images/nfclogo.png';
import cropshop from './images/cropshop.png';

function Portf() {
  return (
    <div className="Skill">
    <section id="portfolio">
       <div className="container-fluid p-0">
         <div className="row no-gutters">
           <div className="col-lg-4 col-sm-6">
             <a className="portfolio-box" href="https://github.com/Scravlon/GreenLight">
              <img className="img-fluid" src={greenlight} alt="me" width="225px" height="300px" />
               <div className="portfolio-box-caption">
                 <div className="project-category">
                    Buffalo Innovation Challenge 2019
                 </div>
                 <div className="project-name">
                   GreenLight
                 </div>
               </div>
             </a>
           </div>
           <div className="col-lg-4 col-sm-6">
             <a className="portfolio-box" href="https://github.com/cse442-fall-2019-offering/442projects-ol-mcdonald">
             <img className="img-fluid"src={cropshop} alt="me" width="225px" height="300px" />

               <div className="portfolio-box-caption">
                 <div className="project-category ">
                   Android Farmer Marketplace
                 </div>
                 <div className="project-name">
                   CropShop
                 </div>
               </div>
             </a>
           </div>
           <div className="col-lg-4 col-sm-6">
             <a className="portfolio-box" href="https://play.google.com/store/apps/details?id=net.ddns.scravlon.splitmefull">
             <img className="img-fluid"src={splitme} alt="me" width="225px" height="300px" />

               <div className="portfolio-box-caption">
                 <div className="project-category ">
                   Android bill spliiting App
                 </div>
                 <div className="project-name">
                   SplitMe
                 </div>
               </div>
             </a>
           </div>
           <div className="col-lg-4 col-sm-6">
             <a className="portfolio-box" href="https://play.google.com/store/apps/details?id=com.scravlon.snooze">
             <img className="img-fluid"src={snooze} alt="me" width="225px" height="300px" />

               <div className="portfolio-box-caption">
                 <div className="project-category ">
                   Unity3D Game
                 </div>
                 <div className="project-name">
                   Snooze
                 </div>
               </div>
             </a>
           </div>
           <div className="col-lg-4 col-sm-6">
             <a className="portfolio-box" href="https://github.com/Scravlon/CreditCardWallet">
             <img className="img-fluid"src={nfclogo} alt="me" width="225px" height="300px" />

               <div className="portfolio-box-caption">
                 <div className="project-category ">
                   Android Credit Card Wallet App
                 </div>
                 <div className="project-name">
                   CreditCardWallet
                 </div>
               </div>
             </a>
           </div>
           <div className="col-lg-4 col-sm-6">
             <a className="portfolio-box" href="https://github.com/Scravlon/Periodically-Falls">
             <img className="img-fluid"src={period} alt="me" width="225px" height="300px" />

               <div className="portfolio-box-caption p-3">
                 <div className="project-category ">
                   Unity3D Game
                 </div>
                 <div className="project-name">
                   Periodically Falls
                 </div>
               </div>
             </a>
           </div>
         </div>
       </div>
     </section>
    </div>
  );
}

export default Portf;
