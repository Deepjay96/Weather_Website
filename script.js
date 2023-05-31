
let searchInput = document.querySelector('.search input')
let searchBtn  = document.querySelector('.search button')

async function  getweather(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b3b8b1243060307e41d51e7cbb748a7&&%20units%20=%20metric`)


    let data = await res.json()
 
    console.log(data)

    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + " °c "
    document.querySelector('.city').innerHTML = data.name 
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity )+ " %"
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed ) + " Km/h"

}

searchBtn.addEventListener('click' , ()=>{

    
getweather(searchInput.value)

})

   


