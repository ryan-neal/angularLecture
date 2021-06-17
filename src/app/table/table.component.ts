import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableContent: object[] = [
    {name: "bob", job: "zookeeper", favoriteAnimal: ["lion", "dog"]},
    {name: "jane", job: "zookeeper", favoriteAnimal: ["dog", "panther"]},
    {name: "henry", job: "zookeeper", favoriteAnimal: ["cat", "robin"]}
  ]
  constructor() { }

  ngOnInit() {
  }

}
