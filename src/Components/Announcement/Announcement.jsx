import React from 'react'
import './Announcement.css'
import { MdClose } from "react-icons/md";

function Announcement( {setToggleAnnouncement} ) {

    const handleClick = () => {
        setToggleAnnouncement(false);
      }

  return (
    
    <div className="announcementContainer">
        <div className="exitIcon">
        <MdClose className='icon' onClick={handleClick} />
        </div>
        <div className="annoucementTitle">
            Test Announcement...
        </div>
        <div className="announcementContent">
            This website is a work in progress.
        </div>
    </div>
  )
}

export default Announcement
