# Repository for CASH CALCULATOR JS website

## Intro
This project starts from an idea to transform a Javascript algorithm, developed while i was attending a course, in a real interface. The main task of the original 👉 [Project](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register), needed to achieve a Certification from FreeCodeCamp, was to Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument and return the Cash to give back.

### Video Instructions
* STEP 1 - <a href="https://www.loom.com/share/1efa09a420ac436bb1d041834a1f54e2?sid=10c7ccd2-aba3-4590-81be-bf91236ae239" target ="_blank">Intro</a>
* STEP 2 - <a href="https://www.loom.com/share/95b404f9d6674ecbb5bf640f0d8e97a5?sid=8e2a8187-dfc7-4d3a-9081-52be0766a165" target ="_blank">Check the Drawer</a>

## Files
* List of files
* index.html - file for the calculator page
* drawer.html - file for the drawer page
* report.html - file for the report page
* storeToMYSQL.php - file to store the drawer into the database
* server.js - file to fetch the drawer from the database
* css folder
  * custom.css - css customizations
  * main.min.css - Bootstrap css files
  * fonts : folder with DS-DIGI font for the LCD display
* js folder
 * Cash_register.js - JS file to calculate the Cash, the drawer and store the transaction in localStorage
 * Report.js - JS file to show the list of the transaction and save the report via JSON

## Technologies
<img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/Bootstrap_logo.png" style="width:45px"> <img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/JS_logo.png" style="width:45px"> <img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/NODE_logo.png" style="width:45px"> <img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/PHP_logo.png" style="width:45px">

## Installation
* FrontEnd and NODE.js packages
  * Clone this directory under `/htdocs` directory of your XAMPP installation
  * Open  a terminal and navigate to the directory you installed this project
  * Install locally Bootstrap: digit `npm install bootstrap@3`
  * Initialize the directory: digit `npm init`
  * Add the following packages MYSQL, EXPRESS, CORS, digit: `npm i mysql express cors`
  * Start the server, digit: `npm start`
  * You should see `Listening on PORT 5000`
  * Start the XAMMP server
  * In the browser, digit `localhost/`
  * You should see the directory you installed this application
  * Click the name of the directory
  * You should see the Calculator page

* Database -  This project needs a MYSQL database to store the Drawer
  * Start the XAMMP server (if not already)
  * In the browser, digit `localhost/phpmyadmin/`
  * You should see the homepage of phpMyAdmin
  * Click import
  * Choose the `cash_calcultor.sql`file
  * It contains the `drawer` table, with initial drawer (empty)

## Pages
* Calculator page
  * Clicking Drawer button, the program will show the drawer, initially empty.
  * Drawer can be filled using the Drawer page
  * Insert a random price in the Price field
  * Then insert an amount paid, Please split by clicking each unit-button:
  * Click the Calculate button, to get the Cash to give back.
  * The program will generate a Pop-up, informing about the Price, The Amount paid and what give back (divided in each unit)
  * Clicking Drawer button, the program will show the drawer, updated with the transactions done.
  * Clicking the Report Page button, user can go to the report page, reporting all the valid transactions.

* Drawer page
  * This page is for fill the drawer
  * User can fill each unit with an amount or 0 to leave that unit empty
  * Each field is required
  * Clicking the Save the Drawer button, the new drawer will be stored in a MYSQL database.

* Report page
  * User can find a report of Each valid transactions done.
  * Clicking the Save the Report button, you can download a .JSON file with all the transactions done.

## Software used

* XAMPP -
 * PhpMyAdmin - version 5.2.1
* Bootstrap5 - version 3.4.1
* Node.js - version 3.4.1
  * NPM packages
    * Mysql - 2.18.1
    * Express - 4.18.2
    * Cors - 2.8.5
 * FileSaver.js - 2.0.0

- - -
© 2023 Andrea Vicari | All Rights Reserved.
