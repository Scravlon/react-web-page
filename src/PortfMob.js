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
    <div className="pportMob">
      <table className="tab" cellPadding="0" border="0" align="center" cellSpacing="0">
        <tbody>

          <tr>
            <td colSpan="2">
              <h1><strong>Projects</strong></h1>
              <h5>scravlon@scravlon-web:~$ ls projects</h5>
            </td>

          </tr>
          <tr>
            <td>
              <div className="leftDivPort">
                <a href="https://github.com/Scravlon/GreenLight">
                 <img src={greenlight} alt="me" />
                </a>
              </div>
            </td>
            <td>
              <div className="rightDivPort">
                <div className="portModText">
                   <font color="red"><strong>Android App</strong></font>
                <br/>
                  GreenLight
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leftDivPort">
                <div className="portModText">
                   <font color="red"><strong>Android Farmer Marketplace</strong></font>
                     <br/>
                  CropShop
                </div>
              </div>
            </td>
            <td>
              <div className="rightDivPort">
                <a href="https://github.com/cse442-fall-2019-offering/442projects-ol-mcdonald">
                 <img src={cropshop} alt="me"/>
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leftDivPort">
                <a href="https://play.google.com/store/apps/details?id=net.ddns.scravlon.splitmefull">
                 <img src={splitme} alt="me"/>
                </a>
              </div>
            </td>
            <td>
              <div className="rightDivPort">
                <div className="portModText">
                  <font color="red"><strong>Android App</strong></font>
                    <br/>

                  SplitMe
                </div>
            </div>
            </td>
          </tr>

          <tr>

            <td>
              <div className="leftDivPort">
                <div className="portModText">
                   <font color="red"><strong>Unity3D Game</strong></font>
                <br/>
                  Snooze
                </div>
            </div>
            </td>
            <td>
              <div className="rightDivPort">
                <a href="https://play.google.com/store/apps/details?id=com.scravlon.snooze">
                 <img src={snooze} alt="me"/>
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leftDivPort">
                <a href="https://github.com/Scravlon/CreditCardWallet">
                 <img src={nfclogo} alt="me"/>
                </a>
              </div>
            </td>
            <td>
              <div className="rightDivPort">

                <div className="portModText">
                 <font color="red"><strong>Android App</strong></font>
              <br/>
                CreditCardWallet
              </div>
            </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leftDivPort">
                <div className="portModText">
                 <font color="red"><strong>Unity3D Game</strong></font>
              <br/>
                Periodically Falls
              </div>
            </div>
            </td>
            <td>
              <div className="rightDivPort">
                <a href="https://github.com/Scravlon/Periodically-Falls">
                 <img src={period} alt="me"/>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Portf;
