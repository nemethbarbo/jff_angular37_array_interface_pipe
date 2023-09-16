import { Component } from '@angular/core';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent {

  private fruits:string[] = ["alma", "körte", "szilva", "barack"];
  private points:number[] = [98, 58, 62, 71];

  // read-onl property - csak olvasható (nincs setter h módosítható lenne)
  public get Fruits() : string[] {  //property - egy privát adattag elérését biztosítja
    return this.fruits;
  }

  public get Points() : number[] {
    return this.points;
  }
  
  public getRandomFruit():string {
    return this.fruits[Math.floor(Math.random()*this.fruits.length)];
  }
  
}
