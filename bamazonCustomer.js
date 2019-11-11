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
    // shop();
});

function bamTable() {
    // query the database for items being purchased
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // create a display table using cli-table taken from npm site
        const table = new Table({
            head: ["ID", "Prodcuct Name", "Department", "Price", "Qty Available"],
            colWidths: [5, 100, 15, 10]
        });
        // display table of products
        for (const i = 0; i < results.length; i++) {
            table.push([result[i].id, result[i].product_name, result[i].department_name, result[i].price, result[i].quantity]);
        }
        console.log(table.toString());
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + "\n");
        console.log("Welcome to the newest shopping site: Bamazon");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + "\n");
    });
}
bamTable();

// let the shopping begin- create function to begin the query
function shop() {
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
            let itemSelected = (answer.id) - 1;
            let howMany = parseInt(answer.quantity);
            let total = parseFloat(((result[itemSelected.Price]) * howMany).toFixed(2));

            //check stock
            if (result[itemSelected].quantity >= howMany) {
                connection.query("UPDATE products SET ? WHERE ?",
                    [{ Quantity: (result[itemSelected].Quantity - howMany) }, { ID: answer.id }],

                    function (err, result) {
                        if (err) throw err;
                        console.log("Thank you! Your items are available and your total is $ " + total.toFixed(2) + ". Your items will be shipped in 2 days");
                    });
            }
        )}
}



// itemSelected = result[i];


// // connect to the mysql server and sql database then run the prompt
// // connection.connect(function (err, results) {
// // run the start function after the connection is made to prompt the user
// start();
// });





