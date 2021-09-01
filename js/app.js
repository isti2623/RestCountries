const loadCountries = () => {
    const inputField = document.getElementById("input-field");
    const inputText = inputField.value;
    inputField.value = "";

    const url = `https://restcountries.eu/rest/v2/name/${inputText}`

    fetch(url)
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = country => {
    const showCard = document.getElementById("show-card");
    showCard.textContent = "";
    country.forEach(element => {
        console.log(element);
        // const div = document.createElement('div');

        showCard.innerHTML += `
        <div class="col">
        <div class="card h-100">
            <img src="${element.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <button type="button" class="btn btn-secondary">Show Details</button>
            </div>
        </div>
    </div>
        `
        // showCard.appendChild(div)
    });
}