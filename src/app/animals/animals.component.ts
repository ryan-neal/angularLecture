import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals = ["Leopard", "Doggos", "Lion", "Bat"];
  constructor() { }

  ngOnInit() {
  }

  //add a method to add animals
  

}
