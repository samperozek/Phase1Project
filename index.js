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
   

        drinkList.forEach(iterateArray)
        
        function iterateArray(jsonObject){
            const margaritaTitle = document.createElement('p')
            margaritaTitle.textContent = jsonObject.strDrink
            margaritaList.append(margaritaTitle)

            margaritaTitle.addEventListener('click', () => {
                
                const margaritaImage = document.querySelector('#margaritaImage')
                const margaritaName = document.querySelector('#margarita-name')
                const ingredientList = document.querySelector('#margarita-ingredients')
                ingredientList.innerHTML = ``
                margaritaImage.src = jsonObject.strDrinkThumb + "/preview"
                margaritaName.textContent = jsonObject.strDrink
                
                jsonObject.strIngredient1 === null ? ingredient1.remove():ingredient1.textContent = jsonObject.strMeasure1 + " " + jsonObject.strIngredient1
                jsonObject.strIngredient2 === null ? ingredient2.remove():ingredient2.textContent = jsonObject.strMeasure2 + " " + jsonObject.strIngredient2
                jsonObject.strIngredient3 === null ? ingredient3.remove():ingredient3.textContent = jsonObject.strMeasure3 + " " + jsonObject.strIngredient3
                jsonObject.strIngredient4 === null ? ingredient4.remove():ingredient4.textContent = jsonObject.strMeasure4 + " " + jsonObject.strIngredient4
                jsonObject.strIngredient5 === null ? ingredient5.innerHTML = ``:ingredient5.textContent = jsonObject.strMeasure5 + " " + jsonObject.strIngredient5
                jsonObject.strIngredient6 === null ? ingredient6.innerHTML = ``:ingredient6.textContent = jsonObject.strMeasure6 + " " + jsonObject.strIngredient6
                jsonObject.strIngredient7 === null ? ingredient7.innerHTML = ``:ingredient7.textContent = jsonObject.strMeasure7 + " " + jsonObject.strIngredient7
                commentList.innerHTML = ``

                ingredientList.append(ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7)
               

            })
        }

        document.querySelector('#comment-form').addEventListener('submit', (event) => {
            event.preventDefault()
            let newComment = document.createElement('p') 
            newComment.textContent = `${event.target.review.value}`
            commentList.append(newComment) 
            newComment.addEventListener('click', () => {
                newComment.remove()
            })          
        })
        
        document.querySelector('#margarita-name').addEventListener('mouseover', () => {
            let margaritaImagePop = document.querySelector('#margaritaImage')
            margaritaImagePop.src = "https://media1.giphy.com/media/JdaeRw3TIEuCmj7DAG/200.gif"
        })

        document.querySelector("#randomGenerator").addEventListener("click", () => {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => randomDisplay(data))

            function randomDisplay (jsonObject) {
                const drinkListRandom = jsonObject.drinks[0]
                const margaritaImageRandom = document.querySelector('#margaritaImage')
                const margaritaNameRandom = document.querySelector('#margarita-name')
                const ingredientListRandom = document.querySelector('#margarita-ingredients')
                
                ingredientListRandom.innerHTML = ``
                margaritaImageRandom.src = drinkListRandom.strDrinkThumb + "/preview"
                margaritaNameRandom.textContent = drinkListRandom.strDrink
                
                drinkListRandom.strIngredient1 === null ? ingredient1.remove():ingredient1.textContent = drinkListRandom.strMeasure1 + " " + drinkListRandom.strIngredient1
                drinkListRandom.strIngredient2 === null ? ingredient2.remove():ingredient2.textContent = drinkListRandom.strMeasure2 + " " + drinkListRandom.strIngredient2
                drinkListRandom.strIngredient3 === null ? ingredient3.remove():ingredient3.textContent = drinkListRandom.strMeasure3 + " " + drinkListRandom.strIngredient3
                drinkListRandom.strIngredient4 === null ? ingredient4.remove():ingredient4.textContent = drinkListRandom.strMeasure4 + " " + drinkListRandom.strIngredient4
                drinkListRandom.strIngredient5 === null ? ingredient5.innerHTML = ``:ingredient5.textContent = drinkListRandom.strMeasure5 + " " + drinkListRandom.strIngredient5
                drinkListRandom.strIngredient6 === null ? ingredient6.innerHTML = ``:ingredient6.textContent = drinkListRandom.strMeasure6 + " " + drinkListRandom.strIngredient6
                drinkListRandom.strIngredient7 === null ? ingredient7.innerHTML = ``:ingredient7.textContent = drinkListRandom.strMeasure7 + " " + drinkListRandom.strIngredient7
                commentList.innerHTML = ``
                
                ingredientListRandom.append(ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7)
            
            
            }
        })
    }

    //End of DOM Content Loaded Function - Insert all code above
})