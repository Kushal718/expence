import React, { useState } from "react";
import CountryList from "./CountryList";
import "./styles.css"; // Import custom CSS

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const name = prompt("Enter country name:");
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
         
            <ul className="nav-item active">COUNTRY MANAGEMENT</ul>
          
        </div>

        <div className="card-body">
         
          <button onClick={addCountry} className="btn btn-add">
            Add Country
          </button>
          
          <CountryList countries={countries} setCountries={setCountries} />
        </div>
      </div>
    </div>
  );
};

export default App;
