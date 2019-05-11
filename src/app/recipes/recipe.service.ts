import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingrediant } from '../shared/Ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'This is a tasty schnitzel',
        'https://toriavey.com/images/2011/02/IMG_1544.jpg',
        [
            new Ingrediant('Meat', 1),
            new Ingrediant('French Fries', 20)
        ]),
        new Recipe('A test Recipe', 'This is another simply a test',
        'https://amp.businessinsider.com/images/57bb3718db5ce951008b8195-750-501.jpg',
        [
            new Ingrediant('Chease', 2),
            new Ingrediant('Bread', 2)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipe(id: number) {
        return this.recipes[id];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngrediantsToShoppingList(ingrediants: Ingrediant[]) {
        this.shoppingListService.addIngrediants(ingrediants);
    }
 }
