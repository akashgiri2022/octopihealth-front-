import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data.js";

const Page2 = () => {
  const params = useParams();
  console.log(params.id);
  console.log(Data);
  const exercise = Data.find((data) => data.id === params.id);
  console.log(exercise);
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          {/* <p>{exercise.name}</p> */}
          <div className="upper">
            <h2>Select Position</h2>
            <div className="toggler">
            <p className="toggler--light">Left</p>
            <div className="toggler--slider">
              <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Right</p>
          </div>
          </div>
          
          <div className="lower">
            <div className="pic">{exercise.pic1}</div>
            <div className="pic">{exercise.pic2}</div>
            <div className="pic">{exercise.pic3}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
