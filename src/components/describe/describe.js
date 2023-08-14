import React, { useEffect } from 'react';
import jpg1 from '../../images/1.jpg';
import jpg2 from '../../images/2.jpg';
import jpg3 from '../../images/3.jpg';


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
    <div className='hidden'>
      <div className='describe-container'>
        <div className='section-title'>
          <h3>asdadaf</h3>
        </div>
        <div className='section-container-grid'>
          <div className='section-grid'>
            <div className='text-grid'>
            <div className='singleInfo'>
                <span className='section-number'>1</span>
                <h3>asdasdasd</h3>
                <p>hdbabfkajbkbfkajfbkajbfkja</p>
              </div>

              <div className='singleInfo'>
                <span className='section-number'>2</span>
                <h3>asdasdasd</h3>
                <p>hdbabfkajbkbfkajfbkajbfkja</p>
              </div>

              <div className='singleInfo'>
                <span className='section-number'>3</span>
                <h3>asdasdasd</h3>
                <p>hdbabfkajbkbfkajfbkajbfkja</p>
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

