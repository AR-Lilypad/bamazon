## bamazon
Bamazon is command line application providing a retail shopping application for a user.
The application utilizes ***Node.js***, ***Inquirer***, and ***MSQL database***.
***Highlights*** 

- Inquirer provides UI prompts query the user on what merchandise they would like to consider.
- Customers may purchase said merchandise from the available products in the database displayed.
- The console table organizes product, inventory, and department data in an organized table  
- The app has the capability to recognise if UI provides valid product query, i.e. provide a product ID#, provide quantities available in stock, and to track inventory when purchased. 

What do you get when you cross Alibaba and Amazon?   
Alibama-zon...

## Technologies used:

**Node.js** takes the javascript engine inside of chrome and enables one to write asychronus processes.  It was built as a server-side engine (a javaScript runtime) in order to have executable sets of libraries that can interpret and execute code.

**MYSQL** is an open source SQL database management system, is developed, distributed, and supported by Oracle Corporation.  MYSQL is a relational database management system based on SQL – Structured Query Language and with a client-server model. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. The most common use for mySQL however, is for the purpose of a web database.  It is called a relational database management system because it can store data in separate tables rather than putting all the data in one big storeroom. The database structures are organized into physical files optimized for speed. 

As stated by 'sitepoint' (a developer's hub for information sharing) "*NoSQL* databases are all the rage these days, and probably the preferred back end for Node.js applications. But you shouldn’t architect your next project based on what’s hip and trendy. The type of database you use should depend on the project’s requirements. *If your project involves dynamic table creation, real-time inserts etc. then NoSQL is the way to go.* But on the other hand, if your project deals with complex queries and transactions, then an SQL database makes much more sense.

**Iquirer** is inquirer, a collection of common interactive command-line user interfaces.

The inquirer package provides prompts and an inquiry session flow. Inquirer.js' purpose is to ease the process of:
* providing error feedback
* asking questions
* parsing input
* validating answers
* It also supports promises and async/await syntax.

### Runing the Bamazon app
 - You can run this app by forking this repository and downloading it to your computer. 
 - npm install
 - In the code editor that you use, (in this case Visual Studio Code), open the application folder that will contain all of the node modules and dependent packages, *Inquirer* and *MYSQL*.  
 - Run the database in MYSQL workbench. 
 - Open terminal from within the code editor or through GIT Bash.
 - in the command line change directory to Bamazon
 - type `node bamazonCustomer.js`
 - follow the prompts
_________________________________________________________________________________________________________________________

## Visual Examples:

Here's a video to show the command in action and its results:   https://youtu.be/osY74FCzmHA
 
![](https://github.com/AR-Lilypad/bamazon/blob/master/assets/images/bamazonCustomer_Moment.jpg)
