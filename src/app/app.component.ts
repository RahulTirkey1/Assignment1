import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr:number[]=[2,3,10,15,26,35,50,63,72];
  check:boolean=false;
  index:number;
  findNumber(num)
  {
     this.index=this.arr[num];
     this.check=true;
  }
  
}
