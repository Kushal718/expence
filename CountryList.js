import React from "react";
import StateList from "./StateList";
import "./styles.css";

const CountryList = ({ countries, setCountries }) => {
  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{country.name}</h5>
            <button onClick={() => deleteCountry(index)} className="btn btn-danger">
              Delete Country
            </button>
            <StateList countryIndex={index} countries={countries} setCountries={setCountries} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
