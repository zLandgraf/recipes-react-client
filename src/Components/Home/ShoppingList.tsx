import { Button } from '@material-ui/core'
import { IShoppingItems } from './Home'

interface props {
  ShoppingItems: IShoppingItems[],
  HandleContinueAdding:Function, 
}

export const ShoppingList = (props:props) => {
  return (
    <div>
      <ul>
        {props.ShoppingItems.map((item, i) => (
          <li key={i}>{item.recipe.name}</li>
        ))}
      </ul>
      <Button onClick={()=> props.HandleContinueAdding()}>Continue adding !</Button>
    </div>
  )
}
