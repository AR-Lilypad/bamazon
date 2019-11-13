const mysql = require("mysql");
const inquirer = require("inquirer");

// ccreate the onnection to mysql server
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // username
    user: "root",
    // my password
    password: "yourRootPassword",
    database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
});

const bamTable = function() {
    // query the database for items being purchased
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + "\n");
        console.log("What do you get when you put Amazon together with Ali Baba? ");
        console.log("\n" + "ALIBAMA=ZON    (=^j^=)" + "\n");
        console.log("Please make a selection by the merchandise ID number.");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + "\n");
        console.table(results);
        shop();
    });
    // let the shopping begin- create function to begin the query
    let shop = function() {
        inquirer
            .prompt({
                name: "id",
                type: "input",
                message: "What would you like to purchase? Please select by item's ID numbers."
            })
            .then(function (answerID) {
                let selection = answerID.id;
                connection.query("SELECT * FROM products WHERE  id=?", selection, function (
                    err, results) {
                    if (err) throw err;
                    if (results.length === 0) {
                        console.log("Not a valid product ID, please select a product ID number for the item you wish to purchase."
                        );
                        shop();
                    } else {
                        inquirer
                            .prompt({
                                name: "quantity",
                                type: "input",
                                message: "How many units would you like to purchase?",
                            })
                            .then(function (answerQty) {
                                let quantity = answerQty.quantity;
                                // let price = answer.quantity * price;
                                if (quantity > results[0].quantity) {
                                    console.log("We're sorry but we only have" + results[0].quantity + "items of the merchandise you selected."
                                    );
                                    shop();
                                } else {
                                    console.log("Thank you for your purchase!");
                                    console.log(results[0].product_name + " purchased.");
                                    console.log("Qty " + quantity + " @ $ " + results[0].price + "ea.");
                                    // console.log("Your total is: $" + (quantity * price));
                                }
                            })
    
                    }
                })
            })
    
    }
    
} 
bamTable();

//can you take the variables and name them at the global level at top then try to calculate?