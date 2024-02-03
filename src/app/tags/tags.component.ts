import { Component, OnInit } from '@angular/core';
import IFoodTag from '../shared/models/Tag';
import { FoodServiceService } from '../service/food/food-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
 constructor(
  private foodService: FoodServiceService,
  private router: Router
  ){

 }
 tags: IFoodTag[] = [];
 tagSelected!: IFoodTag ;
 tagsLoaded = false;
 ngOnInit(): void {
    if(!this.tagsLoaded) {
      this.tags = this.foodService.getAllTags();
      this.tagsLoaded = true
    }
 }
 searchTag(tag: IFoodTag):void{
  this.router.navigate(['tag',tag.name])
 }
}
