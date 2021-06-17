import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals: string[] = ["Leopard", "Doggos", "Lion", "Bat"];
  maxAnimals: number = 5;
  zoo: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  //1. add a method to add animals
  addAnimal(animal: string): void {
    this.animals.push(animal);
  }

  // add animals to zoo if zoo is less than maxAnimals
  // remove animal from zoo if they are already in the zoo
  addToZoo(animal: string): void {
    if (this.zoo.includes(animal)) {
      let index = this.zoo.indexOf(animal);
      this.zoo.splice(index, 1);
    }
    else if (this.zoo.length < this.maxAnimals){
      this.zoo.push(animal)
    }
  }

  disabled(): boolean {
    if (this.zoo.length < this.maxAnimals ){
      return false;
    }
    return true;
  }
  

}
