const loadMeals = (search) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
fetch(url)
.then(res => res.json())
.then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
   
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card">
                        <img src="${meal.strMealThumb} " class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">  ${meal.strMeal} </h5>
                          <p class="card-text"> ${meal.strInstructions.slice(0,150)} </p>
                        </div>
                      </div>
        
        
        `
        mealsContainer.appendChild(mealDiv)
    });
   
}


const searchFood = () =>{
  const searchFoodFild = document.getElementById('search-fild')
  const searchFoodText = searchFoodFild.value 
  loadMeals(searchFoodText)
  searchFoodFild.value = '';
}
loadMeals()