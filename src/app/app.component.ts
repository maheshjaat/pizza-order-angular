import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public cmService: CommonService, public router: Router) {}
  signOut() {
    this.router.navigate(['/']);
    this.cmService.signOut();
  }
}

//export class FinalOrder {
//   id: any;
//   name: any;
//   imgUrl: any;
//   size: any;
//   pizza_price!: number;
//   topping_price!: number;
//   cheese_price!: number;
//   total_price!: number;
//   extra_cheese: any;
//   isLargePizza!: boolean;
//   topping_type: any;
//   crust: any;
//   addToCart!: boolean;
//   count!: number;
// }
