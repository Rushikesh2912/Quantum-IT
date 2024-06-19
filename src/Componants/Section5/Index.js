import React from 'react';
import './section5.css'; 
import ice from '../Images/iceClimbing.jpg'; 

const Index = () => {
    return (
            <div className="bg-color">
                <div className="heading-container">
                    <h1>MOUNTAINEERING <br /> ICE CLIMBING</h1>
                </div>
                <div className="content-container">
                    <div className="column-container">
                        <div className="column">
                            <img className="round-image text-center" src={ice} alt="Ice Climbing" />
                            <div className="quotess text-center">
                                <b>WALKING IN NATURE <br /> AS A RECREATIONAL ACTIVITY</b>
                            </div>
                        </div>
                        <div className="column">
                            <h2 className="sub-heading mb-4 fontStyles">1. ACTIVITIES</h2>
                            <p className="fontStyles">Kundalini is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.</p>
                            <hr className="hrr-line" />
                            <p className="fontStyles">17 Modules <br /> divided into 5 weekends</p>
                            <div className="price-container">
                                <div className="price-column fontStyles">
                                    <b>Start</b><br />
                                    <b>April 15</b><br />
                                    <b>20.00 hr</b>
                                </div>
                                <div className="price-column fontStyles">
                                    <b>Price</b><br />
                                    <b>$900</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Index;
