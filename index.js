document.addEventListener('DOMContentLoaded', () => {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => displayInfo(data))

    function displayInfo(jsonObject) {

        const margaritaList = document.querySelector('#margaritaList')
        const drinkList = jsonObject.drinks
        const commentList = document.querySelector('#comment-list')

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

        drinkList.forEach(iterateArray)
        
        function iterateArray(jsonObject){
            const margaritaTitle = document.createElement('p')
            margaritaTitle.textContent = jsonObject.strDrink
            margaritaList.append(margaritaTitle)

            margaritaTitle.addEventListener('click', () => {
                
                const margaritaImage = document.querySelector('#margaritaImage')
                const margaritaName = document.querySelector('#margarita-name')
                const ingredientList = document.querySelector('#margarita-ingredients')
                
                margaritaImage.src = jsonObject.strDrinkThumb + "/preview"
                margaritaName.textContent = jsonObject.strDrink
                
                jsonObject.strIngredient1 === null ? ingredient1.remove():ingredient1.textContent = jsonObject.strMeasure1 + " " + jsonObject.strIngredient1
                jsonObject.strIngredient2 === null ? ingredient2.remove():ingredient2.textContent = jsonObject.strMeasure2 + " " + jsonObject.strIngredient2
                jsonObject.strIngredient3 === null ? ingredient3.remove():ingredient3.textContent = jsonObject.strMeasure3 + " " + jsonObject.strIngredient3
                jsonObject.strIngredient4 === null ? ingredient4.remove():ingredient4.textContent = jsonObject.strMeasure4 + " " + jsonObject.strIngredient4
                jsonObject.strIngredient5 === null ? ingredient5.remove():ingredient5.textContent = jsonObject.strMeasure5 + " " + jsonObject.strIngredient5
                jsonObject.strIngredient6 === null ? ingredient6.remove():ingredient6.textContent = jsonObject.strMeasure6 + " " + jsonObject.strIngredient6
                jsonObject.strIngredient7 === null ? ingredient7.remove():ingredient7.textContent = jsonObject.strMeasure7 + " " + jsonObject.strIngredient7
                jsonObject.strIngredient8 === null ? ingredient8.remove():ingredient8.textContent = jsonObject.strMeasure8 + " " + jsonObject.strIngredient8
                jsonObject.strIngredient9 === null ? ingredient9.remove():ingredient9.textContent = jsonObject.strMeasure9 + " " + jsonObject.strIngredient9
                jsonObject.strIngredient10 === null ? ingredient10.remove():ingredient10.textContent = jsonObject.strMeasure10 + " " + jsonObject.strIngredient10
                jsonObject.strIngredient11 === null ? ingredient11.remove():ingredient11.textContent = jsonObject.strMeasure11 + " " + jsonObject.strIngredient11
                jsonObject.strIngredient12 === null ? ingredient12.remove():ingredient12.textContent = jsonObject.strMeasure12 + " " + jsonObject.strIngredient12
                jsonObject.strIngredient13 === null ? ingredient13.remove():ingredient13.textContent = jsonObject.strMeasure13 + " " + jsonObject.strIngredient13
                jsonObject.strIngredient14 === null ? ingredient14.remove():ingredient14.textContent = jsonObject.strMeasure14 + " " + jsonObject.strIngredient14
                jsonObject.strIngredient15 === null ? ingredient15.remove():ingredient15.textContent = jsonObject.strMeasure15 + " " + jsonObject.strIngredient15

                ingredientList.append(ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9,ingredient10,ingredient11,ingredient12,ingredient13,ingredient14,ingredient15)
            })
        }

        document.querySelector('#comment-form').addEventListener('submit', (event) => {
            event.preventDefault()
            let newComment = document.createElement('li') 
            newComment = `${event.target.review.value}\n`
            commentList.append(newComment)            
        })
        
        document.querySelector('#margarita-name').addEventListener('mouseover', () => {
            let margaritaImagePop = document.querySelector('#margaritaImage')
            margaritaImagePop.src = "https://media1.giphy.com/media/JdaeRw3TIEuCmj7DAG/200.gif"
        })
    }

    //End of DOM Content Loaded Function - Insert all code above
})