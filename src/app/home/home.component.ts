import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../service/food/food-service.service';
import { StarRatingComponent } from 'ng-starrating';
import IFood from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private foodService: FoodServiceService,
    private route: ActivatedRoute
    ){
      this.Food =  foodService.getAll()
    }
    Food: IFood[];
    loadFood: boolean = false;

    ngOnInit(): void {
      this.route.params.subscribe(params=>{
        if(this.loadFood){
          this.Food =  this.foodService.getAll()
        }
        if(params['searchItem']){
          this.loadFood = true
          this.Food = this.Food.filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        } else {
          this.Food =  this.foodService.getAll()
        }
      })
    }
}
