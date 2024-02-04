import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Cart } from '../shared/models/Cart';
import IFood from '../shared/models/Food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  constructor(
    private cartService: CartService
  ){ }
  options: number[] = [1,2,3,4,5];
  cart!: Cart;
  ngOnInit(): void {
      this.cart = this.cartService.getCart()
  }
  changeQuantity(food: IFood, quantity: string){
    this.cartService.updateQuantity(food.id,Number(quantity))
  }
  removeFromCart(foodId: number){
    this.cartService.removeFromCart(foodId);
  }
}
