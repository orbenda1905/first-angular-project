import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediant } from '../shared/Ingrediant.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants: Ingrediant[];
  subscription: Subscription;
  constructor(private shoppingListsService: ShoppingListService) { }



  ngOnInit() {
    this.ingrediants = this.shoppingListsService.getIngrediants();
    this.subscription = this.shoppingListsService.ingrediantsChange
      .subscribe((ingrediants: Ingrediant[]) => {
        this.ingrediants = ingrediants;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
