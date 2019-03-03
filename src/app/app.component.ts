import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fruits = ['Mengo', 'Orange', 'Banana'];

  constructor() { }

  addFruit(item) {
    this.fruits.push(item);
  }  
}