# Task-Management-Application
This project was inspired by a take-home-project that went back to the basics (CRUD operations). Although it was strongly advised that I use in memory data for the take-home project, I decided to use a database (Postgres) for this project. Users of this application can Create, Read, Update, and Delete tasks to manage their to-do list.

## Final Product

### Create Task
![Create](https://github.com/LingJason/Task-Management-Application/blob/main/docs/Create.gif)

### Update Task
![Update](https://github.com/LingJason/Task-Management-Application/blob/main/docs/Update.gif)

### Delete Task
![Delete](https://github.com/LingJason/Task-Management-Application/blob/main/docs/Delete.gif)

### Search
![Search](https://github.com/LingJason/Task-Management-Application/blob/main/docs/Search.gif)

### Error Handling
![Error](https://github.com/LingJason/Task-Management-Application/blob/main/docs/Error.gif)

## Running the application

You need **TWO** terminal windows/tabs for this app to run (or some other plan for running two Node processes).

1. Clone the repository into your directory.
2. In one terminal, `cd` into `server`. Run `npm install` to install the dependencies. Then run `npm run db:reset` to reset the database.
3. Then run `npm start` to launch the server.(Must run server first)
4. In the other terminal, `cd` into `client`. Run `npm install` to install the dependencies, then `npm start` to launch the client.

## Dependencies / Packages
- axios
- body-parser
- bootstrap
- cors
- expresss
- MUI
- pg
- react
- react-bootstrap
- react-dom
- react-router-dom
