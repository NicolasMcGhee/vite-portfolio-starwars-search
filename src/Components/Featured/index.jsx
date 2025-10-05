import React from "react";
import "./index.css";

export default function Featured(props) {
  return (
    <section className="Featured_Container">
      <div className="Featured_Information">
        {/* Left Side: Name and basic information/Images */}
        <div className="Featured_LeftSide">
          <h1>{props.name}</h1>
          <img src={props.photo} alt=""  className="Featured_Image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aliquid cum sit voluptates eveniet reprehenderit veniam perspiciatis
            fugiat ratione nulla eum est vero hic blanditiis voluptatibus sed
            officia, possimus molestiae delectus quod velit tempora, ipsum
            tenetur? Quibusdam reprehenderit itaque quidem eaque culpa nam.
            Nesciunt, maxime consequatur non omnis facere soluta laudantium
            adipisci distinctio. Neque blanditiis suscipit itaque est alias
            repellendus deserunt veritatis minus dolorem voluptates eaque sequi
            dolore laudantium, voluptatibus, voluptatum quidem, ducimus libero
            dicta.
          </p>
        </div>
        {/* Right Side: Fun Facts and various info */}
        <div className="Featured_RightSide">
          {/* 1 */}
          <div>
            <h3>Home World</h3>
            <p>{props.homeWorld}</p>
          </div>
          {/* 2 */}
          <div>
            <h3>Rank</h3>
            <p>{props.rank}</p>
          </div>
          {/* 3 */}
          <div>
            <h3>Lightsaber Color</h3>
            <p>{props.lightsaberColor}</p>
          </div>
          {/* 4 */}
          <div>
            <h3>Lightsaber Form</h3>
            <p>{props.lightsaberForm}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
