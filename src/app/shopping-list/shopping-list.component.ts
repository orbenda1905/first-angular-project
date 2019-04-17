import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/Ingrediant.mode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  inrgediants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatos', 10),
  ];

  onIngrediantAdded(ingrediant: Ingrediant) {
    this.inrgediants.push(ingrediant);
  }

  constructor() { }

  ngOnInit() {
  }

}
