import React from 'react';
import './Index.css';

const Index = () => {
  return (
    <div className="index-background">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-4 text-white mb-4 fw-bold">Discover Your Next Hike</h1>
            <div className="quotes text-white">
              <blockquote className="blockquote">
                <h3 className="mb-0 fw-semibold">DISCOVER YOUR NEXT HIKE</h3>
              </blockquote>
              <blockquote className="blockquote">
                <p className="mb-0 fw-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
