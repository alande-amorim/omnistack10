Web App DevRadar
===

[< back](../readme.md)

## Installation
```
$ npm install
```

## Configuration
Add your configurations to the .env file.
```
$ vim .env.development
#or
$ vim .env.production
```
Make sure to point to the correct host and port for the backend server.
```
REACT_APP_API_HOST=localhost
REACT_APP_API_PORT=3333
```
By default the application will create a web server on http://localhost:3000. You can change that:
```
HOST=localhost
PORT=3000
```

## Running
1. Start the [backend](../backend/readme.md) service first.
2. Start the web app:
```
$ yarn start
```
This will start the server in development environment (.env.development).

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

