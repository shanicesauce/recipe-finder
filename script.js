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
                        console.log(name);
                        var recipe = data.meals[0].strInstructions
                        //append to html where instructions for recipe is
                        console.log(recipe);

                        var ingredient1 = data.meals[0].strIngredient1 + " " + data.meals[0].strMeasure1
                        console.log(ingredient1);
                        var ingredient2 = data.meals[0].strIngredient2 + " " + data.meals[0].strMeasure2
                        console.log(ingredient2);
                        var ingredient3 = data.meals[0].strIngredient3 + " " + data.meals[0].strMeasure3
                        console.log(ingredient3);
                        var ingredient4 = data.meals[0].strIngredient4 + " " + data.meals[0].strMeasure4
                        console.log(ingredient4);
                        var ingredient5 = data.meals[0].strIngredient5 + " " + data.meals[0].strMeasure5
                        console.log(ingredient5);
                        var ingredient6 = data.meals[0].strIngredient6 + " " + data.meals[0].strMeasure6
                        console.log(ingredient6);
                        var ingredient7 = data.meals[0].strIngredient7 + " " + data.meals[0].strMeasure7
                        console.log(ingredient7);
                        var ingredient8 = data.meals[0].strIngredient8 + " " + data.meals[0].strMeasure8
                        console.log(ingredient8);
                        var ingredient9 = data.meals[0].strIngredient9 + " " + data.meals[0].strMeasure9
                        console.log(ingredient9);
                        var ingredient10 = data.meals[0].strIngredient10 + " " + data.meals[0].strMeasure10
                        console.log(ingredient10);
                        var ingredient11 = data.meals[0].strIngredient11 + " " + data.meals[0].strMeasure11
                        console.log(ingredient11);
                        var ingredient12 = data.meals[0].strIngredient12 + " " + data.meals[0].strMeasure12
                        console.log(ingredient12);
                        var ingredient13 = data.meals[0].strIngredient13 + " " + data.meals[0].strMeasure13
                        console.log(ingredient13);
                        var ingredient14 = data.meals[0].strIngredient14 + " " + data.meals[0].strMeasure14
                        console.log(ingredient14);
                        var ingredient15 = data.meals[0].strIngredient15 + " " + data.meals[0].strMeasure15
                        console.log(ingredient15);
                        var ingredient16 = data.meals[0].strIngredient16 + " " + data.meals[0].strMeasure16
                        console.log(ingredient16);
                        var ingredient17 = data.meals[0].strIngredient17 + " " + data.meals[0].strMeasure17
                        console.log(ingredient17);
                        var ingredient18 = data.meals[0].strIngredient18 + " " + data.meals[0].strMeasure18
                        console.log(ingredient18);
                        var ingredient19 = data.meals[0].strIngredient19 + " " + data.meals[0].strMeasure19
                        console.log(ingredient19);
                        var ingredient20 = data.meals[0].strIngredient20 + " " + data.meals[0].strMeasure20
                        console.log(ingredient20);
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


