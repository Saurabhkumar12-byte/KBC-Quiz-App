import React from 'react'
import ab from '../components/assets/bigBs.png'
import ablike from '../components/assets/ab.png'
import logo from '../components/assets/logo.png'
import { Link } from 'react-router-dom';
export default function Winning(props) {

    let winningActive = () => {
        let winningPage = document.getElementById("winningPage");
        winningPage.classList.add("hidden")
    }
    return (
        <>
            <div id='winningPage' className="container winning_container hidden  ">
                <div className="winning_box">
                    <div className="win_left_box">
                        <button onClick={winningActive} className="left_menu flex m22 wmenuBtn">
                            <Link to="/">
                                <div className="menu_box">
                                    <span className="material-symbols-outlined">
                                        home
                                    </span>
                                </div>
                            </Link>
                        </button>
                        <div className="win_ab_img">
                            <img src={ab} alt="ab" />
                        </div>
                    </div>
                    <div className="win_right_box">
                        <div className="win_result">
                            <div className="win_result_img">
                                <img src={logo} alt="" />
                            </div>
                            <h5>CONGRATULATIONS</h5>
                            <h2> SOURAV</h2>
                            <h3>WIN</h3>
                            <h1><span className="material-symbols-outlined">
                                currency_rupee
                            </span>{props.price}</h1>
                            <div className="win_result_img2">
                                <img src={ablike} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
