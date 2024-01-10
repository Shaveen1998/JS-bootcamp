
function getCountries(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET', "https://restcountries.com/v3.1/all", true)

    xhr.onload = function(){
        if(xhr.status==200){
            let countries = JSON.parse(this.response)
            console.log(countries)

            countries.forEach(country => {
                let countryCard = document.createElement('div')
                let countryFlagCard = document.createElement('img')

                countryCard.innerHTML = country.name.common
                countryFlagCard.src = country.flag
                countryCard.appendChild(countryFlagCard)
                document.getElementById('feed').appendChild(countryCard)

            });
           
        }
    }

    xhr.send()
}