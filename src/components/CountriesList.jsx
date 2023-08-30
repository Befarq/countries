import { NavLink } from "react-router-dom";
import "./CountriesList.css";
function CountriesList({ data }) {
  return (
    <div className="countriesList">
      {" "}
      {data &&
        data.data.map((country) => {
          return (
            <NavLink
              key={country.name.slug}
              to={`/country/${country.name.slug}`}
            >
              <div className="countryCard">
                <img src={country.flags.png} alt="" />
                <div className="cardText">
                  <p>
                    <span>{country.name.common}</span>
                  </p>
                  <p>
                    <span>Population: </span>
                    {country.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {country.capital}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
}

export default CountriesList;
