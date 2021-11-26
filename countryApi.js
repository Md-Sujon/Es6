fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => countrys(data));

const countrys = countryss =>{
    const countryDiv = document.getElementById('countryName');
   for (let i = 0; i < countryss.length; i++) {
       const country = countryss[i];

       const countrysDiv = document.createElement('div');

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
          <h3>${country.name.common}</h39>
          <p>${country.capital}</p>
       `
       countrysDiv.innerHTML = countryInfo;
       
      
       
       

       countryDiv.appendChild(countrysDiv);


   }
}