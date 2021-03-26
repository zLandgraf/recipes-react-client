import { useState, useEffect } from 'react';
import Recipe from './Recipes/Recipe';

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

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log("teste");
  }

  return (
    <>
      <div className="container-fluid p-5">
        <div className="row justify-content-center">
          <div className="col-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <span>Nome: </span>
                <input type="text" class="form-control" />
              </div>
              <div className="form-group row mb-3">
                <div class="form-group col-4">
                  <span>Ingrediente: </span>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group col-4">
                  <span>Quantidade: </span>
                  <input type="number" class="form-control" />
                </div>
                <div class="form-group col-4">
                  <span>Unidade: </span>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div className="form-group row justify-content-end p-2">
                <button type="submit" className="btn btn-success">Adicionar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5">
          <Recipe recipes={recipes}/>
      </div>
    </>
  );
}

export default App;
