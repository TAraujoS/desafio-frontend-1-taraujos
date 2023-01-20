# Documentation Desafio 1 | 🧠 FrontEnd

The project is a simulation of anticipation <br>
To learn more about visit:
https://github.com/hashlab/hiring/blob/master/challenges/en-us/front-challenge.md

---

## Getting Started:

Before starting the application, install all the dependencies, type in the terminal the command:

### `yarn` or `yarn install`

---

## How to use the calculator:

- In the first field, enter the value that is greater than or equal to 1000;
- In the second field, enter the number of installments that is less than or equal to 12;
- In the third field, enter the MDR value that is greater than 0 and less than 100;

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress open`

Run the tests automatically through cypress. <br>
For the tests to work correctly, you must have another terminal open with the application running.

On Cypress choose the E2E Testing option, then choose your browser for testing, then select Start E2E Testing. <br>
Within the browser select the spec.cy.ts file to run all 10 tests.

---

## Tests covered

- Check if there is an h1 tag containing the correct message. <br>
- Check if there is a label tag containing the correct message. <br>
- Check receipt amounts before calculation. <br>
- Check if application calculates correctly. <br>
- Check receipt amounts after calculation. <br>
- Check that there is a span tag containing the correct error message. <br>
