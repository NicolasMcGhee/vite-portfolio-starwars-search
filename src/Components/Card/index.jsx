import React from "react";
import "./index.css";

export default function Card(props) {
  return (
    <div
      className="Card_Container"
      onClick={() => {
        props.setFeaturedInfo({
          name: props.name,
          status: props.status,
          homeWorld: props.homeWorld,
          rank: props.rank,
          photo: props.profilePic,
          lightsaberColor: props.lightsaberColor,
          lightsaberForm: props.lightsaberForm,
          borderColor: props.borderColor
        });
      }}
      key={props.id}
    >
      <img src={props.profilePic} alt="" width={400} />
      <h1>{props.name}</h1>
      <h3>{props.rank}</h3>
      <h3>{props.status}</h3>
    </div>
  );
}
