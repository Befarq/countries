import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
function Country() {
  const { slug } = useParams();
  const { data, isPending, error } = useFetch(
    `https://countries-api-v7sn.onrender.com/countries/slug/${slug}`
  );

  return (
    <div className="countryPage">
      {data && (
        <div className="aboutCountry">
          <div className="flagPic">
            {" "}
            <img src={data.flags.svg} alt="" set="" />
          </div>
          <div className="texts">
            <h1>{data.name.common}</h1>
            <div className="textcols">
              <div className="textCol1">
                <p>Native name: {data.name.nativeName}</p>
                <p>Population: {data.population}</p>
                <p>Region: {data.region}</p>
                <p>Subregion:{data.subRegion}</p>
                <p>Capital:{data.capital}</p>
              </div>
              <div className="textCol2">
                <p>Top Level Domain:{data.domain}</p>
                <p>Currencies:{data.currencies}</p>
                <p>Capital:{data.capital}</p>
              </div>
            </div>
            <div className="neighbours">
              <p>Border Countries:</p>
              {data.borders.map((neighbour) => {
                return (
                  <p className="neighbour" key={neighbour.id}>
                    <NavLink to={`/country/${neighbour.slug}`}>
                      {neighbour.common}
                    </NavLink>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {isPending && <Loader />}
    </div>
  );
}

export default Country;
