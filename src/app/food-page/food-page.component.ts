import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../service/food/food-service.service';
import { ActivatedRoute } from '@angular/router';
import IFood from '../shared/models/Food';
import { CartService } from '../service/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  constructor(
    private foodService: FoodServiceService,
    private cartService: CartService,
    private route: ActivatedRoute
    ){}
  food!: IFood  ;
  cart!: Cart;
  ngOnInit(): void {
        this.route.params.subscribe(params=>{
          if(params['foodId']){
            this.food = this.foodService.getFoodById(params['foodId']);
          }
        })
        this.cart = this.cartService.getCart()
        if(this.cart){
        }
  }
  
  addToCart(food: IFood){
    this.cartService.addToCart(food);
  }
  removeFromCart(food:IFood){
    this.cartService.removeFromCart(food.id);
  }
  reduceQuantity(food: IFood){

  }
  
  addQuantity(food: IFood){
    
  }
}
