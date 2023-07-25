import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {
  round
} from 'mathjs'
@Component({
  selector: 'app-algo1',
  templateUrl: './algo1.component.html',
  styleUrls: ['./algo1.component.css']
})
export class Algo1Component implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
  }
  value:any;
  ans:any;
  res:any;
  gcd(a:number, b:number):any{
    if(!b){
      return a;
    }
    return this.gcd(b, a%b);

  }
  phi(){
    let n = this.value;
    let result:number = n;
    var temp:number[] = new Array();
    for(let p=2; p*p <= n; ++p){
      if(n%p == 0){
        while(n%p ==0){
          n/=p;
        }
        result*=(1.0 - (1.0/p));
      }
    }
    for(let i=1; i<=this.value-1; i++ ){
      if(this.gcd(i,this.value)==1){
          temp.push(i);
      }
    }
    if(n>1)
      result *= (1.0 - (1.0/n));
    this.ans = round(result);
    this.res = temp;
  }


}
