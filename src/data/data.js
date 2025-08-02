
// import French_Fries from "../../public/Starter/Fries.jpg"
// import Masala_Fries from "../../public/Starter/Masala_fries.jpg"
// import Cheese_Fries from "../../public/Starter/cheese_fries.jpg"
// import Nuggets from "../../public/Starter/Nuggets.jpg"
// import hot_wings from "../../public/Starter/hot_wings.jpg"
// import Coleslaw_salad from "../../public/Starter/Coleslaw_Salad.jpg"
// import Russian_salad from "../../public/Starter/Russian_Salad.jpg"


// import Zinger_Burger from '../../public/Burger/Zinger_burger.jpeg'
// import Stuffed_Beef_Burger from '../../public/Burger/Stuffed_Beef_Burger.jpeg'
// import Spicy_Zinger_Burger from '../../public/Burger/Spicy_Zinger_Burger.jpeg'
// import Mushroom_Burger from '../../public/Burger/Mushroom_Burger.jpeg'
// import Grilled_Chicken_Burger from '../../public/Burger/Grilled_Chicken_Burger.jpeg'
// import Double_Patty_Burger from '../../public/Burger/Double_Patty_Burger.jpeg'
// import Crispy_Chicken_Burger from '../../public/Burger/Crispy_Chicken_Burger.jpeg'
// import Chicken_Burger from '../../public/Burger/Chicken_Burger.jpeg'
// import Cheese_Burger from '../../public/Burger/Cheese_Burger.jpeg'
// import Beef_Burger from '../../public/Burger/Beef_Burger.jpeg'


// import Seven_up from '../../public/Drinks/7up_cam.jpeg'
// import Cock from '../../public/Drinks/Coca_Cola.jpeg'
// import Coffee from '../../public/Drinks/Cold_Coffee.jpeg'
// import Fanta from '../../public/Drinks/Fanta.jpeg'
// import Fresh_lime from '../../public/Drinks/Fresh_Lime.jpeg'
// import Water from '../../public/Drinks/Mineral_Water.jpeg'
// import Mint from '../../public/Drinks/Mint_Margarita.jpeg'
// import Pakola from '../../public/Drinks/Pakola_Ice_Cream_Soda.jpeg'
// import Pepsi from '../../public/Drinks/Pepsi.jpeg'
// import Sprite from '../../public/Drinks/Sprite.jpeg'


// import Bbq_pizza from '../../public/Pizza/BBQ_Chicken_Pizza.jpeg'
// import Chese_pizza from '../../public/Pizza/Cheese_Pizza.jpeg'
// import Chiken_tikka_pizza from '../../public/Pizza/Chicken_Tikka_Pizza.jpeg'
// import Crown_pizza from '../../public/Pizza/Crown_Crust_Pizza.jpeg'
// import Fajita_pizza from '../../public/Pizza/Fajita_Pizza.jpeg'
// import Malai_Boti_pizza from '../../public/Pizza/Malai_Boti_Pizza.jpeg'
// import Peppeoroni_pizza from '../../public/Pizza/Pepperoni_Pizza.jpeg'
// import Smoky_pizza from '../../public/Pizza/Smoky_Pizza.jpeg'
// import Stuffed_Crust_pizza from '../../public/Pizza/Stuffed_Crust_Pizza.jpeg'
// import Vegetable_pizza from '../../public/Pizza/Vegetable_Pizza.jpeg'


// import Beef_boti from '../../public/Bbq/Beef_Boti.jpeg'
// import Beef_kabab from '../../public/Bbq/Beef_Seekh_Kabab.jpeg'
// import Behari_boti from '../../public/Bbq/Behari_Boti.jpeg'
// import Chicken_boti from '../../public/Bbq/Chicken_Boti.jpeg'
// import Chiken_seekh_kabab from '../../public/Bbq/Chicken_Seekh_kabab.jpeg'
// import Grilled_tikka from '../../public/Bbq/Grilled_tikka.jpeg'
// import Reshmi_kabab from '../../public/Bbq/Reshmi_Kabab.jpeg'



const menuData = {
 Starters: [
    { name: "French Fries", price: 200, img: "/Starter/Fries.jpg" },
    { name: "Masala Fries", price: 220, img: "/Starter/Masala_fries.jpg" },
    { name: "Cheese Fries", price: 250, img: "/Starter/cheese_fries.jpg" },
    { name: "Chicken Nuggets (6 pcs)", price: 300, img: "/Starter/Nuggets.jpg" },
    { name: "Hot Wings (6 pcs)", price: 350, img: "/Starter/hot_wings.jpg" },
    { name: "Coleslaw Salad", price: 150, img: "/Starter/Coleslaw_Salad.jpg" },
    { name: "Russian Salad", price: 180, img: "/Starter/Russian_Salad.jpg" },
  ],

  Rolls: [
    { name: "Chicken Roll", price: 180, img: "/Roll/Chiken_Roll.jpeg" },
    { name: "Mayo Garlic Roll", price: 220, img: "/Roll/Mayo_Roll.jpeg" },
    { name: "Behari Roll", price: 200, img: "/Roll/Behari_Roll.jpeg" },
    { name: "Malai Boti Roll", price: 230, img: "/Roll/Malai_Boti_Roll.jpeg" },
    { name: "Reshmi Roll", price: 240, img: "/Roll/Reshmi_Roll.jpeg" },
    { name: "Zinger Roll", price: 250, img: "/Roll/Zinger_Roll.jpeg" },
    { name: "Cheese Roll", price: 270, img: "/Roll/Cheese_Roll.jpeg" },
    { name: "Shawarma Roll", price: 260, img: "/Roll/Shawarma_Roll.jpeg" },
    { name: "Spicy Chicken Roll", price: 190, img: "/Roll/Spicy_Chicken_Roll.jpeg" },
    { name: "BBQ Roll", price: 210, img: "/Roll/BBQ_Roll.jpeg" },
  ],

 Burgers: [
    { name: "Zinger Burger", price: 450, img: "/Burger/Zinger_burger.jpeg" },
    { name: "Beef Burger", price: 500, img: "/Burger/Beef_Burger.jpeg" },
    { name: "Chicken Burger", price: 400, img: "/Burger/Chicken_Burger.jpeg" },
    { name: "Double Patty Burger", price: 550, img: "/Burger/Double_Patty_Burger.jpeg" },
    { name: "Cheese Burger", price: 470, img: "/Burger/Cheese_Burger.jpeg" },
    { name: "Crispy Chicken Burger", price: 480, img: "/Burger/Crispy_Chicken_Burger.jpeg" },
    { name: "Grilled Chicken Burger", price: 520, img: "/Burger/Grilled_Chicken_Burger.jpeg" },
    { name: "Spicy Zinger Burger", price: 490, img: "/Burger/Spicy_Zinger_Burger.jpeg" },
    { name: "Stuffed Beef Burger", price: 580, img: "/Burger/Stuffed_Beef_Burger.jpeg" },
    { name: "Mushroom Burger", price: 530, img: "/Burger/Mushroom_Burger.jpeg" },
  ],

Drinks: [
    { name: "Pepsi", price: 70, img: "/Drinks/Pepsi.jpeg" },
    { name: "7Up", price: 70, img: "/Drinks/7up_cam.jpeg" },
    { name: "Coca Cola", price: 70, img: "/Drinks/Coca_Cola.jpeg" },
    { name: "Sprite", price: 70, img: "/Drinks/Sprite.jpeg" },
    { name: "Fanta", price: 70, img: "/Drinks/Fanta.jpeg" },
    { name: "Pakola Ice Cream Soda", price: 60, img: "/Drinks/Pakola_Ice_Cream_Soda.jpeg" },
    { name: "Mineral Water", price: 50, img: "/Drinks/Mineral_Water.jpeg" },
    { name: "Mint Margarita", price: 120, img: "/Drinks/Mint_Margarita.jpeg" },
    { name: "Fresh Lime", price: 100, img: "/Drinks/Fresh_Lime.jpeg" },
    { name: "Cold Coffee", price: 180, img: "/Drinks/Cold_Coffee.jpeg" },
  ],

   Pizzas: [
    { name: "Cheese Pizza", price: 650, img: "/Pizza/Cheese_Pizza.jpeg" },
    { name: "Fajita Pizza", price: 750, img: "/Pizza/Fajita_Pizza.jpeg" },
    { name: "Chicken Tikka Pizza", price: 780, img: "/Pizza/Chicken_Tikka_Pizza.jpeg" },
    { name: "BBQ Chicken Pizza", price: 770, img: "/Pizza/BBQ_Chicken_Pizza.jpeg" },
    { name: "Pepperoni Pizza", price: 800, img: "/Pizza/Pepperoni_Pizza.jpeg" },
    { name: "Vegetable Pizza", price: 650, img: "/Pizza/Vegetable_Pizza.jpeg" },
    { name: "Crown Crust Pizza", price: 950, img: "/Pizza/Crown_Crust_Pizza.jpeg" },
    { name: "Stuffed Crust Pizza", price: 900, img: "/Pizza/Stuffed_Crust_Pizza.jpeg" },
    { name: "Malai Boti Pizza", price: 780, img: "/Pizza/Malai_Boti_Pizza.jpeg" },
    { name: "Smoky Pizza", price: 820, img: "/Pizza/Smoky_Pizza.jpeg" },
  ],

   BBQ: [
    { name: "Chicken Seekh Kabab", price: 350, img: "/Bbq/Chicken_Seekh_Kabab.jpeg" },
    { name: "Beef Seekh Kabab", price: 380, img: "/Bbq/Beef_Seekh_Kabab.jpeg" },
    { name: "Chicken Boti", price: 400, img: "/Bbq/Chicken_Boti.jpeg" },
    { name: "Beef Boti", price: 420, img: "/Bbq/Beef_Boti.jpeg" },
    { name: "Reshmi Kabab", price: 450, img: "/Bbq/Reshmi_Kabab.jpeg" },
    { name: "Behari Boti", price: 430, img: "/Bbq/Behari_Boti.jpeg" },
    { name: "Grilled Tikka", price: 470, img: "/Bbq/Grilled_tikka.jpeg" },
  ]
};

export default menuData;