import React from 'react'
import REWARDLIST from '../components/Rewardlist.js'
import logo from "../components/assets/logo.png";

export default function Reward() {

  return (
    <>
      <div id='rewardPage' className="container price_container">
        <div className="left-side-money">
          <div className="top_left_side_money">
            <div className="balanceDisplay"  >You Win :</div>
          </div>
          <div className="bottom_left_side_money">
            <div className="logo_img">
              <img src={logo} alt="logo"  />
            </div>
          </div>
        </div>
        <div className="right-side-money">
          <ul className="moneychart-ul">
            <li className='moneychart-li center'>Prize Table</li>
            {REWARDLIST.map((m) => (
              <li id = {`li${m.id}`}  className='' >
                <div className="moneynumber flex ">{m.id}.</div>
                <div className="moneyamount">
                  <span className="material-symbols-outlined">
                    currency_rupee
                  </span>
                  <span>{Number(m.amount).toLocaleString()}</span>
                  </div>
              </li>
            )).reverse()}
          </ul>
        </div>
      </div>
    </>
  )
}
