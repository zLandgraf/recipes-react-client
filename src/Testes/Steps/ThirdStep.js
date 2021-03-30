import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const ThirdStep = ({ ChangeStep, Ingredients }) => {
  return (
    <div>
        <h1>Third ! </h1>
        {Ingredients.map(ingredient => (
          <div key={ingredient.id}>
            <TextField type='hidden' value={ingredient.id} />
            <TextField label="Name" variant="outlined" value={ingredient.name} />
            <TextField label="Amount" variant="outlined" value={ingredient.amount} />
            <TextField label="Unit" variant="outlined" value={ingredient.unit} />
            <br />
          </div>
        ))}
        <Button onClick={() => ChangeStep('thirdStep', 'secondStep')}>Back </Button>
        <Button> Finish </Button>
    </div>
  )
}
export default ThirdStep;