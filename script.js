var chicken = document.querySelector(".chicken-card")
var beef = document.querySelector(".beef-card")
var fish = document.querySelector(".fish-card")
var pork = document.querySelector(".pork-card")




var getRecipeInfo = function(protein) {
    var recipeApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + protein
    fetch(recipeApi)
    .then(function(response){
        if (response.ok){
            response.json().then(function(data){
                var meals = data.meals
                var randomMeal = meals[Math.floor(Math.random() * meals.length)]
                console.log(randomMeal);
                var mealID = randomMeal.idMeal
                var mealPic = randomMeal.strMealThumb
                console.log(mealPic);

                var getRecipeApi = "www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
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


   
}

chicken.addEventListener("click",proteinChoice)
beef.addEventListener("click",proteinChoice)
fish.addEventListener("click",proteinChoice)
pork.addEventListener("click",proteinChoice)


