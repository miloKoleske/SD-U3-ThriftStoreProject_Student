//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];


// ? Sales Tax (Milo's version - that totally feels like cheating) - DONE(ish)
// console.log(salesTax[0].tax); // .04 (Alabama tax)
//console.log(salesTax.length); // 51 (41 entries)
//console.log(salesTax[49]); // { state: 'Wisconsin', tax: 0.05 } (how I found index numbers) 
//console.log(salesTax[2]); // { state: 'Arizona', tax: 0.056 }
//console.log(salesTax[35]); // { state: 'Ohio', tax: 0.0575 }

// keyword      varName     go into array - go to index - go to index's tax 
const       arizonaTax =      salesTax          [2]            .tax;
const       ohioTax =         salesTax          [35]           .tax;
const       wisconsinTax =    salesTax          [49]           .tax;


// ! ASK ABOUT THIS - can this code work? What am I missing?
// this (below) didn't end up working for me, I kept fighting with undefined values
// for (i = 0; i < 51; i++) {
//     var storeSaleTax = salesTax[i].tax;
// }
// {console.log(storeSaleTax[2].tax)};







//? Classes - DONE
/* 
    Create 2 main classes:
        - store
        - product
*/

class Store {
// Define parameters via constructor
    constructor(name,city,state,sales_tax,inventory,balance,expenses,profit,paid_tax) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.salesTax = sales_tax; // sales tax is just array, use method that finds specific states = array.state sales task find element that matches condition
        this.inventory = inventory;
        this.balance = balance;
        this.expenses = expenses;
        this.profit = profit;
        this.paidTax = paid_tax;
        // factory function 
    };

/* When a store is created, it should have two methods:
    - add items to inventory
    - sell items from inventory
*/

addItemToInventory(item) {
    if (item.purchase_price < this.balance) {
        console.log(`You have purchased ${item.name}`)
        const markupPercentage = .2;
        item.market_price = item.purchase_price * markupPercentage + item.purchase_price;
        let foundItem = this.inventory.find(inventoryItem => {
            // items cycling thru == item in hand - t or f
            return inventoryItem.upc == item.upc 
        })
        if (foundItem === undefined) {
            this.inventory.push(item)
} else {
    foundItem.quantity = item.quantity + foundItem.quantity; 
}   
console.log(this.balance,item.purchase_price);
this.balance = this.balance - item.purchase_price;
} else {
        console.log(`There are not sufficient funds to buy ${item.name}`)
    }
}

// markup = parameter, just a placeholder


// ! uncertain of why this has the this.? when does it need to be called like that?
sellItemFromInventory(sold_item, quantity) {
      
        let  foundItem = this.inventory.find(inventoryItem => {
            // items cycling thru == item in hand - t or f
            return inventoryItem.upc == sold_item.upc 
        })
        if (foundItem === undefined) {
            console.log(`Sorry! Not gonna happen`)
        } else if (quantity <= foundItem.quantity)  {
            this.balance = this.balance + (foundItem.market_price * quantity);
            foundItem.quantity = foundItem.quantity - quantity;
            this.profit = this.profit + (foundItem.market_price - foundItem.purchase_price) * quantity;
            this.paidTax = this.paidTax + (foundItem.market_price * this.salesTax) * quantity;
            this.expenses = this.expenses + (foundItem.purchase_price * quantity)
        } else {
            console.log(`We don't have enough ${foundItem.name} to sell`)
        }
}
//! profit = NaN

/* salesTaxCalculator(price, quantity) {
    let ohioSalesTax = .0575;
    let arizonaSalesTax = .056;
    let wisconsinSalesTax = .05  
} -- not sure if this is still necessary, seems to be repetition of previous arizona_,ohio_,wisconsinTax*/
} 



// ? Generate Stores - DONE

class Product {
    constructor(upc,name,type,purchase_price,quantity,market_price) {
        this.upc = upc;
        this.name = name;
        this.type = type;
        this.purchase_price = purchase_price;
        this.quantity = quantity;
        this.market_price = market_price;

        
    }
}

//  for finalPriceCalc, go into product - by product (object), locate market_price
// ! Check notes for this - do I need to use a this.? or call on product class? 
// product1.finalPriceCalc = product1.market_price + markup1;
// product2.finalPriceCalc = product2.market_price + markup2;
// product3.finalPriceCalc = product3.market_price + markup3;




//? CREATE STORES - DONE
// Generate 3 different stores, each in a different state.
//! NOTE: Stores are currently empty

//     object     class   name        city        state   tax   inv   balance expenses    Profit      Paid Tax

let slowTown = new Store ('SlowTown', 'Columbus', 'Ohio', .0575,   [] ,   200,     0,          0,        '...' )

let houseOfGold = new Store ('House of Gold', 'Phoenix', 'Arizona', .056, [], 200, 0,          0,        '...' )

let kitchenSink = new Store ('Kitchen Sink', 'Racine', 'Wisconsin', .05, [], 200, 0,           0,        '...')





//? Inventory - DONE
// Creating items, notice market price is NOT filled

//  object          class   upc     name          type       store spent $      quantity        market price
let product1 = new Product ( '01', 'Sexy Lamp', 'Furniture',      40.25,              1,              '')
let product2 = new Product ( '01', 'Sexy Lamp', 'Furniture',      22.25,              1,              '')
let product3 = new Product ( '01', 'Sexy Lamp', 'Furniture',      7.50,               1,              '')
let product4 = new Product ( '04', 'Labyrinth (1986)', 'Electronics',8.99,            2,              '')
let product5 = new Product ( '05', 'Used Hairbrush', 'Self Care', 1.50,               3,              '')
let product6 = new Product ( '06', 'Cat Taxidermy', 'Decor',      35,                 1,              '')
let product7 = new Product ( '07', 'Electric Chair', 'Furniture', 120,                1,              '')
let product8 = new Product ( '08', 'Oubliette', 'Furniture',      225,                1,              '')
let product9 = new Product ( '09', 'Iron Maiden', 'Furniture',    49.99,              1,              '')
let product10 = new Product ( '10', 'Guillotine', 'Furniture',    5.49,               1,              '')

// ! Note: need to plug in markup value + price to make market price


console.log(product1.market_price);


//? Stocking  - DONE
//* First Store
// adding an object to inventory, and its markup value

// store        method       object  
slowTown.addItemToInventory(product1);
slowTown.addItemToInventory(product2);
slowTown.addItemToInventory(product3);
slowTown.addItemToInventory(product7);

//console.log(slowTown);



// //* Second Store
houseOfGold.addItemToInventory(product4);
houseOfGold.addItemToInventory(product5);
houseOfGold.addItemToInventory(product6);

//console.log(houseOfGold)

//* Third Store

kitchenSink.addItemToInventory(product8);
kitchenSink.addItemToInventory(product9);
kitchenSink.addItemToInventory(product10);

//console.log(kitchenSink)



//! Selling - use METHOD! - consider: this means object is removed from store + that the market price has gone into profit variable
// Trying to sell an item that doesn't have enough in stock
// Trying to sell an item that is less than the quantity desired.

/* 
sellItemFromInventory(sold_item) {
    this.profit += sold_item.price.toFixed(2);
}
*/

//* First Store
// store   method being called  object removed
slowTown.sellItemFromInventory(product1, 2);
console.log(slowTown);

//* Second Store
houseOfGold.sellItemFromInventory(product4, 1);
console.log(houseOfGold)

//* Third Store
kitchenSink.sellItemFromInventory(product10, 1);
console.log(kitchenSink)

//! Testing
/* 
    Simply console log each store to check the completed details.
*/

// console.log(slowTown);
// console.log(houseOfGold);
// console.log(kitchenSink)



/* Create 3 different Stores in 3 different states - DONE
Create at least 3 items with the same upc - DONE
One store should be holding these three different items - DONE
Create at least 2 items with more than 1 as their quantity - DONE
Stock each store with at least 3 items each - DONE
Sell at least 1 item from each store.
Show that you have tested:
Trying to sell an item that doesn't have enough in stock.
Trying to sell an item that is less than the quantity desired.
Within the Testing area of the file (bottom of the document), console.log each store. */


    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes 
/* 
    Create 2 main classes:
        - store
        - product
*/

class Store {
// Define parameters via constructor
    constructor(name,city,state,sales_tax,inventory,balance,expenses,profit,paid_tax) {
        this.name = locName;
        this.city = locCity;
        this.state = locState;
        this.salesTax = locSalesTax;
        this.inventory = locInventory;
        this.balance = locBalance;
        this.expenses = locExpenses;
        this.profit = locProfit;
        this.paidTax = locPaidTax;
    }

}
class Product {
    constructor(upc,name,type,purchase_price,quantity,market_price)
    this.upc = prodUpc;
    this.name = prodName;
    this.type = prodType;
    this.purchase_price = prodPurchasePrice;
    this.quantity = prodQuantity;
    this.market_price = prodMarketPrice;

}


//! CREATE STORES
// Generate 3 different stores, each in a different state.

let slowTown = new Store ('SlowTown', 'Columbus', 'Ohio', .0575, 'none', 200, 0, 0, '...' )
console.log(slowTown);

let houseOfGold = new Store ()

let trapDoor = new Store ()

//! Inventory


//! Stocking

//* First Store

//* Second Store

//* Third Store

//! Selling

//* First Store

//* Second Store

//* Third Store

//! Testing
/* 
    Simply console log each store to check the completed details.
*/
