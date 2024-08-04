## Bank of Flatiron React Application
Overview
Build a React application to manage bank transactions, implementing features such as viewing, adding, and filtering transactions.

# Instructions
Setup:

Create a React app using Create React App.
Copy db.json data into your project's db.json file.
Run Servers:

## Start JSON Server before the React server.
bash
Copy code
json-server --watch db.json
npm start
Core Deliverables
View Transactions: Display a table of transactions.
Add Transactions: Form submission to add and persist new transactions.
Filter Transactions: Filter transactions using a search bar.
Advanced Deliverables
Sort Transactions: Sort by category or description.
Delete Transactions: Remove transactions from the table and backend.
Endpoints
GET /transactions
POST /transactions
DELETE /transactions/
Implementation Steps
Setup Application:

Create a new React app.
Set up JSON Server with db.json.
Components:

Create components for the transactions table, form, and search bar.
Use state and props to manage data.
Data Fetching:

Fetch and post data using fetch or axios.
Event Handling:

Handle form submissions.
Implement search functionality.
Optional Enhancements:

Add sorting and delete functionalities.
Deployment
Deploy both frontend and backend, and update the fetch URL to the deployed backend before submission.

Example README Content
markdown
Copy code
# Bank of Flatiron

## Overview

A React app to manage bank transactions.

## Instructions

### Setup

1. Clone the repository.
2. Run `npm install`.
3. Start JSON Server: `json-server --watch db.json`.
4. Start React app: `npm start`.

### Core Features

- View transactions.
- Add new transactions.
- Filter transactions.

### Advanced Features

- Sort transactions.
- Delete transactions.

### Deployment

Deploy both frontend and backend, and update fetch URL.

## Endpoints

- **GET /transactions**
- **POST /transactions**
- **DELETE /transactions/:id**
