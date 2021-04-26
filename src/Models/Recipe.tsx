export interface IIngredient {
  id: string,
  name: string,
  amount: number,
  unit: string,
}

export interface ICreateIngredient 
{
  name: string,
}

export interface IRecipe {
  id: string,
  name: string,
  image?: string,
  ingredient: IIngredient []
}

export interface ICreateRecipe {
  name: string,
  ingredients: IIngredient []
}

export interface IShoppingItems {
  id: number,
  amount: number,
  recipe : IRecipe,
  day: string,
  meal: string,
}