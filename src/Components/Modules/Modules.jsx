import React from 'react';
import './modules.css';
import narcissism from '../../Assets/narcissism.jpg';

const Modules = ({symbol, symbolText, img, modCapacity, name, modType}) => {
  return (
    <div className='moduleContainer'>
      <div className="symbol">
          <span>{modCapacity}</span>
      </div>
      <div className="skillIcon">
        <img src={img} alt={name} />
      </div>
      <div className="skillName">
        <span>{name}</span>
      </div>
      <div className="skillType">
        <span>{modType}</span>
      </div>
    </div>
  )
}

export default Modules