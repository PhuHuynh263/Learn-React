import { countryList } from "../../data/country.js";
// import "./Country.css";
import "./Country.scss"

function Country() {
  console.log(countryList);
  return (
    <>
      <ul className="country__list">
        {countryList.map((country) => {
          return (
            <li className="country__item" key={country.id}>
              <span className="country__name">{country.name}</span>
              <ul className="city__list">
                {country.cities.map((city) => (
                  <li className="city__name" key={city.id}>
                    {city.name}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Country;
