import { Ingrediant } from '../shared/Ingrediant.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingrediantsChange = new EventEmitter<Ingrediant[]>();
    private ingrediants: Ingrediant[] = [
        new Ingrediant('Apples', 5),
        new Ingrediant('Tomatos', 10),
      ];

    getIngrediants() {
        return this.ingrediants.slice();
    }

    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediants.push(ingrediant);
        this.ingrediantsChange.emit(this.ingrediants.slice());
    }

    addIngrediants(ingrediants: Ingrediant[]) {
        this.ingrediants.push(...ingrediants);
        this.ingrediantsChange.emit(this.ingrediants.slice());
    }
}
