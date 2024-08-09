import React, { useState, useEffect } from 'react';
import Announcement from '../../Components/Announcement/Announcement.jsx'
import fdHomeBg from '../../Assets/fd_home_bg.png';
import levelIcon from '../../Assets/level_icon.jpg';
import './home.css';
import { FaSteam } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsCalendar3Week } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { fd_characters } from '../../Assets/data.js'

function Home() {

    const [toggle, setToggle] = useState(false);
    const [toggleAnnouncement, setToggleAnnouncement] = useState(false);
    const [characterDefault, setCharacterDefault] = useState("1");

    const toggleMenu = () => {
        if (toggle === false) {
            setToggle(true)
        }
        else {
            setToggle(false)
        }
        
    }

    const toggleAncmtMenu = () => {
        if (toggleAnnouncement === false) {
            setToggleAnnouncement(true)
        }
        else {
            setToggleAnnouncement(false)
        }
        
    }

    const characterClicked = (charId) => {       
            console.log(charId)
            setCharacterDefault(charId)
        
    }

    useEffect = (() => {

    }, [toggle, toggleAnnouncement, characterDefault])

  return (
    
    <div className='container'>

        

        
        <img className='imageBackground' src={fdHomeBg} alt="" />

        

        <div className="playerCard">
            <div className="level">
                <p> 17</p>
                <img className='icon' src={levelIcon} alt="Level icon"/> 
            </div>
            <div className="playCardContent">
                <h2 className="name">
                    ImmortalReach#2732
                </h2>
                <span className="platformName">
                    <FaSteam className='icon'/> ImmortalReach
                </span>
            </div>
        </div>

        <div className="startButtonContainer">
            <button className="startButton" type='submit'>
                Start Character Build
            </button>
        </div>

        <div className="gameIcons">
        <TfiAnnouncement className="icon" onClick={toggleAncmtMenu} />
        <BsCalendar3Week className="icon" />
        <FaHandshake className="icon" />
        </div>

        <div className="footer">
        <FaArrowRight className='icon'/> <span href="" className="selectCharacter" onClick={toggleMenu}>Descendant List</span>
        </div>

        {
            toggle?
                <div className="characterSelection">
                    <div className="characterContainer">
                        {fd_characters.map(characters =>
                            (
                                <div key={characters.id} className="character" onClick={() => characterClicked(characters.id)}>
                                    <img src={characters.img} alt={characters.name} />
                                    
                                    <span className='charLevel'>
                                        {
                                            characterDefault === characters.id?
                                            <IoIosCheckmarkCircle className='icon' />
                                            :
                                            <span className='icon'></span>
                                        }
                                        
                                        Lv. {characters.level}
                                        
                                    </span>
                                    <div className="charName">
                                    <span>{characters.name}</span>
                                    </div>
                                </div> 
                            )
                        )}
                    </div>
                    
                </div>
                :
                <div></div>
            
        }

        {
            toggleAnnouncement?
                <Announcement setToggleAnnouncement={setToggleAnnouncement}/>
            :
            <div></div>
        }

        {
            toggleAnnouncement?
            <div className="blurPage">

            </div>
            :
            <div></div>
        }


    </div>
  )
}

export default Home