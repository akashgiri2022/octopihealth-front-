import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";



function Card(props) {


  const savedata = async () => {
   
    fetch("http://localhost:4000/exercise", {
        method: "POST",
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({name:props.data.name})
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result)
      }) 
};





  return (
    <div className="card-container">
      <div className="card-name"> {props.data.name}</div>
      <div>
        <img src={props.data.image} alt="images" className="card-media"></img>
      </div>
      <Link to={`/exercise/${props.data.id}`}>
        <div className="btn_book">
          <button onClick={savedata}>Book</button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
