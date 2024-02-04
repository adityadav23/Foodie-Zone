import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import IFood from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart: Cart = new Cart();

  addToCart(food: IFood): void{
    let cartItem = this.cart.items.find(item=> item.food.id == food.id)
    if(cartItem){
      this.updateQuantity(food.id, cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(food))
  }
  removeFromCart(foodId: number){
    this.cart.items = this.cart.items.filter(item=> item.food.id != foodId)
  }
  updateQuantity(foodId: number, itemQuantity:number){
    this.cart.items.find(item=> {
      if(item.food.id == foodId){
        item.quantity = itemQuantity
      }
    })     
  }

  getCart(): Cart{
    return this.cart;
  }
}

