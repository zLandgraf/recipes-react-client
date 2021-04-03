export interface IIngredient {
  id: string,
  name: string,
  amount: number,
  unit: string,
}

export interface ICreateIngredient {
  name?: string,
  amount?: number,
  unit?: string,
}

export interface IRecipe {
  id: string,
  name: string,
  image?: string,
  ingredient: IIngredient []
}

export interface ICreateRecipe {
  name: string,
  image?: string, 
  ingredient?: ICreateIngredient []
}