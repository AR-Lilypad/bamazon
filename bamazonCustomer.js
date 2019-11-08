const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("cli-table");

let connection = mysql.createConnection({
    host: "localhost",
    // my port; if not 3306
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

function bamTable() {
    // query the database for items being purchased
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log( "\n");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + "\n");
        console.log("Welcome to the newest shopping site: Bamazon");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + "\n");
        console.table(results);
    });
}
bamTable();

// let the shopping begin- create function to begin the query
function shop(){
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What would you like to purchase? Please select by item's ID numbers."
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units would you like to purchase?"
            }
        ])
        .then(function (answer) {
            // get the information of the shoppers 'cart'
            let itemSelected = 
            for (var i = 0; i < results.length; i++) {
                if (results[i].id === answer.id) {
                    itemSelected = results[i];
                }
            }
        })
}



// // connect to the mysql server and sql database then run the prompt
// // connection.connect(function (err, results) {
// // run the start function after the connection is made to prompt the user
// start();
// });





