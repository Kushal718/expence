import React from "react";
import CityList from "./CityList";
import "./styles.css";

const StateList = ({ countryIndex, countries, setCountries }) => {
  const addState = () => {
    const name = prompt("Enter state name:");
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name, cities: [] });
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <br />
      <button onClick={addState} className="btn btn-add">
        Add State
      </button>
      {countries[countryIndex].states.map((state, stateIndex) => (
        <div key={stateIndex} className="sub-card">
          <div className="card-body">
            <h5 className="card-title">{state.name}</h5>
            <button onClick={() => deleteState(stateIndex)} className="btn btn-danger">
              Delete State
            </button>
            <CityList
              countryIndex={countryIndex}
              stateIndex={stateIndex}
              countries={countries}
              setCountries={setCountries}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateList;
