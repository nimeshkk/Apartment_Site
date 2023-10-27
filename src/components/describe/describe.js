import React, { useEffect } from 'react';
import jpg1 from '../../images/swimming-pool.jpg';
import jpg2 from '../../images/Gym.jpg';
import jpg3 from '../../images/carp.webp';


export default function Describe() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

   
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className='hidden' id='fasilities'>
      <div className='describe-container'>
        <div className='section-title'>
          <h3>Facilities In Our Apartment</h3>
        </div>
        <div className='section-container-grid'>
          <div className='section-grid'>
            <div className='text-grid'>
            <div className='singleInfo'>
                <span className='section-number'>1</span>
                <h3>Swimming pool</h3>
                <p>available for all members</p>
                
              </div>

              <div className='singleInfo'>
                <span className='section-number'>2</span>
                <h3>Gym</h3>
                <p>available for all members</p>
              </div>

              <div className='singleInfo'>
                <span className='section-number'>3</span>
                <h3>Parking</h3>
                <p>available for all members</p>
              </div>
              
            </div>
          </div>
          <div className='describe-images-grid'>
            <img className='describeImages' src={jpg1} alt='Image 1' />
            <img className='describeImages ' src={jpg2} alt='Image 2' />
            <img className='describeImages ' src={jpg3} alt='Image 3' />
          </div>
        </div>
      </div>
    </div>
  );
}

