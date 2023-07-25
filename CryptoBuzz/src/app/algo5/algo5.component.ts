import { Component, OnInit } from '@angular/core';
import { and } from 'mathjs';

@Component({
  selector: 'app-algo5',
  templateUrl: './algo5.component.html',
  styleUrls: ['./algo5.component.css']
})
export class Algo5Component implements OnInit {
  num1:any;
  num2:any;
  ans:any;
  constructor() { }

  ngOnInit(): void {
  }
  modInverse(){
    let found = false;
    for(let x = 1; x < this.num2 && !found; x++)
          if (((this.num1 % this.num2) * (x % this.num2)) % this.num2 == 1){
            this.ans = x;
            found = true;
          }
            
    if(!found){
      this.ans = "There is no modular multiplicative inverse for this integer!"
    }         
  }
}
