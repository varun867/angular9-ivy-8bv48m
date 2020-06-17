import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major; 
  names = ['Hello','World','!'];
  num : Number;
  ///////
  //Multiple Types
  twoType :number|string;
  AppComponent(){
    this.twoType =5;
    this.twoType = 'bla bla'
  }
   
   Calculate()
   {
     let num: number = 0.222;
     return num;
   }

}
