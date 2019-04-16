![Logo](./UI/assets/images/bank.svg)
# Banka

[![Build Status](https://travis-ci.com/Johnpeace/Banka.svg?branch=develop)](https://travis-ci.com/Johnpeace/Banka)

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals.

This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money

## Installation
 > Git clone this repository

 > CD into the created directory

 > $ run `npm i`

 > $ run `npm start` to start server

## To test project
 > $ run `npm test`

## Features
 > User (client) can sign up

 > User (client) can login

 > User (client) can create an account

 > User (client) can view account transaction history

 > User (client) can view a specific account transaction

 > Staff (cashier) can debit user (client) account

 > Staff (cashier) can credit user (client) account

 > Admin/staff can view all user accounts

 > Admin/staff can view a specific user account

 > Admin/staff can activate or deactivate an account

 > Admin/staff can delete a specific user account

 > Admin can create staff and admin user accounts

 > User can reset password

## API Routes
 > POST https://b-anka.herokuapp.com/api/v1/auth/signup - Create user account

 > POST https://b-anka.herokuapp.com/api/v1/auth/signin - Login a user

 > POST https://b-anka.herokuapp.com/api/v1/accounts - Create a bank account

 > PATCH https://b-anka.herokuapp.com/api/v1/account/1 - Activate or deactivate an account

 > DELETE https://b-anka.herokuapp.com/api/v1/accounts/1 - Delete a specific bank account

 > POST https://b-anka.herokuapp.com/api/v1/transactions/1/debit - Debit a bank account

 > POST https://b-anka.herokuapp.com/api/v1/transactions/1/credit - Credit a bank account

## Links
 > [Project Homepage](https://johnpeace.github.io/Banka/UI/pages/index.html)

 > [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2320088)

 > [Repository](https://github.com/Johnpeace/Banka)

 > [API Documentation]()

 > Project References
 * [Dave Sag](https://itnext.io/wiring-up-an-api-server-with-express-and-swagger-9bffe0a0d6bd)
 * [Bolaji Olajide](https://youtu.be/WLIqvJzD9DE)


## Author

> ##### ROPO JOHN OLATUJOYE 

## Licensing
The code in this project is licensed under MIT license.