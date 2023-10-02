[![Node.js CI](https://github.com/lasity34/registration_numbers_webapp/actions/workflows/node.js.yml/badge.svg)](https://github.com/lasity34/registration_numbers_webapp/actions/workflows/node.js.yml)

# Registration Number Web App with ExpressJS and PostgreSQL 🌐🚗

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Setup](#setup)
5. [Required Skills](#required-skills)
6. [Database Design](#database-design)

---

## Overview 📝

This project is a web application that allows users to display registration numbers. The number plate is styled with rounded corners, a black border, and a yellow or silver-grey background. Users can dynamically input a registration number in the URL.

---

## Tech Stack 💻

- **ExpressJS**: Back-end server and routing.
- **PostgreSQL**: Database for persistent data storage.
- **ElephantSQL**: Hosting the PostgreSQL database.
- **HTML & CSS**: Front-end design.
- **express-flash**: User feedback on errors and success.
- **express-handlebars**: Server-side templating.

---

## Features 🌟

- **Display Registration Numbers**: Via URL parameters.
- **Styling**: Number plates are styled according to specifications.
- **User Feedback**: Uses `express-flash` for error and success messages.


---

## Required Skills 📚

- **ExpressJS**: 
  - Setting up an ExpressJS server.
  - Creating a GET route with a dynamic parameter.
  - Using `express.static` to serve client-side files like CSS.
  - Implementing server-side templating with `express-handlebars`.

---

## Database Design 🗄️

- **PostgreSQL**: Used for persistent data storage.
- **ElephantSQL**: Used for hosting the database.
- **Tables**: 
  - One for towns.
  - Another for Registration numbers with a foreign key to the towns table.
- **Pre-populated Towns**: Towns table is pre-populated with a script.

---


## Learnings 📚

- **ExpressJS**: Gained hands-on experience in setting up an ExpressJS server and handling routes.
- **Dynamic Routing**: Learned how to create a GET route with a dynamic parameter.
- **Middleware**: Understood the use of `express.static` middleware to serve client-side files.
- **Server-side Templating**: Mastered the use of `express-handlebars` for server-side rendering.
- **Flash Messages**: Implemented user feedback using `express-flash` for the first time.
- **Database Design**: Learned the basics of PostgreSQL and database relationships, specifically the use of foreign keys.
- **Cloud Database**: Got introduced to ElephantSQL for hosting PostgreSQL databases.

---

## What's Next 🛠️

- **Data Validation**: Implement more robust server-side and client-side validation for input fields.
- **User Authentication**: Add a user login and registration system.
- **API Integration**: Integrate with a third-party API for additional features, like real-time updates on the registration numbers.
- **Mobile Responsiveness**: Make the web application fully responsive for mobile and tablet devices.
- **Testing**: Incorporate unit tests for both front-end and back-end logic.



## To Get Prepared 📖

- Read [LucidChart article on Database Design](https://www.lucidchart.com/pages/database-diagram/database-design) for a comprehensive overview.
- Example app for linking two tables together.

