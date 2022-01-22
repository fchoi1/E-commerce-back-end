# E-commerce Back End Starter Code

## Description
This is a simple application to use sequelize (ORM) with node js to connect to sql database and access REST apis. This is an application to view products, categories and tags and utilizes sequelize functionality to query sql database
Techonologies mysql2, dotenv, express, sequelize.

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation
  1. clone repo on github 
  2. Install any required dependancies 
```
    npm install
```
  3. Enter your SQL database crendentials in .env file (see .env.Example)
```
    DB_HOST=<database hostname>
    DB_NAME=employees
    DB_USER=<database user>
    DB_PASS=<database password>
```
  4. Login to SQL on command line 
```
    mysql -u <user> -p
```
  5. Create database by running the schema
```
    sourec db/schema.sql
    quit
```
  6. (Optional) Seed values for db
```
    npm run seeds
```
  6. Start the application on nodeJS
```
    npm start
```
  

## Usage
  1. Once the application is started, open a rest client to run some API (Insomnia, Thunder Client, etc)
    <img src="./images/step1.png" width="200">
  2. GET routes
    <img src="./images/step2.png" width="200">
  3. Select "View all roles" to view roles list   
    <img src="./images/step3.png" width="400">
  4. Select "View all employees" to view employees list   
    <img src="./images/step4.png" width="500">
  5. Select "Add a deparment" to add a new department and answer required prompts
    <img src="./images/step5.png" width="400">
  6. Select "Add a role" to add a new role and answer required prompts to link to a department. It pulls a list of existing departments to select from!   
    <img src="./images/step6a.png" width="300">   
    <img src="./images/step6b.png" width="300">
  7. Select "Add an employee" to add a new employee and answer required prompts to link to a role. It pulls a list of existing roles and employees to select from!   
    <img src="./images/step7a.png" width="300">   
    <img src="./images/step7b.png" width="300">   
    <img src="./images/step7c.png" width="300">   
  8. Select "Update an employee role" to update an existing employee's   
    <img src="./images/step8.png" width="300">
  9. Select to do more actions on app or exit   
    <img src="./images/step9.png" width="300">

## Credits
N/A

## License
This application is under the MIT License  
For more information please view here: [MIT Description](https://choosealicense.com/licenses/mit/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributions
Feel free to clone and improve on this application!

## Tests
[Demo Video](https://watch.screencastify.com/v/CY5A9teNaHf4ncx3IWFz)

## Questions

See more about my Github here:  [Fchoi1](https://www.github.com/Fchoi1)  
Any burning questions you want to ask me?  
Reach out to me! [fwchoi@uwaterloo.ca](mailto:fwchoi@uwaterloo.ca)
