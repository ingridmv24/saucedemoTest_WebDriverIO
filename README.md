# SauceDemo Test Automation

## Description
This project automates the login functionality tests for the SauceDemo website using WebDriverIO and Page Object Model desing pattern.


## Test Cases
- **UC-1**: Test login form with empty credentials.
- **UC-2**: Test login form with credentials by passing username.
- **UC-3**: Test login form with valid username and password.

## Features
- POM design patter is implemented
- Parallel execution of tests in browsers Chrome and Firefox.
- Tests are parametrized using data provider.

## Setup
1. Clone or download the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run wdio` to execute the tests.

## Generate report
- install allure report with the command:
`npm install -g allure-commandline --save-dev`

- Before executing test cases you can clean report writting in the terminal the command: 
`allure generate allure-results --clean`

- After executing test cases you can see allure report with the command
`allure open`


