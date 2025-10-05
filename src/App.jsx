import { useEffect, useState } from "react";
import "./App.css";
import data from "../data.json";
import Search from "./Components/Search";
import ContentWrapper from "./Wrappers/ContentWrapper";
import Card from "./Components/Card";
import Featured from "./Components/Featured";

function App() {
  // useStates
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [featuredInfo, setFeaturedInfo] = useState({
    name: "Anakin Skywalker",
    status: "Jedi",
    rank: "Jedi Knight",
    homeWorld: "Tattoine",
    lightsaberColor: "Blue",
    lightsaberForm: "Form 5: Djem So",
    photo: "../src/assets/Jedi/Anakin_Skywalker.png",
  });

  // Functions
  function filterData(query) {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredData);
  }

  // Use Effects
  useEffect(() => {
    filterData(searchValue);
  }, [searchValue]);
  return (
    <>
      <div className="App_Container lato-regular">
        <Featured
          name={featuredInfo.name}
          homeWorld={featuredInfo.homeWorld}
          rank={featuredInfo.rank}
          photo={featuredInfo.photo}
          lightsaberColor={featuredInfo.lightsaberColor}
          lightsaberForm={featuredInfo.lightsaberForm}
        />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <ContentWrapper>
          {filteredData.map((data) => (
            <Card
              id={data.id}
              setFeaturedInfo={setFeaturedInfo}
              profilePic={data.picture.profile}
              rank={data.rank}
              name={data.name}
              status={data.status}
              homeWorld={data.homeWorld}
              lightsaberColor={data.lightsaberColor}
              lightsaberForm={data.lightsaberForm}
            />
          ))}
        </ContentWrapper>
      </div>
    </>
  );
}

export default App;
