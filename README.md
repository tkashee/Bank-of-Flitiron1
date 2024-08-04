Bank of Flatiron React Application
Overview
Welcome to the Bank of Flatiron React Application! This project involves building a React application that displays recent bank transactions, allows adding new transactions, and filtering them based on search terms. This project tests your ability to follow instructions and implement features using React and JavaScript.

Instructions
Follow these steps to set up and implement the application:

Setup: Create a new React application using Create React App. Copy the provided db.json data into your own db.json file at the root of your project.

Run JSON Server: Start the JSON Server before running the React server. Both servers run on port 3000 by default, so starting JSON Server first allows React to find an alternate port.

bash
Copy code
json-server --watch db.json
npm start
Core Deliverables
As a user, you should be able to:

View Transactions: See a table of transactions.
Add Transactions: Fill out and submit a form to add a new transaction, which updates the table and persists the data via the backend API.
Filter Transactions: Filter transactions using a search bar, displaying only those with descriptions matching the search term.
Advanced Deliverables
If you have extra time or after completing the core deliverables, you can implement:

Sort Transactions: Sort transactions alphabetically by category or description.
Delete Transactions: Delete a transaction, removing it from the table and the backend.
Endpoints
GET /transactions

Example Response:
json
Copy code
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions

Required Headers:
json
Copy code
{
  "Content-Type": "application/json"
}
Request Object:
json
Copy code
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:
json
Copy code
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
DELETE /transactions/

Example Response:
json
Copy code
{}
Implementation
Setting Up the Application:

Create a new React application.
Set up JSON Server with the provided db.json data.
Ensure both servers are running on different ports.
Components:

Create components for displaying the transactions table, the form for adding new transactions, and the search bar.
Use state and props effectively to manage and pass data between components.
Data Fetching:

Fetch transactions data from the backend using fetch or axios.
Post new transactions to the backend to persist the data.
Event Handling:

Handle form submissions to add new transactions.
Implement search functionality to filter transactions based on the search term.
Optional Enhancements:

Add sorting functionality for transactions.
Implement delete functionality to remove transactions.
Deployment
Deploy both the frontend and the db.json backend. Change the URL for fetching data to the deployed backend before submitting your project. Ensure your deployed application is functional and accessible.

Readme
Include a README file with:

Overview of the project
Instructions for setting up and running the application
Description of core and advanced features
Information on how to deploy the application
Example README Content
markdown
Copy code
# Bank of Flatiron

## Overview

This project is a React application for managing and viewing bank transactions. Users can view, add, filter, sort, and delete transactions.

## Instructions

### Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the JSON Server with `json-server --watch db.json`.
4. Start the React application with `npm start`.

### Core Features

- View a table of transactions.
- Add new transactions via a form.
- Filter transactions using a search bar.

### Advanced Features

- Sort transactions by category or description.
- Delete transactions from the table and backend.

### Deployment

Deploy the frontend and backend. Update the URL for fetching data to the deployed backend URL.

## Endpoints

- **GET /transactions**
- **POST /transactions**
- **DELETE /transactions/:id**

