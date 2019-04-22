import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/Ingrediant.model';
import { ShoppingListService } from './shooing-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[];

  constructor(private shoppingListsService: ShoppingListService) { }



  ngOnInit() {
    this.ingrediants = this.shoppingListsService.getIngrediants();
    this.shoppingListsService.ingrediantsChange
      .subscribe((ingrediants: Ingrediant[]) => {
        this.ingrediants = ingrediants;
      });
  }

}
