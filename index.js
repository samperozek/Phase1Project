document.addEventListener('DOMContentLoaded', () => {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => displayInfo(data))

    function displayInfo(jsonObject) {

        const margaritaList = document.querySelector('#margaritaList')
        const drinkList = jsonObject.drinks

        let ingredient1 = document.createElement('p')
        let ingredient2 = document.createElement('p')
        let ingredient3 = document.createElement('p')
        let ingredient4 = document.createElement('p')
        let ingredient5 = document.createElement('p')
        let ingredient6 = document.createElement('p')
        let ingredient7 = document.createElement('p')
        let ingredient8 = document.createElement('p')
        let ingredient9 = document.createElement('p')
        let ingredient10 = document.createElement('p')
        let ingredient11 = document.createElement('p')
        let ingredient12 = document.createElement('p')
        let ingredient13 = document.createElement('p')
        let ingredient14 = document.createElement('p')
        let ingredient15 = document.createElement('p')

        for (let i=0; i < jsonObject.drinks.length; i++){
            const margaritaTitle = document.createElement('p')
            margaritaTitle.textContent = drinkList[i].strDrink
            margaritaList.append(margaritaTitle)

            margaritaTitle.addEventListener('click', () => {
                
                const margaritaImage = document.querySelector('#margaritaImage')
                const margaritaName = document.querySelector('#margarita-name')
                const ingredientList = document.querySelector('#margarita-ingredients')
                
                margaritaImage.src = drinkList[i].strDrinkThumb + "/preview"
                margaritaName.textContent = drinkList[i].strDrink
                
                drinkList[i].strIngredient1 === null ? ingredient1.remove():ingredient1.textContent = drinkList[i].strMeasure1 + " " + drinkList[i].strIngredient1
                drinkList[i].strIngredient2 === null ? ingredient2.remove():ingredient2.textContent = drinkList[i].strMeasure2 + " " + drinkList[i].strIngredient2
                drinkList[i].strIngredient3 === null ? ingredient3.remove():ingredient3.textContent = drinkList[i].strMeasure3 + " " + drinkList[i].strIngredient3
                drinkList[i].strIngredient4 === null ? ingredient4.remove():ingredient4.textContent = drinkList[i].strMeasure4 + " " + drinkList[i].strIngredient4
                drinkList[i].strIngredient5 === null ? ingredient5.remove():ingredient5.textContent = drinkList[i].strMeasure5 + " " + drinkList[i].strIngredient5
                drinkList[i].strIngredient6 === null ? ingredient6.remove():ingredient6.textContent = drinkList[i].strMeasure6 + " " + drinkList[i].strIngredient6
                drinkList[i].strIngredient7 === null ? ingredient7.remove():ingredient7.textContent = drinkList[i].strMeasure7 + " " + drinkList[i].strIngredient7
                drinkList[i].strIngredient8 === null ? ingredient8.remove():ingredient8.textContent = drinkList[i].strMeasure8 + " " + drinkList[i].strIngredient8
                drinkList[i].strIngredient9 === null ? ingredient9.remove():ingredient9.textContent = drinkList[i].strMeasure9 + " " + drinkList[i].strIngredient9
                drinkList[i].strIngredient10 === null ? ingredient10.remove():ingredient10.textContent = drinkList[i].strMeasure10 + " " + drinkList[i].strIngredient10
                drinkList[i].strIngredient11 === null ? ingredient11.remove():ingredient11.textContent = drinkList[i].strMeasure11 + " " + drinkList[i].strIngredient11
                drinkList[i].strIngredient12 === null ? ingredient12.remove():ingredient12.textContent = drinkList[i].strMeasure12 + " " + drinkList[i].strIngredient12
                drinkList[i].strIngredient13 === null ? ingredient13.remove():ingredient13.textContent = drinkList[i].strMeasure13 + " " + drinkList[i].strIngredient13
                drinkList[i].strIngredient14 === null ? ingredient14.remove():ingredient14.textContent = drinkList[i].strMeasure14 + " " + drinkList[i].strIngredient14
                drinkList[i].strIngredient15 === null ? ingredient15.remove():ingredient15.textContent = drinkList[i].strMeasure15 + " " + drinkList[i].strIngredient15

                ingredientList.append(ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9,ingredient10,ingredient11,ingredient12,ingredient13,ingredient14,ingredient15)
            })
        }
        document.querySelector('#comment-form').addEventListener('submit', (event) => {
            event.preventDefault()
            let newComment = document.createElement('p') 
            newComment = event.target.review.value

            console.log(newComment)
        })
              
    }

    //End of DOM Content Loaded Function - Insert all code above
})