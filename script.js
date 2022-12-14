var chicken = document.querySelector(".chicken-card")
var beef = document.querySelector(".beef-card")
var fish = document.querySelector(".fish-card")
var pork = document.querySelector(".pork-card")
var instructionsContent = document.querySelector(".instructions-content")
var recipeName = document.querySelector(".recipe")
var removeContent = document.querySelector(".main-content")
var mainDishContent = document.querySelector(".main-dish-content")
var ingredientsContent = document.querySelector("#ingredients-content")
var ingredientsCC = document.querySelector("#ingredients-content-container")
var instructionsCC = document.querySelector("#instructions-content-container")
var cardRecipeImage = document.querySelector(".card-recipe-image")

var bodyElement = document.body.clientHeight
var boxQuery = document.querySelector(".box")
var resHistory = document.querySelector(".past-recipe")
var submitBtn = document.querySelector("#submit")
var recName = document.querySelector("#name")




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
                ingredientsCC.style.display="flex"
                var mealImg = document.createElement("figure")
                mealImg.style.height="700px"
                
                mealImg.style.minWidth="700px"
                mealImg.style.maxWidth="700px"
                mealImg.style.backgroundImage= "url(" + mealPic + ")"
                mealImg.style.backgroundRepeat= "no-repeat"
                mealImg.style.borderRadius= "20px"
                mealImg.style.boxShadow= "5px 5px 25px #000000"
                mealImg.classList.add("image","left","card-recipe","card-recipe-image")
                mainDishContent.style.display="inline"
                    
                mainDishContent.appendChild(mealImg)
                
                console.log(mealPic);

               
                var getRecipeApi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
                fetch(getRecipeApi)
                .then(function(response){
                    response.json().then(function(data){
                        var name = data.meals[0].strMeal
                        
                        //append to html where name for recipe is
                        recName.textContent = name 

                        var titleIngredients = document.createElement("h1")
                        //append to html where ingredients for recipe is
                        console.log(data.meals);
                        var ingredients = document.createElement("div")
                        // ingredients.classList.add("tile",  "container")
                        titleIngredients.classList.add("ml-5", "mb-2")
                        ingredients.classList.add("ml-5")

                        ingredientsContent.appendChild(titleIngredients)
                        ingredientsContent.appendChild(ingredients)
                        ingredientsContent.style.borderRadius= "20px"
                        ingredientsContent.style.boxShadow= "5px 5px 25px #000000"
                        
                        // ingredients.style.marginLeft="724px"
                        // ingredients.style.minWidth="1424px"

                        boxQuery.style.backgroundColor="#00000001"

                        titleIngredients.textContent= "Ingredients: "
                        titleIngredients.style.fontSize="2em"
                        var startList = document.createElement("ul")

                        var startList = document.createElement("ul")
                        ingredients.appendChild(startList)

                        var ingredient1 = data.meals[0].strMeasure1 + " " + data.meals[0].strIngredient1
                        if (ingredient1 !==""){
                            var factor1 = document.createElement("li")
                            startList.appendChild(factor1)
                            factor1.textContent = ingredient1
                            }
                        var ingredient2 = data.meals[0].strMeasure2 + " " + data.meals[0].strIngredient2
                        if (ingredient2 !==""){
                            var factor2 = document.createElement("li")
                            factor1.appendChild(factor2)
                            factor2.textContent = ingredient2
                            }
                        var ingredient3 = data.meals[0].strMeasure3 + " " + data.meals[0].strIngredient3
                        if (ingredient3 !==""){
                            var factor3 = document.createElement("li")
                            factor2.appendChild(factor3)
                            factor3.textContent = ingredient3
                            }
                        var ingredient4 = data.meals[0].strMeasure4 + " " + data.meals[0].strIngredient4
                        if (ingredient4 !==""){
                            var factor4 = document.createElement("li")
                            factor3.appendChild(factor4)
                            factor4.textContent = ingredient4
                            }
                        var ingredient5 = data.meals[0].strMeasure5 + " " + data.meals[0].strIngredient5
                        if (ingredient5 !==""){
                            var factor5 = document.createElement("li")
                            factor4.appendChild(factor5)
                            factor5.textContent = ingredient5
                            }
                        var ingredient6 = data.meals[0].strMeasure6 + " " + data.meals[0].strIngredient6
                        if (ingredient6 !==""){
                            var factor6 = document.createElement("li")
                            factor5.appendChild(factor6)
                            factor6.textContent = ingredient6
                            }
                        var ingredient7 = data.meals[0].strMeasure7 + " " + data.meals[0].strIngredient7
                        if (ingredient7 !==""){
                            var factor7 = document.createElement("li")
                            factor6.appendChild(factor7)
                            factor7.textContent = ingredient7
                            }
                        var ingredient8 = data.meals[0].strMeasure8 + " " + data.meals[0].strIngredient8
                        if (ingredient8 !==""){
                            var factor8 = document.createElement("li")
                            factor7.appendChild(factor8)
                            factor8.textContent = ingredient8
                            }
                        var ingredient9 = data.meals[0].strMeasure9 + " " + data.meals[0].strIngredient9
                        if ( ingredient9 !==""){
                            var factor9 = document.createElement("li")
                            factor8.appendChild(factor9)
                            factor9.textContent = ingredient9
                            }
                        var ingredient10 = data.meals[0].strMeasure10 + " " + data.meals[0].strIngredient10
                        if (ingredient10 !==""){
                            var factor10 = document.createElement("li")
                            factor9.appendChild(factor10)
                            factor10.textContent = ingredient10
                            }
                        var ingredient11 = data.meals[0].strMeasure11 + " " + data.meals[0].strIngredient11
                        if (ingredient11 !==""){
                            var factor11 = document.createElement("li")
                            factor10.appendChild(factor11)
                            factor11.textContent = ingredient11
                            }
                        var ingredient12 = data.meals[0].strMeasure12 + " " + data.meals[0].strIngredient12
                        if (ingredient12 !==""){
                            var factor12 = document.createElement("li")
                            factor11.appendChild(factor12)
                            factor12.textContent = ingredient12
                            }
                        var ingredient13 = data.meals[0].strMeasure13 + " " + data.meals[0].strIngredient13
                        if (ingredient13 !==""){
                            var factor13 = document.createElement("li")
                            factor12.appendChild(factor13)
                            factor13.textContent = ingredient13
                            }
                        var ingredient14 = data.meals[0].strMeasure14 + " " + data.meals[0].strIngredient14
                        if (ingredient14 !==""){
                            var factor14 = document.createElement("li")
                            factor13.appendChild(factor14)
                            factor14.textContent = ingredient14
                            }
                        var ingredient15 = data.meals[0].strMeasure15 + " " + data.meals[0].strIngredient15
                        if (ingredient15 !== ""){
                            var factor15 = document.createElement("li")
                            factor14.appendChild(factor15)
                            factor15.textContent = ingredient15
                            }
                        var ingredient16 = data.meals[0].strMeasure16 + " " + data.meals[0].strIngredient16
                        if (ingredient16 !==""){
                            var factor16 = document.createElement("li")
                            factor15.appendChild(factor16)
                            factor16.textContent = ingredient16
                            }
                        var ingredient17 = data.meals[0].strMeasure17 + " " + data.meals[0].strIngredient17
                        if (ingredient17 !==""){
                            var factor17 = document.createElement("li")
                            factor16.appendChild(factor17)
                            factor17.textContent = ingredient17
                            }
                        var ingredient18 = data.meals[0].strMeasure18 + " " + data.meals[0].strIngredient18
                        if (ingredient18 !==""){
                            var factor18 = document.createElement("li")
                            factor17.appendChild(factor18)
                            factor18.textContent = ingredient18
                            }
                        var ingredient19 = data.meals[0].strMeasure19 + " " + data.meals[0].strIngredient19
                        if (ingredient19 !==""){
                            var factor19 = document.createElement("li")
                            factor18.appendChild(factor19)
                            factor19.textContent = ingredient19
                            }
                        
                        var ingredient20 = data.meals[0].strMeasure20 + " " + data.meals[0].strIngredient20
                        if (ingredient20 !==""){
                            var factor20 = document.createElement("li")
                            factor19.appendChild(factor20)
                            factor20.textContent = ingredient20
                        }
                        console.log(ingredient20);

                        var recipe = data.meals[0].strInstructions
                        //append to html where recipe is
                        instructionsCC.style.display = "flex"
                        var directions = document.createElement("div")
                        directions.classList.add("subtitle", "column","is-full", "has-text-white")
                        directions.textContent= "Instructions:"
                        instructionsContent.appendChild(directions)
                        var showRecipe = document.createElement("div")
                        showRecipe.classList.add("column","is-full", "has-text-white")
                        showRecipe.textContent = recipe
                        directions.appendChild(showRecipe)
                        var instructionsHeight = directions.style.height
                        document.getElementsByTagName("BODY")[0].style.height = "140vh"
                        
                        console.log(instructionsHeight + "." + instructionsCC.style.height) 
                        console.log(name);
                        var pastRecipe = localStorage.getItem("recipeHistory")
                        if (!pastRecipe){
                            var recipeHistory = [];
                            recipeHistory.push(name)
                            localStorage.setItem("recipeHistory",JSON.stringify(recipeHistory))
                        } else {
                            pastRecipe = JSON.parse(pastRecipe)
                            if (!pastRecipe.includes(name)){
                            pastRecipe.push(name)
                            localStorage.setItem("recipeHistory",JSON.stringify(pastRecipe));
                            }
                        }
                    
                    })

                    
                })
                
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

var pastRecipe = function() {
        var pastRecipe = JSON.parse(localStorage.getItem("recipeHistory"))
        
     if (pastRecipe.length > 0){
          for (var i = 0; i< pastRecipe.length; i++){            
         var recipeHis = document.createElement("option")
          recipeHis.textContent = pastRecipe[i]
          resHistory.appendChild(recipeHis)
          choosenRecipe = resHistory[i].value;             
         }
     } else {
        recipeHis.textContent = "No previous recipes"
     }
     
    }
pastRecipe()

submitBtn.addEventListener("click", recipeName)

var recipeName = function(name) {
    name = resHistory.value.replaceAll(" ","+")
    var recipeNameApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name
    fetch(recipeNameApi)
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            removeContent.textContent=""
             //append to html where name for recipe is
             recName.textContent = data.meals[0].strMeal 

            ingredientsCC.style.display="flex"
            var mealPic = data.meals[0].strMealThumb
            var mealImg = document.createElement("figure")
            mealImg.style.height="700px"
            
            mealImg.style.minWidth="700px"
            mealImg.style.maxWidth="700px"
            mealImg.style.backgroundImage= "url(" + mealPic + ")"
            mealImg.style.backgroundRepeat= "no-repeat"
            mealImg.style.borderRadius= "20px"
            mealImg.style.boxShadow= "5px 5px 25px #000000"
            mealImg.classList.add("image","left","card-recipe","card-recipe-image")
            mainDishContent.style.display="inline"
                
            mainDishContent.appendChild(mealImg)
            var name = data.meals[0].strMeal
                        
           
            var titleIngredients = document.createElement("h1")
            //append to html where ingredients for recipe is
            console.log(data.meals);
            var ingredients = document.createElement("div")
            // ingredients.classList.add("tile",  "container")
            titleIngredients.classList.add("ml-5", "mb-2")
            ingredients.classList.add("ml-5")

            ingredientsContent.appendChild(titleIngredients)
            ingredientsContent.appendChild(ingredients)
            ingredientsContent.style.borderRadius= "20px"
            ingredientsContent.style.boxShadow= "5px 5px 25px #000000"
            
            // ingredients.style.marginLeft="724px"
            // ingredients.style.minWidth="1424px"

            boxQuery.style.backgroundColor="#00000001"

            titleIngredients.textContent= "Ingredients: "
            titleIngredients.style.fontSize="2em"
            var startList = document.createElement("ul")

            var startList = document.createElement("ul")
            ingredients.appendChild(startList)

            var ingredient1 = data.meals[0].strMeasure1 + " " + data.meals[0].strIngredient1
            if (ingredient1 !==""){
                var factor1 = document.createElement("li")
                startList.appendChild(factor1)
                factor1.textContent = ingredient1
                }
            var ingredient2 = data.meals[0].strMeasure2 + " " + data.meals[0].strIngredient2
            if (ingredient2 !==""){
                var factor2 = document.createElement("li")
                factor1.appendChild(factor2)
                factor2.textContent = ingredient2
                }
            var ingredient3 = data.meals[0].strMeasure3 + " " + data.meals[0].strIngredient3
            if (ingredient3 !==""){
                var factor3 = document.createElement("li")
                factor2.appendChild(factor3)
                factor3.textContent = ingredient3
                }
            var ingredient4 = data.meals[0].strMeasure4 + " " + data.meals[0].strIngredient4
            if (ingredient4 !==""){
                var factor4 = document.createElement("li")
                factor3.appendChild(factor4)
                factor4.textContent = ingredient4
                }
            var ingredient5 = data.meals[0].strMeasure5 + " " + data.meals[0].strIngredient5
            if (ingredient5 !==""){
                var factor5 = document.createElement("li")
                factor4.appendChild(factor5)
                factor5.textContent = ingredient5
                }
            var ingredient6 = data.meals[0].strMeasure6 + " " + data.meals[0].strIngredient6
            if (ingredient6 !==""){
                var factor6 = document.createElement("li")
                factor5.appendChild(factor6)
                factor6.textContent = ingredient6
                }
            var ingredient7 = data.meals[0].strMeasure7 + " " + data.meals[0].strIngredient7
            if (ingredient7 !==""){
                var factor7 = document.createElement("li")
                factor6.appendChild(factor7)
                factor7.textContent = ingredient7
                }
            var ingredient8 = data.meals[0].strMeasure8 + " " + data.meals[0].strIngredient8
            if (ingredient8 !==""){
                var factor8 = document.createElement("li")
                factor7.appendChild(factor8)
                factor8.textContent = ingredient8
                }
            var ingredient9 = data.meals[0].strMeasure9 + " " + data.meals[0].strIngredient9
            if ( ingredient9 !==""){
                var factor9 = document.createElement("li")
                factor8.appendChild(factor9)
                factor9.textContent = ingredient9
                }
            var ingredient10 = data.meals[0].strMeasure10 + " " + data.meals[0].strIngredient10
            if (ingredient10 !==""){
                var factor10 = document.createElement("li")
                factor9.appendChild(factor10)
                factor10.textContent = ingredient10
                }
            var ingredient11 = data.meals[0].strMeasure11 + " " + data.meals[0].strIngredient11
            if (ingredient11 !==""){
                var factor11 = document.createElement("li")
                factor10.appendChild(factor11)
                factor11.textContent = ingredient11
                }
            var ingredient12 = data.meals[0].strMeasure12 + " " + data.meals[0].strIngredient12
            if (ingredient12 !==""){
                var factor12 = document.createElement("li")
                factor11.appendChild(factor12)
                factor12.textContent = ingredient12
                }
            var ingredient13 = data.meals[0].strMeasure13 + " " + data.meals[0].strIngredient13
            if (ingredient13 !==""){
                var factor13 = document.createElement("li")
                factor12.appendChild(factor13)
                factor13.textContent = ingredient13
                }
            var ingredient14 = data.meals[0].strMeasure14 + " " + data.meals[0].strIngredient14
            if (ingredient14 !==""){
                var factor14 = document.createElement("li")
                factor13.appendChild(factor14)
                factor14.textContent = ingredient14
                }
            var ingredient15 = data.meals[0].strMeasure15 + " " + data.meals[0].strIngredient15
            if (ingredient15 !== ""){
                var factor15 = document.createElement("li")
                factor14.appendChild(factor15)
                factor15.textContent = ingredient15
                }
            var ingredient16 = data.meals[0].strMeasure16 + " " + data.meals[0].strIngredient16
            if (ingredient16 !==""){
                var factor16 = document.createElement("li")
                factor15.appendChild(factor16)
                factor16.textContent = ingredient16
                }
            var ingredient17 = data.meals[0].strMeasure17 + " " + data.meals[0].strIngredient17
            if (ingredient17 !==""){
                var factor17 = document.createElement("li")
                factor16.appendChild(factor17)
                factor17.textContent = ingredient17
                }
            var ingredient18 = data.meals[0].strMeasure18 + " " + data.meals[0].strIngredient18
            if (ingredient18 !==""){
                var factor18 = document.createElement("li")
                factor17.appendChild(factor18)
                factor18.textContent = ingredient18
                }
            var ingredient19 = data.meals[0].strMeasure19 + " " + data.meals[0].strIngredient19
            if (ingredient19 !==""){
                var factor19 = document.createElement("li")
                factor18.appendChild(factor19)
                factor19.textContent = ingredient19
                }
            
            var ingredient20 = data.meals[0].strMeasure20 + " " + data.meals[0].strIngredient20
            if (ingredient20 !==""){
                var factor20 = document.createElement("li")
                factor19.appendChild(factor20)
                factor20.textContent = ingredient20
            }
            console.log(ingredient20);

            var recipe = data.meals[0].strInstructions
            //append to html where recipe is
            instructionsCC.style.display = "flex"
            var directions = document.createElement("div")
            directions.classList.add("subtitle", "column","is-full", "has-text-white")
            directions.textContent= "Instructions:"
            instructionsContent.appendChild(directions)
            var showRecipe = document.createElement("div")
            showRecipe.classList.add("column","is-full", "has-text-white")
            showRecipe.textContent = recipe
            directions.appendChild(showRecipe)
            var instructionsHeight = directions.style.height
            document.getElementsByTagName("BODY")[0].style.height = "140vh"
        })
    })
}

