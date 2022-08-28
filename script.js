var chicken = document.querySelector(".chicken-card")
var beef = document.querySelector(".beef-card")
var fish = document.querySelector(".fish-card")
var pork = document.querySelector(".pork-card")

var recipeName = document.querySelector(".recipe")
var proteinSection = document.querySelectorAll("div.tile")
var removeContent = document.querySelector(".main-content")




var getRecipeInfo = function(protein) {
    var recipeApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + protein
    fetch(recipeApi)
    .then(function(response){
        if (response.ok){
            response.json().then(function(data){
                var meals = data.meals
                var randomMeal = meals[Math.floor(Math.random() * meals.length)]
                var mealID = randomMeal.idMeal
                var mealPic = randomMeal.strMealThumb
                //append to html wherever recipe image will be shown
                console.log(mealPic);

               
                var getRecipeApi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
                fetch(getRecipeApi)
                .then(function(response){
                    response.json().then(function(data){
                        var name = data.meals[0].strMeal
                        //append to html where name for recipe is
                        recipeName.textContent = name
                        var recipe = data.meals[0].strInstructions
                        removeContent.innerHTML=""
                        //append to html where instructions for recipe is
                        console.log(recipe);

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

                        console.log(ingredient1);console.log(ingredient2);console.log(ingredient3); console.log(ingredient4);                        
                        console.log(ingredient5);console.log(ingredient6);console.log(ingredient7);console.log(ingredient8);                        
                        console.log(ingredient9); console.log(ingredient10);console.log(ingredient11);console.log(ingredient12);                        
                        console.log(ingredient13); console.log(ingredient14); console.log(ingredient15); console.log(ingredient16);                        
                        console.log(ingredient17);console.log(ingredient18);console.log(ingredient19);console.log(ingredient20);
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
}

chicken.addEventListener("click",proteinChoice)
beef.addEventListener("click",proteinChoice)
fish.addEventListener("click",proteinChoice)
pork.addEventListener("click",proteinChoice)

var backBtn = function(){
    window.location.reload()
}


