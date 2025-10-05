import React from "react";
import "./index.css";

export default function Card(props) {
  return (
    <div
      className="Card_Container"
      onClick={() => {
        props.setFeaturedInfo({
          name: props.name,
          house: props.house,
          status: props.status,
          photo: props.profilePic,
        });
      }}
    >
      <img src={props.profilePic} alt="" width={400} />
      <h1>{props.name}</h1>
      <h3>{props.house}</h3>
      <h3>{props.status}</h3>
    </div>
  );
}
