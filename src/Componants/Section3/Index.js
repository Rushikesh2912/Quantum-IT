import React from 'react';
import './section3.css'; 
import rock from '../Images/rock.jpg';

const Index = () => {
    return (
        <div className="container mx-auto my-5">
            <h1 className="mb-5 text-4xl font-bold fontStyle">ROCK
                <br /> CLIMBING</h1>
            <div className="row justify-content-around offset-md-2">
                <div className="col-md-5 col-12 row-col">
                    <h2 className="text-2xl font-bold mb-4 fontStyle">1. CLASSES AND EVENTS</h2>
                    <p className="text-lg fontStyle">Hatha is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.</p>
                    <hr className='hr-lines' />
                    <p className='fontStyle'>10 Modules <br /> divided into 7 weekends</p>
                    <div className="price d-flex">
                        <div className="col">
                            <b>Start</b><br />
                            <b>April 15</b><br />
                            <b>20.00 hr</b>
                        </div>
                        <div className="col fontStyle">
                            <b>Price</b><br />
                            <b>$900</b>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 text-center">
                    <img src={rock} alt="Rock Climbing" className="img-circle" />
                    <div className="my-5 myquotes">
                        <b>WALKING IN NATURE AS A RECREATIONAL ACTIVITY</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
