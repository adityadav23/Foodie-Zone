import { Component, Input, OnInit } from '@angular/core';
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
 tagsSingleFood!: string[]
 tagSelected!: IFoodTag ;
 tagsLoaded = false;
 @Input()
  foodId!: number
 ngOnInit(): void {
    if(!this.tagsLoaded && !this.foodId) {
      this.tags = this.foodService.getAllTags();
      this.tagsLoaded = true
    }else if(this.foodId){
        this.tagsSingleFood = this.foodService.getTagByFoodId(this.foodId)
    }

 }
 searchTag(tag: IFoodTag):void{
  this.router.navigate(['tag',tag.name])
 }
}
