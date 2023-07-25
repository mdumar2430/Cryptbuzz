import { Component, OnInit } from '@angular/core';
import { number } from 'mathjs';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-algo2',
  templateUrl: './algo2.component.html',
  styleUrls: ['./algo2.component.css']
})
export class Algo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:any;
  ans:any;
  isPrime(n:any): boolean{
    if (n <= 1)
    {
        return false;
    }
    if (n <= 3)
    {
        return true;
    }
    if (n % 2 == 0 || n % 3 == 0)
    {
        return false;
    }
    for (let i = 5; i * i <= n; i = i + 6)
    {

        if (n % i == 0 || n % (i + 2) == 0)
        {
            return false;
        }
    }
    return true;
}
power(x:any, y:any, p:any): number
{
    // let power = Math.pow(x,y);
    // let res = power % p;
    let res = 1;
    x = x % p;
    while (y > 0)
    {
        if (y % 2 == 1)
        {
            res = (res * x) % p;
        }
        y = Math.floor(y/2);
        x = (x * x) % p;
    }
    console.log("-"+res);
    return res;
}
  primitiveRoots(){
    var temp:number[] = new Array();
    if(this.isPrime(this.value))
    {
        if(this.value == 2){
            this.ans ="No primitive roots!! for 2";
        }
        let p=this.value-1;
        let c = 2,k=0,i=0;
        while (p > 1) {
            if (p % c == 0) {
                k++;
                p /= c;
            }
            else
                c++;
        }
        
        var a:number[] = new Array(k);
        c=2;p=this.value-1;
        while (p > 1) {
            if (p % c == 0) {
                a[i]=c;
                i++;
                p /= c;
            }
            else
                c++;
        }
        console.log(a);
        let size = a.length;
        let q1 = new Set<number>(a);
        let q = Array.from(q1)
        console.log(q);
        k=q.length;
        let res:number[] = new Array(k);
        for(let x=0;x<k;x++)
            res[x]=(this.value-1)/q[x];
        console.log(res);
        let count,number=0;
        console.log("Primitive roots are:")
        for(let x=2;x<this.value;x++)
        {
            count=0;
            for(let y=0;y<k;y++)
            {
                let g=this.power(x,res[y],this.value);
                if(g==1)
                    count++;
            }
            if(count==0)
            {
                console.log(x);
                temp.push(x)
                number++;
            }
        }
        // cout<<endl;
        // cout<<"\nNumber of primitive Roots : "<<number<<endl;
        if(this.value == 2){
            this.ans = "No Prime roots for 2"
        }
        else
            this.ans = temp;
    }
    else{
           this.ans = "Please enter a prime number!!";
    }
    //     cout<<endl<<"***Please enter Prime Number***"<<endl;
        

  }
}
