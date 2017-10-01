import { DrinkIngredient } from "./drinkIngredient";

export class Drink {
    constructor(
        public id: string,
        public name: string,
        public category: string,
        public isAlcoholic: boolean,
        public glass: string,
        public instructions: string,
        public thumbnail: string,
        public ingredients: DrinkIngredient[]
    ) { }
}
