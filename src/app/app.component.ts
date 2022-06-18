import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showModal: boolean = false;
  toppings: any;
  vegTop: boolean = true;
  nonvTop: boolean = true;
  customizeData: any;
  customizeTopping: any;

  hideme = {};
  toggleModal() {
    this.showModal = !this.showModal;
  }

  order = [];
  title = 'angtailwind';
  price: number = 0;
  pizza = {
    veg: [
      {
        id: 1,
        name: 'Deluxe Veggie',
        imgUrl: 'https://images.dominos.co.in/new_deluxe_veggie.jpg',
        size: [
          { size: 'regular', price: 150 },
          { size: 'medium', price: 200 },
          { size: 'large', price: 325 },
        ],
        price: 150,
        crust: '',
      },
      {
        id: 2,
        name: 'Cheese and corn',
        imgUrl: 'https://images.dominos.co.in/Corn.jpg',
        size: [
          { size: 'regular', price: 175 },
          { size: 'medium', price: 375 },
          { size: 'large', price: 475 },
        ],
        price: 175,
        crust: '',
      },
      {
        id: 3,
        name: 'Paneer Tikka',
        imgUrl: 'https://images.dominos.co.in/Paneer.jpg',

        size: [
          { size: 'regular', price: 160 },
          { size: 'medium', price: 290 },
          { size: 'large', price: 340 },
        ],
        price: 160,
        crust: '',
      },
    ],

    nonVeg: [
      {
        id: 11,
        name: 'Non-Veg Supreme',
        imgUrl: 'https://images.dominos.co.in/new_non_veg_supreme.jpg',

        size: [
          { size: 'regular', price: 190 },
          { size: 'medium', price: 325 },
          { size: 'large', price: 425 },
        ],
        crust: '',
        price: 190,
      },
      {
        id: 12,
        name: 'Checken Tikka',
        imgUrl: 'https://images.dominos.co.in/new_chicken_fiesta.jpg',
        size: [
          { size: 'regular', price: 210 },
          { size: 'medium', price: 370 },
          { size: 'large', price: 500 },
        ],
        crust: '',
        price: 210,
      },
      {
        id: 13,
        name: 'Pepper Barbecue Chicken',
        imgUrl: 'https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg',
        size: [
          { size: 'regular', price: 220 },
          { size: 'medium', price: 380 },
          { size: 'large', price: 525 },
        ],
        price: 220,
        crust: '',
      },
    ],
  };

  crust = [
    'New hand tossed',
    'Wheat thin crust',
    'Cheese Burst',
    'Fresh Pan Pizza',
  ];
  topping = {
    veg: [
      { id: 21, name: 'Black olive', price: 20 },
      { id: 22, name: 'Capsicum', price: 25 },
      { id: 23, name: 'Paneer', price: 35 },
      { id: 24, name: 'Mushroom', price: 30 },
      { id: 25, name: 'Fresh Tomato', price: 10 },
    ],
    nonVeg: [
      { id: 26, name: 'Chicken Tikka', price: 35 },
      { id: 27, name: 'Barbeque chicken', price: 45 },
      { id: 28, name: 'Grilled chicken', price: 40 },
    ],
  };

  slides = [
    { id: 101, name: 'Cold drink', price: 55 },
    { id: 102, name: 'Mousse cake', price: 90 },
  ];
  constructor() {}

  customisePizza(data: any, type: string) {
    this.showModal = !this.showModal;
    this.customizeData = data;
    if (type == 'veg') {
      this.toppings = this.topping;
      this.nonvTop = false;
    } else {
      // this.topping.veg.splice(
      //   this.topping.veg.findIndex((a) => a.name == 'Paneer'),
      //   1
      // );

      // this.topping.veg.forEach(e => {
      //   this.hideme[e.id] = false;
      // });
      this.toppings = this.topping;

      this.vegTop = true;
      this.nonvTop = true;
    }
    console.log(data);
  }
  getPizzaPrice(event: any, veg: any) {
    veg.price = event.target.value;
    // this.pizza.veg[veg.id - 1]['price'] = event.target.value;
    console.log('price', event.target.value, veg);
  }
  getCrustType(event: any, pizzatype: any) {
    console.log('CrustCall');

    var objIndex;
    if (pizzatype.id < 10) {
      objIndex = this.pizza.veg.findIndex((obj) => obj.id == pizzatype.id);
      this.pizza.veg[objIndex].crust = event.target.value;
      console.log('veg', objIndex);
    } else {
      objIndex = this.pizza.nonVeg.findIndex((obj) => obj.id == pizzatype.id);
      this.pizza.nonVeg[objIndex].crust = event.target.value;
      console.log('nonveg', objIndex);
    }

    console.log('crust', event, pizzatype);
  }

  addExtraCheese(event: any, data: any) {
    data.price += parseInt(event.target.value);
    console.log(data, event);
  }

  addToCart(data: any) {
    var mahesh = { data: '', count: '' };
    // mahesh.data=data
    // mahesh.count=

    // this.order['jdf'] = data;

    console.log('data', data);
  }

  addTopping(event: any, toppingType: any) {
    console.log('topp', event, toppingType);
  }

  ngOninit() {}
}
