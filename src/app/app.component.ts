import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleName: string = 'Comcast Grow 2 Code';
  cityName: string = 'Philadelphia';
  editableTitle: boolean = false;

  updateTitle(title: string){
    this.titleName = title;
    this.editableTitle = false;
  }
}
