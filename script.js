var chicken = document.querySelector(".chicken-card")
var beef = document.querySelector(".beef-card")
var fish = document.querySelector(".fish-card")
var pork = document.querySelector(".pork-card")

var recipeName = document.querySelector(".recipe")
var removeContent = document.querySelector(".main-content")




var getRecipeInfo = function(protein) {
    var recipeApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + protein
    fetch(recipeApi)
    .then(function(response){
        if (response.ok){
            response.json().then(function(data){
                removeContent.textContent=""
                var meals = data.meals
                var randomMeal = meals[Math.floor(Math.random() * meals.length)]
                var mealID = randomMeal.idMeal
                var mealPic = randomMeal.strMealThumb
                //append to html wherever recipe image will be shown
                var mealImg = document.createElement("img")
                mealImg.src= mealPic
                removeContent.appendChild(mealImg)
                
                console.log(mealPic);

               
                var getRecipeApi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
                fetch(getRecipeApi)
                .then(function(response){
                    response.json().then(function(data){
                        var name = data.meals[0].strMeal
                        //append to html where name for recipe is
                        recipeName.textContent = name 
                        //append to html where instructions for recipe is
                        var ingredient1 = data.meals[0].strMeasure1 + " " + data.meals[0].strIngredient1
                        var ingredient2 = data.meals[0].strMeasure2 + " " + data.meals[0].strIngredient2
                        var ingredient3 = data.meals[0].strMeasure3 + " " + data.meals[0].strIngredient3
                        var ingredient4 = data.meals[0].strMeasure4 + " " + data.meals[0].strIngredient4
                        var ingredient5 = data.meals[0].strMeasure5 + " " + data.meals[0].strIngredient5
                        var ingredient6 = data.meals[0].strMeasure6 + " " + data.meals[0].strIngredient6
                        var ingredient7 = data.meals[0].strMeasure7 + " " + data.meals[0].strIngredient7
                        var ingredient8 = data.meals[0].strMeasure8 + " " + data.meals[0].strIngredient8
                        var ingredient9 = data.meals[0].strMeasure9 + " " + data.meals[0].strIngredient9
                        var ingredient10 = data.meals[0].strMeasure10 + " " + data.meals[0].strIngredient10
                        var ingredient11 = data.meals[0].strMeasure11 + " " + data.meals[0].strIngredient11
                        var ingredient12 = data.meals[0].strMeasure12 + " " + data.meals[0].strIngredient12
                        var ingredient13 = data.meals[0].strMeasure13 + " " + data.meals[0].strIngredient13
                        var ingredient14 = data.meals[0].strMeasure14 + " " + data.meals[0].strIngredient14
                        var ingredient15 = data.meals[0].strMeasure15 + " " + data.meals[0].strIngredient15
                        var ingredient16 = data.meals[0].strMeasure16 + " " + data.meals[0].strIngredient16
                        var ingredient17 = data.meals[0].strMeasure17 + " " + data.meals[0].strIngredient17
                        var ingredient18 = data.meals[0].strMeasure18 + " " + data.meals[0].strIngredient18
                        var ingredient19 = data.meals[0].strMeasure19 + " " + data.meals[0].strIngredient19
                        var ingredient20 = data.meals[0].strMeasure20 + " " + data.meals[0].strIngredient20

                        var ingredients = document.createElement("div")
                        ingredients.classList.add("container","columns","is-mobile","column","is-half","notification","subtitle","content","is-normal")
                        removeContent.appendChild(ingredients)
                        ingredients.textContent= "Ingredients: "

                        var startList = document.createElement("ul")
                        ingredients.appendChild(startList)

                        var factor1 = document.createElement("li")
                        startList.appendChild(factor1)
                        factor1.textContent = ingredient1

                        var factor2 = document.createElement("li")
                        factor1.appendChild(factor2)
                        factor2.textContent = ingredient2

                        var factor3 = document.createElement("li")
                        factor2.appendChild(factor3)
                        factor3.textContent = ingredient3

                        var factor4 = document.createElement("li")
                        factor3.appendChild(factor4)
                        factor4.textContent = ingredient4

                        var factor5 = document.createElement("li")
                        factor4.appendChild(factor5)
                        factor5.textContent = ingredient5

                        var factor6 = document.createElement("li")
                        factor5.appendChild(factor6)
                        factor6.textContent = ingredient6

                        var factor7 = document.createElement("li")
                        factor6.appendChild(factor7)
                        factor7.textContent = ingredient7


                        var factor8 = document.createElement("li")
                        factor7.appendChild(factor8)
                        factor8.textContent = ingredient8

                        var factor9 = document.createElement("li")
                        factor8.appendChild(factor9)
                        factor9.textContent = ingredient9

                        var factor10 = document.createElement("li")
                        factor9.appendChild(factor10)
                        factor10.textContent = ingredient10

                        var factor11 = document.createElement("li")
                        factor10.appendChild(factor11)
                        factor11.textContent = ingredient11

                        var factor12 = document.createElement("li")
                        factor11.appendChild(factor12)
                        factor12.textContent = ingredient12

                        var factor13 = document.createElement("li")
                        factor12.appendChild(factor13)
                        factor13.textContent = ingredient13

                        var factor14 = document.createElement("li")
                        factor13.appendChild(factor14)
                        factor14.textContent = ingredient14

                        var factor15 = document.createElement("li")
                        factor14.appendChild(factor15)
                        factor15.textContent = ingredient15

                        var factor16 = document.createElement("li")
                        factor15.appendChild(factor16)
                        factor16.textContent = ingredient16
                        
                        var factor17 = document.createElement("li")
                        factor16.appendChild(factor17)
                        factor17.textContent = ingredient17

                        var factor18 = document.createElement("li")
                        factor17.appendChild(factor18)
                        factor18.textContent = ingredient18

                        var factor19 = document.createElement("li")
                        factor18.appendChild(factor19)
                        factor19.textContent = ingredient19

                        var factor20 = document.createElement("li")
                        factor19.appendChild(factor20)
                        factor20.textContent = ingredient20

                        var recipe = data.meals[0].strInstructions
                        //append to html where recipe is
                        var directions = document.createElement("div")
                        directions.classList.add("subtitle", "column","is-full" , "notification")
                        directions.textContent= "Instructions:"
                        removeContent.appendChild(directions)
                        var showRecipe = document.createElement("div")
                        showRecipe.classList.add("column","is-full","notification")
                        showRecipe.textContent = recipe
                        directions.appendChild(showRecipe)
                    
                    
                    })
                })
                console.log(getRecipeApi);
            })
        }
    })

}

var proteinChoice = function(event){
    var protein = event.target.getAttribute("data-protein")
    if(protein){
        getRecipeInfo(protein);
    }   
    console.log("Test")
}

chicken.addEventListener("click",proteinChoice)
beef.addEventListener("click",proteinChoice)
fish.addEventListener("click",proteinChoice)
pork.addEventListener("click",proteinChoice)

var backBtn = function(){
    window.location.reload()
}


