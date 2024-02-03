import { Injectable } from '@angular/core';
import IFood from 'src/app/shared/models/Food';
import IFoodTag from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }
  tags: IFoodTag[]=[];
  load = true;
  getAll(): IFood[]{
    return [
      {
        id:'1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:'2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:'3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id:'4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:'5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:'6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,

        origins: ['italy'],
        stars: 4,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:'7',
        name: 'Spicy Cheese Burger',
        price: 12,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: 'assets/food-7.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id:'8',
        name: 'Vegetables Magento Pizza',
        price: 9,
        cookTime: '45-50',
        favorite: false,
        origins: ['indian'],
        stars: 4.0,
        imageUrl: 'assets/food-8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
  getAllTags():IFoodTag[]{
    if(this.load){
      this.getAll().forEach(food=> {
        food.tags?.forEach(tag=>{
          let index = this.tags.findIndex(el => el.name == tag);
          if(index != -1){
             this.tags[index]['count'] = this.tags[index]['count']+1  
          }else{
            this.tags.push({
              name: tag,
              count:1
            })
          }
        })
      });
      this.load= false
    }
    
    return this.tags;
  }
  getFoodByTags(tag:string):IFood[]{
    return tag === 'All' ?
      this.getAll() :
      this.getAll().filter(food=> food.tags?.includes(tag))
  }
}
