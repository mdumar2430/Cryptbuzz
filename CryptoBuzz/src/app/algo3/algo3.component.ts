import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo3',
  templateUrl: './algo3.component.html',
  styleUrls: ['./algo3.component.css']
})
export class Algo3Component implements OnInit {
  res = new Array<string>();
  num1:number = 0 ;
  num2:number = 0 ;
  ans:any;
  constructor() { }

  ngOnInit(): void {
  }
  gcd ( ):void {
    let divident = 0, divisor =0;
	let step = "Steps:";
	this.res.push(step);
    if(this.num1>this.num2)
	    {
		    divident=this.num1;
		    divisor= this.num2;
	    }
	    else
	    {
		    divident=this.num2;
		    divisor=this.num1;
	    }
	    let quo=Math.floor(divident/divisor);
	    let rem=divident%divisor;
      step = divident+" = "+quo+" * "+divisor+" + "+rem; 
      this.res.push(step);
      while(rem!=0)
	    {
	    	divident=divisor;
		    divisor=rem;
		    quo=Math.floor(divident/divisor);
		    rem=divident%divisor;
		    step = divident+" = "+quo+" * "+divisor+" + "+rem;
		    this.res.push(step);
	    }
      this.ans="The GCD of "+this.num1+" and "+this.num2+" is "+divisor;
  }

}
