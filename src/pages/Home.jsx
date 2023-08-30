import { useState } from "react";
import CountriesList from "../components/CountriesList";
import useFetch from "../hooks/useFetch";
import { BsSearch } from "react-icons/bs";
import Loader from "../components/Loader";
function Home() {
  const [url, setUrl] = useState(
    "https://countries-api-v7sn.onrender.com/countries?limit=250"
  );
  const { data, isPending, error } = useFetch(url);
  return (
    <>
      <div className="justify-between">
        <div className="search">
          <BsSearch />
          <input
            onChange={(e) => {
              setUrl(
                `https://countries-api-v7sn.onrender.com/countries?search=${e.target.value}`
              );
            }}
            type="search"
            placeholder="Search..."
            name="search"
            id="searchs"
          />
        </div>
        <select
          onChange={(e) => {
            if (e.target.value == "All") {
              setUrl(
                '"https://countries-api-v7sn.onrender.com/countries?limit=250"'
              );
            } else {
              setUrl(
                `https://countries-api-v7sn.onrender.com/countries?region=${e.target.value}`
              );
            }
          }}
          name="continent"
          id=""
        >
          <option value="">All</option>
          <option value="Africa">Afcrica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <CountriesList data={data} />
      {isPending && <Loader />}
    </>
  );
}
export default Home;
