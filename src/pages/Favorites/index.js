import { useState, useEffect } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    async function getLocations() {
      const url = process.env.REACT_APP_BACKEND_URL + "locations";
      const response = await fetch(url);
      const data = await response.json();
      //Only use as reference when building then delete
      console.log(data);
      setLocations(data);
    }
    getLocations();
  }, []);
  const display =
    locations.length &&
    locations.map((location) => {
      return <h3 key={location._id}> {location.countryName} </h3>;    
    });
    
  return (
    <div className="locationsPage">
      <div className="locations">
        <h1>Places I have Visited</h1>
      </div>
      {display}
      <h3></h3>
    </div>
  );
};

export default Locations;
