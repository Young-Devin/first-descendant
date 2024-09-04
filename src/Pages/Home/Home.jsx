import React, { useState, useEffect } from 'react';
import Announcement from '../../Components/Announcement/Announcement.jsx'
import fdHomeBg from '../../Assets/fd_home_bg.png';
import levelIcon from '../../Assets/level_icon.jpg';
import './home.css';
import { FaSteam } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsCalendar3Week } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { fd_characters } from '../../Assets/data.js';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [toggle, setToggle] = useState(false);
    const [toggleAnnouncement, setToggleAnnouncement] = useState(false);
    const [toggleSpecEvent, setToggleSpecEvent] = useState(false);
    const [toggleSupportCreator, setToggleSupportCreator] = useState(false);
    const [characterDefault, setCharacterDefault] = useState("1");
    const navigate = useNavigate()

    const toggleMenu = () => {
        if (toggle === false) {
            setToggle(true)
            setToggleSpecEvent(false)
            setToggleSupportCreator(false)
        }
        else {
            setToggle(false)
        }
        
    }

    const NavigateToCharPage = () => {
        navigate('/Character');
    }

    const toggleAncmtMenu = () => {
        if (toggleAnnouncement === false) {
            setToggleAnnouncement(true)
            setToggleSpecEvent(false)
        }
        else {
            setToggleAnnouncement(false)
        }
        
    }

    const toggleSpecEventMenu = () => {
        if (toggleSpecEvent === false) {
            setToggleSpecEvent(true)
            setToggleSupportCreator(false)
        }
        else {
            setToggleSpecEvent(false)
        }
        
    }

    const toggleSupportCreatorMenu = () => {
        if (toggleSupportCreator === false) {
            setToggleSupportCreator(true)
            setToggleSpecEvent(false)
        }
        else {
            setToggleSupportCreator(false)
        }
        
    }

    const characterClicked = (charId) => {       
            setCharacterDefault(charId)
        
    }

    useEffect = (() => {

    }, [toggle, toggleAnnouncement, toggleSpecEvent, characterDefault])

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
            <button className="startButton" type='submit' onClick={NavigateToCharPage}>
                Start Character Build
            </button>
        </div>

        <div className="gameIcons">
        <TfiAnnouncement className="icon" onClick={toggleAncmtMenu} />
        <BsCalendar3Week className="icon" onClick={toggleSpecEventMenu} />
        {
            toggleSpecEvent?
            <div className="specEventContainer">
                <span className="specEventContent">
                    No Event in progress.
                </span>
            </div>
            :
            <div></div>
        }
        <FaHandshake className="icon" onClick={toggleSupportCreatorMenu} />

        {
            toggleSupportCreator?
            <div className="supportContainer">
                <div className="supportTitle">
                    <span>Creator Support</span>
                </div>

                <div className="supportContentContainer">
                    <div className="supportImage">
                        <FaHeart className="icon" />
                    </div>
                    <div className="supportContentInfo">
                        <div className="supportContentDetails">
                            <span>
                                Support a First Descendant Creator
                            </span>
                        </div>
                        <div className="moreDetails">
                            <span>
                                Learn More
                            </span>
                            <MdKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                </div> 
            </div>
            :
            <div></div>
        }

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