import React from 'react';

const Instructions = () => {
  return (
    <section>
      <h1 className='text-center'>Instructions</h1>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              Food/Water
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
            <div className="accordion-body">
              <ul>
                <li>AM: 1 scoop of dry food</li>
                <li>PM: A half can of wet food</li>
                <li>PM(2): 1/2 scoop of dry food</li>
                <li>Water: Change a minimum of once a day.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Litter
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>
                Check his litter for poop. If there's poop, take the box and scooper to the toilet, sift the poop out, and flush it! This is OK because it's a pine-based litter versus the typical clay litter.

                If there is pee, you can just break it up with the scoop and mix it around in the box to distribute it. It will naturally dissolve into the litter.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Play
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>
                Fig's favorite toy is his sushi wand. I will sit on the couch and drag it back and forth on the floor in front of me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;