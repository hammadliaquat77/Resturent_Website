
import French_Fries from "../../public/Starter/Fries.jpg"
import Masala_Fries from "../../public/Starter/Masala_fries.jpg"
import Cheese_Fries from "../../public/Starter/cheese_fries.jpg"
import Nuggets from "../../public/Starter/Nuggets.jpg"
import hot_wings from "../../public/Starter/hot_wings.jpg"
import Coleslaw_salad from "../../public/Starter/Coleslaw_Salad.jpg"
import Russian_salad from "../../public/Starter/Russian_Salad.jpg"


import Bbq_roll from '../../public/Roll/BBQ_Roll.jpeg'
import Behari_roll from '../../public/Roll/Behari_Roll.jpeg'
import Chese_roll from '../../public/Roll/Cheese_Roll.jpeg'
import Chiken_roll from '../../public/Roll/Chiken_Roll.jpeg'
import Malai_Boti_roll from '../../public/Roll/Malai_Boti_Roll.jpeg'
import Mayo_roll from '../../public/Roll/Mayo_Roll.jpeg'
import Reshmi_roll from '../../public/Roll/Reshmi_Roll.jpeg'
import Shawarma_roll from '../../public/Roll/Shawarma_Roll.jpeg'
import Spicy_chiken_roll from '../../public/Roll/Spicy_Chicken_Roll.jpeg'
import Zinger_roll from '../../public/Roll/Zinger_Roll.jpeg'


import Zinger_Burger from '../../public/Burger/Zinger_burger.jpeg'
import Stuffed_Beef_Burger from '../../public/Burger/Stuffed_Beef_Burger.jpeg'
import Spicy_Zinger_Burger from '../../public/Burger/Spicy_Zinger_Burger.jpeg'
import Mushroom_Burger from '../../public/Burger/Mushroom_Burger.jpeg'
import Grilled_Chicken_Burger from '../../public/Burger/Grilled_Chicken_Burger.jpeg'
import Double_Patty_Burger from '../../public/Burger/Double_Patty_Burger.jpeg'
import Crispy_Chicken_Burger from '../../public/Burger/Crispy_Chicken_Burger.jpeg'
import Chicken_Burger from '../../public/Burger/Chicken_Burger.jpeg'
import Cheese_Burger from '../../public/Burger/Cheese_Burger.jpeg'
import Beef_Burger from '../../public/Burger/Beef_Burger.jpeg'


import Seven_up from '../../public/Drinks/7up_cam.jpeg'
import Cock from '../../public/Drinks/Coca_Cola.jpeg'
import Coffee from '../../public/Drinks/Cold_Coffee.jpeg'
import Fanta from '../../public/Drinks/Fanta.jpeg'
import Fresh_lime from '../../public/Drinks/Fresh_Lime.jpeg'
import Water from '../../public/Drinks/Mineral_Water.jpeg'
import Mint from '../../public/Drinks/Mint_Margarita.jpeg'
import Pakola from '../../public/Drinks/Pakola_Ice_Cream_Soda.jpeg'
import Pepsi from '../../public/Drinks/Pepsi.jpeg'
import Sprite from '../../public/Drinks/Sprite.jpeg'


import Bbq_pizza from '../../public/Pizza/BBQ_Chicken_Pizza.jpeg'
import Chese_pizza from '../../public/Pizza/Cheese_Pizza.jpeg'
import Chiken_tikka_pizza from '../../public/Pizza/Chicken_Tikka_Pizza.jpeg'
import Crown_pizza from '../../public/Pizza/Crown_Crust_Pizza.jpeg'
import Fajita_pizza from '../../public/Pizza/Fajita_Pizza.jpeg'
import Malai_Boti_pizza from '../../public/Pizza/Malai_Boti_Pizza.jpeg'
import Peppeoroni_pizza from '../../public/Pizza/Pepperoni_Pizza.jpeg'
import Smoky_pizza from '../../public/Pizza/Smoky_Pizza.jpeg'
import Stuffed_Crust_pizza from '../../public/Pizza/Stuffed_Crust_Pizza.jpeg'
import Vegetable_pizza from '../../public/Pizza/Vegetable_Pizza.jpeg'


import Beef_boti from '../../public/Bbq/Beef_Boti.jpeg'
import Beef_kabab from '../../public/Bbq/Beef_Seekh_Kabab.jpeg'
import Behari_boti from '../../public/Bbq/Behari_Boti.jpeg'
import Chicken_boti from '../../public/Bbq/Chicken_Boti.jpeg'
import Chiken_seekh_kabab from '../../public/Bbq/Chicken_Seekh_kabab.jpeg'
import Grilled_tikka from '../../public/Bbq/Grilled_Tikka.jpeg'
import Reshmi_kabab from '../../public/Bbq/Reshmi_Kabab.jpeg'



const menuData = {
    Starters: [
  { name: "French Fries", price: 200, img: French_Fries },
  { name: "Masala Fries", price: 220, img: Masala_Fries },
  { name: "Cheese Fries", price: 250, img: Cheese_Fries },
  { name: "Chicken Nuggets (6 pcs)", price: 300, img: Nuggets  },
  { name: "Hot Wings (6 pcs)", price: 350, img: hot_wings },
  { name: "Coleslaw Salad", price: 150, img: Coleslaw_salad },
  { name: "Russian Salad", price: 180, img: Russian_salad },
],

   Rolls: [
  { name: "Chicken Roll", price: 180, img: Chiken_roll },
  { name: "Mayo Garlic Roll", price: 220, img: Mayo_roll },
  { name: "Behari Roll", price: 200, img: Behari_roll},
  { name: "Malai Boti Roll", price: 230, img: Malai_Boti_roll },
  { name: "Reshmi Roll", price: 240, img: Reshmi_roll},
  { name: "Zinger Roll", price: 250, img: Zinger_roll },
  { name: "Cheese Roll", price: 270, img: Chese_roll },
  { name: "Shawarma Roll", price: 260, img: Shawarma_roll },
  { name: "Spicy Chicken Roll", price: 190, img: Spicy_chiken_roll },
  { name: "BBQ Roll", price: 210, img: Bbq_roll },
],

    Burgers: [
  { name: "Zinger Burger", price: 450, img: Zinger_Burger },
  { name: "Beef Burger", price: 500, img: Beef_Burger },
  { name: "Chicken Burger", price: 400, img: Chicken_Burger },
  { name: "Double Patty Burger", price: 550, img: Double_Patty_Burger },
  { name: "Cheese Burger", price: 470, img: Cheese_Burger },
  { name: "Crispy Chicken Burger", price: 480, img: Crispy_Chicken_Burger },
  { name: "Grilled Chicken Burger", price: 520, img: Grilled_Chicken_Burger },
  { name: "Spicy Zinger Burger", price: 490, img: Spicy_Zinger_Burger },
  { name: "Stuffed Beef Burger", price: 580, img:  Stuffed_Beef_Burger },
  { name: "Mushroom Burger", price: 530, img: Mushroom_Burger },
],

    Drinks: [
  { name: "Pepsi", price: 70, img: Pepsi },
  { name: "7Up", price: 70, img: Seven_up },
  { name: "Coca Cola", price: 70, img: Cock },
  { name: "Sprite", price: 70, img: Sprite },
  { name: "Fanta", price: 70, img: Fanta },
  { name: "Pakola Ice Cream Soda", price: 60, img: Pakola },
  { name: "Mineral Water", price: 50, img: Water },
  { name: "Mint Margarita", price: 120, img: Mint },
  { name: "Fresh Lime", price: 100, img: Fresh_lime },
  { name: "Cold Coffee", price: 180, img: Coffee },
],

    Pizzas: [
  { name: "Cheese Pizza", price: 650, img: Chese_pizza },
  { name: "Fajita Pizza", price: 750, img: Fajita_pizza },
  { name: "Chicken Tikka Pizza", price: 780, img: Chiken_tikka_pizza },
  { name: "BBQ Chicken Pizza", price: 770, img: Bbq_pizza },
  { name: "Pepperoni Pizza", price: 800, img: Peppeoroni_pizza },
  { name: "Vegetable Pizza", price: 650, img: Vegetable_pizza },
  { name: "Crown Crust Pizza", price: 950, img: Crown_pizza },
  { name: "Stuffed Crust Pizza", price: 900, img: Stuffed_Crust_pizza },
  { name: "Malai Boti Pizza", price: 780, img: Malai_Boti_pizza },
  { name: "Smoky Pizza", price: 820, img: Smoky_pizza },
],

BBQ: [
  { name: "Chicken Seekh Kabab", price: 350, img: Chiken_seekh_kabab },
  { name: "Beef Seekh Kabab", price: 380, img: Beef_kabab },
  { name: "Chicken Boti", price: 400, img: Chicken_boti },
  { name: "Beef Boti", price: 420, img: Beef_boti },
  { name: "Reshmi Kabab", price: 450, img: Reshmi_kabab },
  { name: "Behari Boti", price: 430, img: Behari_boti },
  { name: "Grilled Tikka", price: 470, img: Grilled_tikka },
]

};

export default menuData;