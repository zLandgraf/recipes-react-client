import { useState, useEffect } from 'react'

function App() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => 
  {
    const getRecipes = async () => 
    {
      await fetch('https://localhost:5001/api/ingredient')
        .then(async (response) => 
        {
          if(response.ok)
          {
            let data = await response.json();
            setRecipes([...data]);
          }
        });
    };

    getRecipes();
  }, [])

  return (
    <>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
