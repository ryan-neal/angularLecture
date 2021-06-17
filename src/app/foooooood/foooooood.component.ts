import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foooooood',
  templateUrl: './foooooood.component.html',
  styleUrls: ['./foooooood.component.css']
})
export class FooooooodComponent implements OnInit {

  food: string[] = ["lasagna", "nachos", "deer meat", "dear meat nachos"]
  plate: string[] = [];
  maxFood: number = 3;
  
  constructor() { }

  ngOnInit() {
  }

  addFood(item: string): void {
    this.food.push(item);
  }

  addFoodToPlate(item: string): void {
    if (this.plate.includes(item)){
      let index = this.plate.indexOf(item);
      this.plate.splice(index, 1);
    } else if(this.plate.length < this.maxFood) {
        this.plate.push(item)
    }
  }

  enabled(): boolean {
    if (this.plate.length < this.maxFood){
      return false;
    }
    return true;
  }

}
