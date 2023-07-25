import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo4',
  templateUrl: './algo4.component.html',
  styleUrls: ['./algo4.component.css']
})
export class Algo4Component implements OnInit {
  ans:any;
  num:any;
  constructor() { }

  ngOnInit(): void {
  }
  getRandomInt(min:any, max:any):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  power(x:number, y:number, p:number):number{
    let res = 1;
    x = x % p;
    while (y > 0)
    {
        if (y & 1)
            res = (res*x) % p;
        y = y>>1;
        x = (x*x) % p;
    }
    return res;
  }

miillerTest(d:number, n:number):boolean
{
    let a = 2 + this.getRandomInt(2,this.num-2) % (n - 4);
    let x = this.power(a, d, n);
    if (x == 1  || x == n-1)
       return true;
    while (d != n-1)
    {
        x = (x * x) % n;
        d *= 2;
        if (x == 1)
            return false;
        if (x == n-1)
            return true;
    }
    return false;
}
 
isPrime(n:number, k:number):boolean
{
    if (n <= 1 || n == 4)
        return false;
    if (n <= 3)
        return true;
    let d = n - 1;
    while (d % 2 == 0)
        d =Math.floor(d/2);
    for (let i = 0; i < k; i++)
         if (!this.miillerTest(d, n))
              return false;
    return true;
}


  mrPrimalityTest(){
    let k =4;
    if (this.isPrime(this.num, k))
      this.ans= "The probability of "+this.num+" to be prime is high.";
    else
    this.ans= this.num+" is a composite number.";
  }

}
