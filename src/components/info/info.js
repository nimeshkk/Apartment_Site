import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function info() {
  return (
    <div className='info-section'>
        <div className='info-container'>
            
      <div className='cardinfo-grid'>
        <div className='singleCard-grid'>
            <div className='infoIcon'>
            <FontAwesomeIcon icon={faHouse} />
            </div>
            
            <span className='cardTitle'>dfsfsdfsd</span>
            <p>jhcajhavkhtdht</p>
        </div>
      </div>

      <div className='cardinfo-grid'>
        <div className='singleCard-grid'>
            <div className='infoIcon'>
            <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className='cardTitle'>dfsfsdfsd</span>
            <p >jhcajhajhgsdjahdjjhvjhzcv</p>
        </div>
      </div>

        <div className='cardinfo-grid'>
        <div className='singleCard-grid'>
            <div className='infoIcon'>
            <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className='cardTitle'>dfsfsdfsd</span>
            <p>jhcajhajhgsdjahdjjhvjhzcv</p>
        </div>
        
        </div>

        </div>
    </div>
  )
}
