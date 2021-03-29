import { useState, useEffect } from 'react';
import Recipe from './Recipes/Recipe';
import AddRecipe from './Recipes/AddRecipe';

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
      <div className="container-fluid p-5">
        <AddRecipe />
      </div>
      <div className="container-fluid p-5">
          <Recipe recipes={recipes}/>
      </div>
    </>
  );
}

export default App;
