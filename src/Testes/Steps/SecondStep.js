import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SecondStep = ({ChangeStep, ChooseIngredients }) => {
  const [options, setOptions] = useState([]);
  const [choosenIngredients, setChoosenIngredients] = useState([]);

  useEffect(() => 
  {
    const fetchIngredients = async () => 
    {
      await fetch('https://localhost:44348/api/ingredient')
      .then(async (response) => 
      {
        if(response.ok)
        {
          let data = await response.json();
          setOptions(data);
        }
      });
    };

    fetchIngredients();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    ChangeStep('secondStep', 'thirdStep')
    ChooseIngredients(...choosenIngredients);
  }

  return (
    <div className="p-5">
      <h3>Choose a name for the recipe </h3>
        <form onSubmit={handleSubmit}>
            <div>
               <Autocomplete
                id="combo-box-demo"
                multiple
                options={options}
                getOptionLabel={(option) => option.name}
                style={{ width: 600 }}
                onChange={(event, option) => setChoosenIngredients([...choosenIngredients, option])}
                renderInput={(params) => (
                  <TextField
                    {...params} 
                    label="Ingredients"
                    variant="outlined" 
                  />
                )}
              />
            </div>
            <div className="form-group">
              <Button onClick={() => ChangeStep('secondStep', 'firstStep')}> 
                  Back 
              </Button>
              <Button type="submit"> 
                Next 
              </Button>
            </div>
        </form>
    </div>
  )
}
export default SecondStep;

