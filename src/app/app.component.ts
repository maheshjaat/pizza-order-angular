import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angtailwind';
  pizza = [
    {
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
        },
        {
          id: 13,
          name: 'Pepper Barbecue Chicken',
          imgUrl:
            'https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg',
          size: [
            { size: 'regular', price: 220 },
            { size: 'medium', price: 380 },
            { size: 'large', price: 525 },
          ],
        },
      ],
    },
  ];
  crust = [
    'New hand tossed',
    'Wheat thin crust',
    'Cheese Burst',
    'Fresh Pan Pizza',
  ];
  toppings = [
    {
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
    },
  ];
  slides = [
    { id: 101, name: 'Cold drink', price: 55 },
    { id: 102, name: 'Mousse cake', price: 90 },
  ];
  constructor() {}

  customisePizza(data: any) {
    console.log(data);
  }
}
