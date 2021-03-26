import React, {useState} from 'react'

function App() {
  const [recipes, setRecipes] = useState([]);
  
  const handleClick = (e) => 
  {
    fetch('https://localhost:5001/api/Ingredient')
    .then((response) => 
    {
        console.log(response);
    });
  }

  return (
    <>
    <button type="button" onClick={handleClick}> Send request </button>
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
      <h1>Its raining baby</h1>
    </>
  );
}

export default App;
