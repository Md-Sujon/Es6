fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => countrys(data));

const countrys = (countryss) => {
  const countryDiv = document.getElementById("countryName");
  for (let i = 0; i < countryss.length; i++) {
    const country = countryss[i];

    const countrysDiv = document.createElement("div");

    countrysDiv.className = "countrys";
    //    const countryName = document.createElement('h3');
    //    countryName.innerText = country.name.common;
    //    countrysDiv.appendChild(countryName);
    //    const h4 = document.createElement('h4');
    //    h4.innerText = country.continents;
    //    countrysDiv.appendChild(h4);
    //    const languages = document.createElement('h6');
    //    languages.innerText = country.borders;
    //    countrysDiv.appendChild(languages)

    //    const capital = document.createElement('p');
    //    capital.innerText = country.capital;
    //    countrysDiv.appendChild(capital);
    const countryInfo = `
          <h3 class="countryName">${country.name.common}</h3>
          <p class="country">${country.capital}</p>
          <img class="flags" src ="${country.flags.png}"></img>
          <br>
          <button onclick="displayCountryDetails('${country.name.common}')">Details</button>
       `;
    countrysDiv.innerHTML = countryInfo;

    countryDiv.appendChild(countrysDiv);
  }
};

const displayCountryDetails = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  fetch(url)
    .then(response => response.json())
    .then(data => countryRenderDetails(data[0]));
};

const countryRenderDetails = country =>{
 const countryDiv =  document.getElementById('countryDitails');
 countryDiv.innerHTML  = `
 <h1>Name: ${country.name.common}</h1>
 <h5>Population: ${country.population}</h5>
 <h6>Area: ${country.area}</h6>
 <h4>Capital: ${country.capital}</h4>
 <h2>Region: ${country.region}</h2>
 <h6>StartOfWeek: ${country.startOfWeek}</h6>
 <h6>status: ${country.status}</h6>
 <h6>Timezones: ${country.timezones}</h6>
 <h1>Flag <br/> <img src="${country.flags.png}"></img></h1>
 `
}