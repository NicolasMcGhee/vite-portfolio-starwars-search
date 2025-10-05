import { useEffect, useState } from "react";
import "./App.css";
import data from "../data.json";
import Search from "./Components/Search";
import ContentWrapper from "./Wrappers/ContentWrapper";
import Card from "./Components/Card";
import Featured from "./Components/Featured";

function App() {
  // useStates
  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [featuredInfo, setFeaturedInfo] = useState({
    name: "Harry Potter",
    house: "Sylerin",
    status: "Teacher",
    photo: "../src/assets/Houses/Gryffindor/HarryPotter/Harry-Profile.png",
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
    console.log(searchValue);
  }, [searchValue]);
  return (
    <>
      <div className="App_Container lato-regular">
        <Featured
          name={featuredInfo.name}
          house={featuredInfo.house}
          status={featuredInfo.status}
          photo={featuredInfo.photo}
        />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <ContentWrapper>
          {filteredData.map((data) => (
            <Card
            setFeaturedInfo={setFeaturedInfo}
              profilePic={data.picture.profile}
              name={data.name}
              house={data.house}
              status={data.status}
            />
          ))}
        </ContentWrapper>
      </div>
    </>
  );
}

export default App;
