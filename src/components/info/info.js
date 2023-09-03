import React, { useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

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
    <div className='info-section'>
      <div className='info-container show2'>
        <div className='cardinfo-grid'>
          <div className='singleCard-grid '>
            <div className='infoIcon'>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className='cardTitle'>dfsfsdsd</span>
            <p>jhcajhavkhtdht</p>
          </div>
        </div>

        <div className='cardinfo-grid'>
          <div className='singleCard-grid'>
            <div className='infoIcon'>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className='cardTitle'>dfsfsdfsd</span>
            <p>jhcajhajhgsdjahdjjhhzcv</p>
          </div>
        </div>

        <div className='cardinfo-grid'>
          <div className='singleCard-grid '>
            <div className='infoIcon'>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className='cardTitle'>dfsfsdfsd</span>
            <p>jhcajhajhychchgcahdjjkjbkujhzcv</p>
          </div>
        </div>
      </div>
    </div>
  );
}

