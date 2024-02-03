import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../service/food/food-service.service';
import IFood from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private foodService: FoodServiceService){
    this.Food =  foodService.getAll()
  }
  Food: IFood[];

}
