import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:20,
      foodImg:"https://www.myhealthybreakfast.in/images/snacks/grilled-paneer-corn-sandwich.jpg"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:32,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVJbVbEwlkxvxXwruPhq_adQvq2oLSrOHww&usqp=CAU"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:49,
      foodImg:"https://eatloverepeat.co.nz/wp-content/uploads/2022/03/paneer-veg-patty.png"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:40,
      foodImg:"https://countryrange.co.uk/wp-content/uploads/2019/09/Chicken-Tikka-Masala-Naan-Wrap.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:10,
      foodImg:"https://thumbs.dreamstime.com/z/dive-chocolate-lover-s-paradise-our-chunk-brownie-indulgence-brownies-loaded-generous-chunks-providing-282594902.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:21,
      foodImg:"https://i0.wp.com/abajillianrecipes.com/wp-content/uploads/2023/11/Eggnog-Oreo-Cheesecake-Ice-Cream.png?resize=800%2C1200&ssl=1"
    }
  ]

}

