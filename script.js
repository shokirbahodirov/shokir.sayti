document.addEventListener("DOMContentLoaded", async (e) => {
    let row = document.querySelector(".row")
    let ichimlik = document.querySelector("#ichimlik")
    ichimlik.addEventListener("keyup", async (e)=>{
         document.querySelector(".row").innerHTML =``
        console.log(ichimlik.value)
        
        
        
        
        let request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ichimlik.value.trim()}`)
        let response = await request.json()
        console.log(response);
        response.drinks.forEach((value, index) => {
            let div = document.createElement("div")
            div.classList.add("col-3", "mt-2")
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${value.strDrinkThumb }" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${value.strDrink}</h5>
            <a href="singilPage.html?id=${value.idDrink}" class="btn btn-primary">Batafsil</a>
            </div>
            </div>
            `
            row.append(div)
            document.querySelector(".row").append(div)
        })
        
    })
})