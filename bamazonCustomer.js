var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  showTable();

  setTimeout(buyItem, 1000)
});



function buyItem() {

  inquirer
    .prompt([{
      name: "id",
      message: "What is the id of the item you would like to purchase?"

    },
    {
      name: "qty",
      message: "How many would you like to buy?"

    }])
    .then(function (answer) {

      if (isNaN(answer.id) || answer.id > 10) {
        console.log("You have selected an item that is not in the list.");
        buyItem()
      }
      else {
        updateProduct(answer.id, answer.qty);
      }


    });
}

function showTable() {

  var table = new Table({ head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity'] })

  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {

      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);

    }
    console.log(table.toString());
  });

}

function updateProduct(id, qty) {

  var query = "SELECT stock_quantity FROM products WHERE item_id =" + id;
  connection.query(query, function (err, res) {
    var item_qty = JSON.stringify(res[0].stock_quantity);

    if (qty > item_qty) {
      console.log("Insufficient quantity!");
      setTimeout(buyItem, 1000)
    }
    else {

      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: item_qty - qty
          },
          {
            item_id: id
          }
        ],
        function (err, res) {

          // Call deleteProduct AFTER the UPDATE completes
          showTable();
          setTimeout(buyItem, 1000)
        }
      );
    }
  });

}