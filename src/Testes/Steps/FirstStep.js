import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const FirstStep = ({ChangeStep, ChooseRecipeName}) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if(valid)
    {
      ChooseRecipeName(name);
      ChangeStep('firstStep', 'secondStep');
    }
  }

  return (
    <div>
        <h3>Choose a name for the recipe </h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
               <TextField
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  variant="outlined"
                  value={name} 
                />
            </div>
            <div className="form-group">
              <Button type="submit" className="btn btn-primary">Next</Button>
            </div>
        </form>
    </div>
  )
}
export default FirstStep;

