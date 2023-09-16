import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  // meghagyjuk publikusan az adatokat, getters setters nélkül - bad practice
  exampleTxt:string = "Angular is the best!";
  realValue:number = 5.123;
  percentValue:number = 0.85456;
  moneyValue:number = 100.123;
  dateValue:number = Date.now();
}
