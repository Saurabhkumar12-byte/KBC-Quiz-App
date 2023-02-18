import React, { useEffect } from 'react'
import logo from "../components/assets/logo.png";
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import startSound from './sounds/kbc-theme.wav'


export default function Home() {
  const [themeSound] = useSound(startSound);

  // const [poem] = useSound(poemSound);
  useEffect(()=>{
    introSound()
  })
    
  function introSound() {
    themeSound()
  }
  return (
    <>
      <div className="container home1">
        <div className="menu_option">
          <div className="left_menu flex">
            <div className="menu_box">
              <span className="material-symbols-outlined">
                home
              </span>
            </div>
          </div>
          <div className="right_menu flex">
            <div className="menu_box">
              <span className="material-symbols-outlined">
                share
              </span>
            </div>
          </div>
        </div>
        <div className="home_box">
          <div className="left_content flex">
            <div className="left_content_box flex">
              <img src={logo} alt="logo"  />
            </div>
          </div>
          <div className="right_content flex">
            <div className="right_content_box">
              <div className="language_box m1 flex">
                <div className="language_option">
                  <div className="option flex">
                    <input type="radio" name="language" id="Eng" />
                    <label htmlFor="language">English</label>
                  </div>
                  <div className="option flex">
                    <input type="radio" name="language" id="Hindi" />
                    <label htmlFor="language">Hindi</label>
                  </div>
                </div>
              </div>
              <div className="user_box m1 flex">
                <div className="username_box">
                  <input type="text" id="userName" placeholder='Enter Your Name' />
                </div>
              </div>
              <div className="submit_box m1 flex">
                <button >HighScore</button>
                <Link onClick={introSound} to ="/play">Play</Link>
                {/* <button>Play</button> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hidden">
        <h1>Rotate Your Phone</h1>
        <span className="material-symbols-outlined">
          screen_rotation
        </span>
      </div>
    </>
  )
}
