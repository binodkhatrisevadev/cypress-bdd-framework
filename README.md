<h2 align="center"> Cypress BDD Cucumber Framework with Allure Reporting </h2>

<h4 align="center">
	
[![CI](https://github.com/sadabnepal/WebdriverIOCucumberTSFramework/actions/workflows/main.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOCucumberTSFramework/actions/workflows/main.yml)

</h4>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/arbaaz100/cypress-bdd-framework.git
2. Navigate to `cypress-bdd-framework`
```

Install the dependencies:
```bash
npm install
```

Run tests:
```bash
There is just one feature file is present so anyone of these commands will work
npm run test (to run all tests in Electron Headless in CMD)
npm run cypress:open (to run all tests in Cypress Dashboard)
npm run test:allure-reports (to run all tests in CMD and generate an Allure Report after execution)
```


Allure Report:
```
It will be generated and open up automatically after execution
```
### Key Features
  - Cypress Test Execution through Javascript
	- Cucumber BDD framework
	- Allure Reporting

### Folder Structure
```
├───cypress
      ├───fixtures
      ├───integration
          ├───1-getting-started 
          ├───2-advanced-examples
          ├───Iprice-tests 
                  └───Iprice-tests.js
          ├───Iprice-tests.feature 
       
      ├───plugins
      ├───support
├───package.json
├───README.md
├───jsconfig.json
└───cypress.json
```
### Sample Report
![image](https://github.com/arbaaz100/cypress-bdd-framework/blob/main/Allure_1.PNG)
![image](https://github.com/arbaaz100/cypress-bdd-framework/blob/main/Allure_2.PNG)
