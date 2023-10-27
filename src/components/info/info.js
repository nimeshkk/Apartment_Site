import React, { useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMedkit, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FaPlaystation, FaTrophy, FaTypo3 } from 'react-icons/fa';

export default function Info() { 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('view');
        } else {
          entry.target.classList.remove('view');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.show2');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='info-section' id='info'>
      <div className='info-container show2'>
        <div className='cardinfo-grid'>
          <div className='singleCard-grid '>
            <div className='infoIcon'>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className='cardTitle'>Luxury</span>
            <p>Luxury facility</p>
          </div>
        </div>

        <div className='cardinfo-grid'>
          <div className='singleCard-grid'>
            <div className='infoIcon'>
              <FontAwesomeIcon icon={faMedkit} />
            </div>
            <span className='cardTitle'>Medical</span>
            <p>Free Medical facility</p>
          </div>
        </div>

        <div className='cardinfo-grid'>
          <div className='singleCard-grid '>
            <div className='infoIcon'>
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <span className='cardTitle'>Top Rank</span>
            <p>This is Top Ranking Apartment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

