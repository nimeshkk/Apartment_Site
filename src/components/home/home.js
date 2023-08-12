import React, { useEffect, useState } from 'react';
import imageSlide from './data'; 

export default function Home() { 
  const [currentState, setCurrentState] = useState(0)
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentState(currentState => (currentState === imageSlide.length - 1 ? 0 : currentState + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []
  )
  
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState)
  }

  return (
    <div className='homeContainer'>
      <div style={bgImageStyle}></div>
      <div className='homeOverlay'></div>
      <div className='homeDescription'>
        <div>
        <h1>{imageSlide[currentState].title}</h1>
        <p>{imageSlide[currentState].body}</p>
        </div>
        <div className='home-carosel'>
        {
          imageSlide.map((imageSlide, currentState) => (
            <span key={currentState} onClick={()=>goToNext(currentState)}></span>
            
          ))
        }
       </div>
       </div>
       
    </div>
  );
}

