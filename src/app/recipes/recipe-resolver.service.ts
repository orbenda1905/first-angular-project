import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
    constructor(private recipesService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
                console.log('resolving id ');
                const id = +route.params.id;
                return this.recipesService.getRecipe(id);
    }
}
