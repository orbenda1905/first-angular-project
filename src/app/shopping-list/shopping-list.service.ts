import { Ingrediant } from '../shared/Ingrediant.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingrediantsChange = new Subject<Ingrediant[]>();
    private ingrediants: Ingrediant[] = [
        new Ingrediant('Apples', 5),
        new Ingrediant('Tomatos', 10),
      ];

    getIngrediants() {
        return this.ingrediants.slice();
    }

    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediants.push(ingrediant);
        this.ingrediantsChange.next(this.ingrediants.slice());
    }

    addIngrediants(ingrediants: Ingrediant[]) {
        this.ingrediants.push(...ingrediants);
        this.ingrediantsChange.next(this.ingrediants.slice());
    }
}
