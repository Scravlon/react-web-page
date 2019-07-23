import React from 'react';
import horizon from './images/horizon.png';
import greenlight from './images/greenlight.png';
import snooze from './images/snooze.png';
import splitme from './images/splitme.png';
import period from './images/1.png';
import nfclogo from './images/nfclogo.png';

function Portf() {
  return (
    <div>
      <table className="tab" cellPadding="0" border="0" align="center" cellSpacing="0">
        <tbody>

          <tr>
            <td colSpan="2">
              <h3><strong>Projects</strong></h3>
              <p>scravlon@scravlon-web:~$ ls projects</p>
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
                   <font color="red">Android App</font>
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
                   <font color="red">Unity3D Game</font>
                     <br/>
                  The Horizon
                </div>
              </div>
            </td>
            <td>
              <div className="rightDivPort">
                <a href="https://github.com/Scravlon/The-Horizon">
                 <img src={horizon} alt="me"/>
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leftDivPort">
                <a href="https://github.com/Scravlon/SplitMe">
                 <img src={splitme} alt="me"/>
                </a>
              </div>
            </td>
            <td>
              <div className="rightDivPort">
                <div className="portModText">
                  <font color="red">Android App</font>
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
                   <font color="red">Unity3D Game</font>
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
                 <font color="red">Android App</font>
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
                 <font color="red">Unity3D Game</font>
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
