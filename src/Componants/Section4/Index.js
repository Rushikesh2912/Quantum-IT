import React from 'react';
import './section4.css';
import Mountain from '../Images/MountainLoop.webp';
import Park from '../Images/NationalPark.png';
import Canyon from '../Images/CanyonTrail.webp';
import ellipise from '../Images/ellipsis.png';
const Index = () => {
    return (
        <div>
            <div className="heading">
                <h1>PLACES TO VISIT <br /> IN AUTUMN</h1>
            </div>
            <div style={{marginLeft: '23rem'}} className="row d-flex justify-content-evenly text-center g-3">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="card border-0">
                        <img src={Mountain} className="card-img-top rounded-circle img-center" alt="Mountain Loop" />
                        <a className='text-start' href="/"><img style={{height: '1.5rem', width:'1.5rem'}} src={ellipise} alt="" srcset="" /></a>
                        <div className="font card-body">
                            <h5 className="fw-bold card-title">Mountain Loop</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr className='he-lines' />
                            <p><b>Location</b> 0.3 miles</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="card border-0">
                        <img src={Park} className="card-img-top rounded-circle img-center" alt="National Park" />
                        <a className='text-start' href="/"><img style={{height: '1.5rem', width:'1.5rem'}} src={ellipise} alt="" srcset="" /></a>
                        <div className="font card-body">
                            <h5 className="fw-bold card-title">National Park</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr className='he-lines' />
                            <p><b>Location</b> 0.2 miles</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                        <img src={Canyon} className="card-img-top rounded-circle img-center" alt="Canyon Trail" />
                        <a className='text-start' href="/"><img style={{height: '1.5rem', width:'1.5rem'}} src={ellipise} alt="" srcset="" /></a>
                        <div className=" font card-body">
                            <h5 className="fw-bold card-title">Canyon Trail</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr className='he-lines' />
                            <p><b>Location</b> 0.6 miles</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-btn align-self-center">

            <button type="button" class="btn btn-outline-primary align-self-center my-5">See More</button>
            </div>
        </div>
    )
}

export default Index;
