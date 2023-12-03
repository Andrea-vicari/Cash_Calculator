# Repository for CASH CALCULATOR JS website
## Intro
This project starts from an idea to transform a Javascript algorithm, developed while i was attending a course, in a real interface. The main task of the original 👉 Project, needed to achieve a Certification from FreeCodeCamp, was to Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. Cid is a 2D array listing available currency.

### Video Instrutions
<div>
    <a href="https://www.loom.com/share/1efa09a420ac436bb1d041834a1f54e2">
      <p>STEP1 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/1efa09a420ac436bb1d041834a1f54e2">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/1efa09a420ac436bb1d041834a1f54e2-1701588506514-with-play.gif">
    </a>
  </div>
 

## OverView

This Javascript User Interface, given a Price Amount and Paid Amount, based on what is present in the Cash-Drawer can:
* Calculate what change give back, divided in each unit
* Update the Cash-Drawer
* Keep Track of all the Transactions
* Inform the user either there are some errors or the cash is impossible to cover.

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

## Installation
* Database -  This project needs a MYSQL database to store the Drawer filled in the Drawer page.
  * Open phpMyAdmin or an equivalent software to connect to your MYSQL database
  * Click IMPORT to import the `cash_calcultor.sql` database
  * It contains the `drawer` table, with initial drawer (empty)
  * The DB informations like
    * host:"localhost",
    * user:"root",
    * password:"",
    * database:'cash_register'
  Are used in the files `server.js` and `storeTOMYSQL.php` to connect with the Database.
  If you want to use a different DB name, or a different table name, or setting a password, you need to edit this infos in the two files mentioned above.

* FrontEnd and NODE.js packages - Node.JS is required for this project.

  * Install locally Bootstrap, digit `npm install bootstrap@3`
  * Initialize the directory, digit `npm init`
  * Add the following packages MYSQL, EXPRESS, CORS, digit `npm i mysql express cors`

## Software used

* [Bootstrap5](https://en.wikipedia.org/wiki/Version_control)
* [XAMPP](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [NODE.JS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [PHPMYADMIN]


- - -
© 2023 Andrea Vicari | All Rights Reserved.




