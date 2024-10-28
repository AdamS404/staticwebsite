import React, { useState } from 'react';
import './flexer.css';

const Flexer = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes([...boxes, boxes.length + 1]);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Flexer</h2>
      <button className="btn btn-primary" onClick={addBox}>Add Box</button>
      <div className="d-flex flex-wrap mt-4">
        {boxes.map((box) => (
          <div key={box} className="box m-2">
            Box {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flexer;
