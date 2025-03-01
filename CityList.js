import React from "react";
import "./styles.css";

const CityList = ({ countryIndex, stateIndex, countries, setCountries }) => {
  const addCity = () => {
    const name = prompt("Enter city name:");
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(name);
      setCountries(updatedCountries);
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(
        cityIndex,
        1
      );
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <br />
      <button onClick={addCity} className="btn btn-add">
        Add City
      </button>
      {countries[countryIndex].states[stateIndex].cities.map((city, cityIndex) => (
        <div key={cityIndex} className="sub-card">
          <div className="card-body">
            <h6 className="card-title">{city}</h6>
            <button onClick={() => deleteCity(cityIndex)} className="btn btn-danger">
              Delete City
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityList;
