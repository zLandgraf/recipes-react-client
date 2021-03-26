import { useState, useEffect } from 'react'

function App() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => 
  {
    const getRecipes = async () => 
    {
      await fetch('https://localhost:5001/api/recipe')
        .then(async (response) => 
        {
          if(response.ok)
          {
            let data = await response.json();
            console.log(data);
            setRecipes([...data]);
          }
        });
    };

    getRecipes();
  }, [])

  return (
    <>
    <div>
      {recipes.map(recipe => (
        <div> 
          <h5>{recipe.name}</h5>
          <h6>Ingredientes: </h6>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li> {ingredient.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
