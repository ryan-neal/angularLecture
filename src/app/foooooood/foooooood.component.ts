import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foooooood',
  templateUrl: './foooooood.component.html',
  styleUrls: ['./foooooood.component.css']
})
export class FooooooodComponent implements OnInit {

  food = ["lasagna", "nachos", "deer meat", "dear meat nachos"]
  constructor() { }

  ngOnInit() {
  }

}
