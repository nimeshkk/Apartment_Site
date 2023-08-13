import React from 'react'
import jpg1 from '../../images/1.jpg'
import jpg2 from '../../images/2.jpg'
import jpg3 from '../../images/3.jpg'

export default function describe() {
  return (
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
        <img className='describeImages' src={jpg1}></img>
        <img className='describeImages' src={jpg2}></img>
        <img className='describeImages' src={jpg3}></img>
       </div>
    
       
      </div>
      
    </div>
    
  )
}
