import { Component } from '@angular/core';

export class FinalOrder {
  id: any;
  name: any;
  imgUrl: any;
  size: any;
  pizza_price!: number;
  topping_price!: number;
  cheese_price!: number;
  total_price!: number;
  extra_cheese: any;
  isLargePizza!: boolean;
  topping_type: any;
  crust: any;
  addToCart!: boolean;
  count!: number;
}

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
        pizza_price: 150,
        topping_price: 0,
        cheese_price: 0,
        total_price: 0,
        extra_cheese: false,
        isLargePizza: false,
        topping_type: [],
        crust: '',
        addToCart: false,
        count: 0,
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

        pizza_price: 175,
        topping_price: 0,
        cheese_price: 0,
        total_price: 0,
        extra_cheese: false,
        isLargePizza: false,
        topping_type: [],
        crust: '',
        addToCart: false,
        count: 0,
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

        pizza_price: 160,
        topping_price: 0,
        cheese_price: 0,
        total_price: 0,
        extra_cheese: false,
        isLargePizza: false,
        topping_type: [],
        crust: '',
        addToCart: false,
        count: 0,
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
        pizza_price: 190,
        topping_price: 0,
        cheese_price: 0,
        total_price: 0,
        extra_cheese: false,
        isLargePizza: false,
        topping_type: [],
        crust: '',
        addToCart: false,
        count: 0,
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
        pizza_price: 210,
        topping_price: 0,
        cheese_price: 0,
        total_price: 0,
        extra_cheese: false,
        isLargePizza: false,
        topping_type: [],
        crust: '',
        addToCart: false,
        count: 0,
      },
      {
        id: 13,
        name: 'Pepper Barbecue',
        imgUrl: 'https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg',
        size: [
          { size: 'regular', price: 220 },
          { size: 'medium', price: 380 },
          { size: 'large', price: 525 },
        ],
        pizza_price: 220,
        topping_price: 0,
        cheese_price: 0,
        total_price: 0,
        extra_cheese: false,
        isLargePizza: false,
        topping_type: [],
        crust: '',
        addToCart: false,
        count: 0,
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
    veg.pizza_price = parseInt(JSON.parse(event.target.value).price);
    if (JSON.parse(event.target.value).size == 'large') {
      veg.isLargePizza = true;
      alert(
        'With Large Size Pizza You are eligible for 2 topping with no exta cost'
      );
      console.log('price', JSON.parse(event.target.value), veg);
    }
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
    if (event.target.checked === true) {
      data.extra_cheese = true;
      data.cheese_price += parseInt(event.target.value);
    } else {
      data.extra_cheese = false;
      data.cheese_price -= parseInt(event.target.value);
    }
    console.log(data, event);
  }

  public topping_type = [];
  public topping_type_for_large_pizza = [];
  public topping_price_for_large_pizza = 0;
  public topping_type_for_nonveg = [];
  public topping_price_for_non = 0;
  addTopping(event: any, customisePizza: any, toppingData: any, type: string) {
    var toppingName = toppingData.name;
    if (type == 'vegTopping') {
      if (customisePizza.isLargePizza == true) {
        console.log('largePizza');
        if (event.target.checked == true) {
          (this.topping_type_for_large_pizza as string[]).push(
            toppingData.name
          );
          console.log('topp', event.target.value, customisePizza);
          customisePizza.topping_type = this.topping_type_for_large_pizza;
          if (this.topping_type_for_large_pizza.length > 2) {
            customisePizza.topping_price += parseInt(event.target.value);
            this.topping_price_for_large_pizza += parseInt(event.target.value);
          }

          console.log(
            'customisePizza.price',
            customisePizza.topping_price,
            this.topping_type_for_large_pizza,
            this.topping_price_for_large_pizza
          );
        } else {
          this.topping_type_for_large_pizza =
            this.topping_type_for_large_pizza.filter(
              (topping_type_for_large_pizza) =>
                topping_type_for_large_pizza !== toppingName
            );
          customisePizza.topping_type = this.topping_type_for_large_pizza;

          if (
            this.topping_type_for_large_pizza.length >= 2 &&
            this.topping_price_for_large_pizza !== 0
          ) {
            customisePizza.topping_price -= parseInt(event.target.value);
            this.topping_price_for_large_pizza -= parseInt(event.target.value);
          }

          console.log(
            'customisePizza.price',
            customisePizza.topping_price,
            this.topping_type_for_large_pizza,
            this.topping_price_for_large_pizza
          );
        }
      } else {
        if (event.target.checked == true) {
          (this.topping_type as string[]).push(toppingData.name);
          console.log('topp', event.target.value, customisePizza);
          customisePizza.topping_price += parseInt(event.target.value);
          customisePizza.topping_type = this.topping_type;
          console.log(
            'customisePizza.price',
            customisePizza.topping_price,
            this.topping_type
          );
        } else {
          this.topping_type = this.topping_type.filter(
            (topping_type) => topping_type !== toppingName
          );
          customisePizza.topping_price -= parseInt(event.target.value);
          customisePizza.topping_type = this.topping_type;

          console.log(
            'customisePizza.price',
            customisePizza.topping_price,
            this.topping_type
          );
        }
      }
    } else {
      this.topping_price_for_non = 0;
      this.topping_type_for_nonveg = [];
      (this.topping_type_for_nonveg as string[]).push(toppingData.name);
      this.topping_price_for_non = toppingData.price;
      customisePizza.topping_price += this.topping_price_for_non;
      customisePizza.topping_type = customisePizza.topping_type.concat(
        this.topping_type_for_nonveg
      );
      console.log(
        'workForRadio',
        type,
        event.target.value,
        customisePizza,
        toppingData
      );
      console.log(
        'workForRadio2',
        this.topping_price_for_non,
        customisePizza.topping_price,
        this.topping_type_for_nonveg,
        customisePizza.topping_type
      );
    }
  }

  ngOninit() {}

  finalOrder = [];
  add2Cart(data: any, type: string) {
    console.log('data', data, type);
    if (type == 'add') {
      if (data.count == 0) {
        (this.finalOrder as string[]).push(data);
      }
      (data.addToCart = true), (data.count += 1);
    } else {
      data.count -= 1;
      if (data.count == 0) {
        data.addToCart = false;
        this.finalOrder = this.finalOrder.filter(
          (finalOrder) => finalOrder !== data
        );
      }
    }

    // if (
    //   (this.finalOrder = this.finalOrder.filter(
    //     (finalOrder) => finalOrder !== data
    //   ))
    // ) {
    //   console.log('repeat');
    // }

    // (this.finalOrder as string[]).push(data);
    // if (data) {
    //   console.log("add");

    // } else {
    //   this.finalOrder = this.finalOrder.filter(
    //     (finalOrder) => finalOrder == data
    //   );
    // }

    console.log('final', this.finalOrder);
  }

  changeJson(data: any) {
    return JSON.parse(data);
  }
}
