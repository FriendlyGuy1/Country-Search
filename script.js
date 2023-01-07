let SearchBtn = document.getElementById("SearchBtn")

let CountryInput = document.getElementById("CountryInput")

let Main = document.querySelector(".modal-body")

SearchBtn.addEventListener('click', ()=> {
    let Country = CountryInput.value

    if(Country.length == 0){
        alert("Input can't be empty!")
    }

    const FetchCountry = async () => {
        try {
            const result = await fetch(`https://restcountries.com/v3.1/name/${Country}`);
            const CountryInfo = await result.json();

            document.getElementById("ModalLabel").innerHTML = CountryInfo[0].name.common

            let my_img = document.createElement("img")
            my_img.src = CountryInfo[0].flags.svg
            Main.appendChild(my_img)
            
            let my_Region = document.createElement("h4");
            my_Region.innerText = `Region: ${CountryInfo[0].region}`
            Main.appendChild(my_Region)

            let my_Capital = document.createElement("h4");
            my_Capital.innerText = `Capital: ${CountryInfo[0].capital[0]}`
            Main.appendChild(my_Capital)

            let my_population = document.createElement("h4");
            my_population.innerText = `Capital: ${CountryInfo[0].population}`
            Main.appendChild(my_population)

            let my_area = document.createElement("h4");
            my_area.innerText = `Area Size: ${CountryInfo[0].area}`
            Main.appendChild(my_area)

            let my_timezone = document.createElement("h4");
            my_timezone.innerText = `TimeZone: ${CountryInfo[0].timezones[0]}`
            Main.appendChild(my_timezone)

            let Borders = document.createElement("h4");
            let BorderList =document.createElement("ul")
            Borders.innerText = "Borders: "
            CountryInfo[0].borders.forEach(element => {
                let my_li = document.createElement("li")
                my_li.innerText = element
                BorderList.appendChild(my_li)
            });
            Borders.appendChild(BorderList)
            Main.appendChild(Borders)

            let Languages = document.createElement("h4");
            let LangList =document.createElement("ul")
            Languages.innerText = "Languages: "
            Object.entries(CountryInfo[0].languages).forEach(element => {
                let my_li = document.createElement("li")
                my_li.innerText = element.join(",")
                LangList.appendChild(my_li)
            });
            Languages.appendChild(LangList)
            Main.appendChild(Languages)

            let Currency = document.createElement("h4");
            let CurrencyList =document.createElement("ul")
            Currency.innerText = "Currency: "
            let my_li = document.createElement("li")
            my_li.innerText = `${Object.keys(CountryInfo[0].currencies)[0]}: ${CountryInfo[0].currencies[Object.keys(CountryInfo[0].currencies)].name}`
            CurrencyList.appendChild(my_li)
            Currency.appendChild(CurrencyList)
            Main.appendChild(Currency)

        } catch(error){
            console.log(error)
        }
    };
    
    FetchCountry()
    Main.innerHTML=""
    Country = ""
})


