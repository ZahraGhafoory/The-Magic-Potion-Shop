// * Assignment 8 >> The Magic Potion Shop : 


// 1. Start the Game (Variables, Template Literals, Type Conversion)
// Ask the player:
// ● Their name
// ● Age
// ● Favorite element (fire, water, earth, air)
// Use these to greet them with a custom message using template literals.
// Example: Welcome Zara! At 17, you're just the right age to master the powers of fire!
// -----
let playerName = prompt("What's your name?");
let playerAge = parseInt(prompt("How old are you?"));
let favoriteElement = prompt(`Please choose your favorite element? " 1.Fire, 2.Water, 3.Earth, 4.Air " `);
alert(`Welcome ${playerName}! At ${playerAge}, you're just the right to master the powers of ${favoriteElement}!`);


// 2. Stock Setup (Arrays, Objects, and Methods)
// Create an array of potions and an object for potion details:
// let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];
// let potionStock = {
// 'Healing Potion': { quantity: 5, price: 10 },
// 'Mana Elixir': { quantity: 3, price: 15 },
// 'Invisibility Draft': { quantity: 2, price: 25 },
// 'Fire Resistance': { quantity: 4, price: 20 }
// };
//-----
let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];
let potionStock = {
  'Healing Potion': { quantity: 5, price: 10 },
  'Mana Elixir': { quantity: 3, price: 15 },
  'Invisibility Draft': { quantity: 2, price: 25 },
  'Fire Resistance': { quantity: 4, price: 20 }
};
// creating the minu of potions :
let gold = 0;
let customer_s = 0;
function potionMinu() {
  let p_minu = "Available Potions:\n";
    potions.forEach
    (potion => 
    {
       let stock = potionStock[potion];
       p_minu += `${potion} - Quantity: ${stock.quantity}, Price: ${stock.price} gold\n`;
    });
alert(p_minu);
}


// 3. Customer Orders (if/else, switch, loops)
// Ask the player if a customer walks in (prompt("A customer is here! Take their
// order? (yes/no)")).
// If yes:
// ● Show the potion menu.
// ● Ask the customer which potion they want.
// ● Check if the potion is in stock.
// ○ If yes, reduce stock and add gold to the player’s pouch.
// ○ If not, show an out-of-stock message.
// Use switch or if/else to handle this. Use a loop to handle 3 customers.
//-----
for (let z = 0; z < 3; z++) {
  let customer = prompt("A customer is here! Take their order? (Yes/No)").toLowerCase(); 
  if (customer === "yes") {
    potionMinu();
    let choice = prompt("Which potion would you choose?").trim();
    if (potionStock[choice]) {
      if (potionStock[choice].quantity > 0) {
        potionStock[choice].quantity--;
        gold += potionStock[choice].price;
        customer_s++;
        alert(`You sold 1 ${choice}!`);
      } 
      else {
        alert(`The ${choice} you have choosen is not availible in the stock!`);
      }
    }
      else {
      alert("Sorry! We don't have the potion you just choosed.");
      }
    }   
      else {
    alert("No customer had served this time but dont worry you can try again.");
      }
}


// 4. Brewing Potions (Functions, Loops, Array Methods)
// Allow the player to brew more potions by calling a brewPotion() function:
// function brewPotion(potionName, amount) {
// Increase quantity in potionStock
// }
// Use .toLowerCase() and input sanitization for better UX.
// Let them brew 2–3 times using a while or for loop.
//-----
function brewPotion(potionName, amount) {
  if (potionStock[potionName]) {
    potionStock[potionName].quantity += amount;
    alert(`Good job! You brewed ${amount} ${potionName}(s)!`);
  } 
  else {
    alert("The potion is not existing. Sorry!");
  }
}

for (let z = 0; z < 2; z++) {
  let brewChoice = prompt("Would you like brewing more potions? (Yes/No)").toLowerCase();
  if (brewChoice === "yes") {
    let potionName = prompt("Please choose the potion you would like to brew this time?").trim();
    let amount = parseInt(prompt("How many potions would you like to brew this time?"));
    brewPotion(potionName, amount);
  }
}


// 5. End of Day Report (Objects, Destructuring, String Methods)
// Print a final message:
// ● How many potions are left (loop through potionStock)
// ● How much gold the player earned
// ● A final message like:
// "Great job, Zara! You brewed 3 potions and helped 2 customers
// today!"
//-----
let totalPotions = 0;
for (let potion in potionStock) {
  totalPotions += potionStock[potion].quantity;
}
alert(`
Well done ${playerName}! You have done great brewing potions, 
and you also helped ${customer_s} customers just now.
\nThe reseved golds: ${gold}
\nPotions left in stock: ${totalPotions}
`);