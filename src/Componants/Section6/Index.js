import React from 'react';
import './section6.css';
import mountain from '../Images/mountains.png';

const Index = () => {
  return (
    <div className='bg-img'>
      <div className="overlay">
        <div className="text">
          <p className='text-fonts'>THE ASANS PURIFY OUR BODY AND KEEP IT HEALTHY, MAKING IT A SUITABLE VEHICLE FOR THE SOUL.</p>
          <img style={{height:'8rem', width: '8rem', marginBottom: '1rem'}} src={mountain} alt="Mountain" /> <br />
          <button type="button" className="btn btn-outline-primary">See More</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
