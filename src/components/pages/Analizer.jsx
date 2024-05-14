import React from "react";
// import { httpGetFilterCountries } from "../../services/requests";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const Analizer = () => {
  // const data = httpGetFilterCountries();
  // const dispatch = useDispatch();
  const dataCountries = useSelector((state) => {
    return state.countries.dataCountries;
  });
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {/* routes to /filterCountries that doesnt exist !!!*/}
      <form action="/filterCountries" method="get">
        <button>get</button>
      </form>
      <div className="table-canvas">
        <table>
          <thead>
            <tr>
              <th id="Country" className="th-cell">
                Country
              </th>
              <th id="Region" className="th-cell">
                Region
              </th>
              <th id="Population" className="th-cell">
                Population
              </th>
              <th id="Area" className="th-cell">
                Area
              </th>
              <th id="Pop-Density" className="th-cell">
                Pop. Density
              </th>
              <th id="Coastline" className="th-cell">
                Coastline
              </th>
              <th id="migration" className="th-cell">
                migration
              </th>
              <th id="Infant-mortality" className="th-cell">
                Infant mortality
              </th>
              <th id="GDP" className="th-cell">
                GDP
              </th>
              <th id="Literacy" className="th-cell">
                Literacy
              </th>
              <th id="Phones" className="th-cell">
                Phones
              </th>
              <th id="Arable" className="th-cell">
                Arable
              </th>
              <th id="Crops" className="th-cell">
                Crops
              </th>
              <th id="Other" className="th-cell">
                Other
              </th>
              <th id="Climate" className="th-cell">
                Climate
              </th>
              <th id="Birthrate" className="th-cell">
                Birthrate
              </th>
              <th id="Deathrate" className="th-cell">
                Deathrate
              </th>
              <th id="Agriculture" className="th-cell">
                Agriculture
              </th>
              <th id="Industry" className="th-cell">
                Industry
              </th>
              <th id="Service" className="th-cell">
                Service
              </th>
            </tr>
          </thead>
          <tbody>
            {dataCountries &&
              dataCountries.map(
                (country) => (
                  <tr id="data-row" key={country.Country}>
                    <td className="td-cell">{country.Country}</td>
                    <td className="td-cell">{country.Region}</td>
                    <td className="td-cell">{country.Population}</td>
                    <td className="td-cell">{country["Area (sq. mi.)"]}</td>
                    <td className="td-cell">
                      {country["Pop. Density (per sq. mi.)"]}
                    </td>
                    <td className="td-cell">
                      {country["Coastline (coast/area ratio)"]}
                    </td>
                    <td className="td-cell">{country["Net migration"]}</td>
                    <td className="td-cell">
                      {country["Infant mortality (per 1000 births)"]}
                    </td>
                    <td className="td-cell">{country["GDP ($ per capita)"]}</td>
                    <td className="td-cell">{country["Literacy (%)"]}</td>
                    <td className="td-cell">{country["Phones (per 1000)"]}</td>
                    <td className="td-cell">{country["Arable (%)"]}</td>
                    <td className="td-cell">{country["Crops (%)"]}</td>
                    <td className="td-cell">{country["Other (%)"]}</td>
                    <td className="td-cell">{country.Climate}</td>
                    <td className="td-cell">{country.Birthrate}</td>
                    <td className="td-cell">{country.Deathrate}</td>
                    <td className="td-cell">{country.Agriculture}</td>
                    <td className="td-cell">{country.Industry}</td>
                    <td className="td-cell">{country.Service}</td>
                  </tr>
                )

                // country.map((data) => <td className="td-cell">{data}</td>)
              )}

            {/* 
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td>
              <td className="td-cell"></td> 
              <td className="td-cell"></td> 
              */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analizer;
