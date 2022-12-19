# Crowdo - App

## API Documentation

This is the official documentation of the Crowdo App.

## Table of contents

- [Overview](#overview)
  - [Products API](#products)
  - [User API](#user)
- [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Products

- [Get all Products](#get-all-products)
- [Create a Product](#create-a-product)
- [Edit a Product](#edit-a-product)
- [Delete a Product](#delete-a-product)

## User

- [Get User Data](#get-user-data)
- [Login User](#login-user)
- [Register User](#register-user)

### Products Endpoints

#### Get all products

```js
Request: GET
Endpoint: "api/products"
payload: "token" i.e user token assigned when logged in
Response: {
    "_id": "product id",
    "user": "user id",
    "title": "product title",
    "briefIntro": "products brief intro",
    "about": "products about",
    "amount": 100,
    "variations": {
      "firstVariation": {
        "name": "first variation",
        "about": "about first variation",
        "quantity": "500",
        "pledgeMinimum": 700
      },
      "secondVariation": {
        "name": "second variation",
        "about": "about second variation",
        "quantity": "500",
        "pledgeMinimum": 500
      },
      "thirdVariation": {
        "name": "third variation",
        "about": "about third variation",
        "quantity": "500",
        "pledgeMinimum": 200
      }
    },
    "__v": 0
  },
```

#### Create a product

```js
Request: POST
Endpoint: "api/products/"
payload: "user id"
Response: {
    "title": "product title", REQUIRED
    "briefIntro": "product brief intro", REQUIRED
    "about": "about product", REQUIRED
    "amount": 100, REQUIRED
    "variations": { OPTIONAL
      "firstVariation": {
        "name": "first variation",
        "about": "about first variation",
        "quantity": "500",
        "pledgeMinimum": 700
      },
      "secondVariation": {
        "name": "second variation",
        "about": "about second variation",
        "quantity": "500",
        "pledgeMinimum": 500
      },
      "thirdVariation": {
        "name": "third variation",
        "about": "about third variation",
        "quantity": "500",
        "pledgeMinimum": 200
      }
    }
  }

```

#### Edit a product

```js
Request: PUT
Endpoint: "/api/products/:id"
payload: "token", "user id"
Response: {
    "_id": "product id",
    "user": "user id",
    "title": "product title",
    "briefIntro": "products brief intro",
    "about": "products about",
    "amount": 100,
    "variations": {
      "firstVariation": {
        "name": "first variation",
        "about": "about first variation",
        "quantity": "500",
        "pledgeMinimum": 700
      },
      "secondVariation": {
        "name": "second variation",
        "about": "about second variation",
        "quantity": "500",
        "pledgeMinimum": 500
      },
      "thirdVariation": {
        "name": "third variation",
        "about": "about third variation",
        "quantity": "500",
        "pledgeMinimum": 200
      }
    },
    "__v": 0
  },
```

#### Delete a Product

```js
Request: DELETE
Endpoint: "/api/products/:id"
payload: "token", "user id"
Response: {
  "message": "product id deleted successfully"
}
```

### User Endpoints

#### Get User Data

```js
Request: GET
Endpoint: "api/user/user"
payload: "token as string"
Response: {
  "_id": "user id",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email@email.com",
  "createdAt": "2022-12-18T10:50:47.044Z",
  "updatedAt": "2022-12-18T10:50:47.044Z",
  "__v": 0
}
```

#### Login User

```js
Request: POST
Endpoint: "api/user/login"
payload: {
  "email": "email@email.com",
  "password": "passwordlol"
}
Response: {
  "_id": "user id",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email@email.com",
  "token": "token string"
}
```

#### Register User

```js
Request: POST
Endpoint: "api/user/register"
payload: {
  "firstName": "tim",
  "lastName": "cook",
  "email": "timcook@gmail.com",
  "password": "123456"
}
Response: {
  "_id": "user id",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email@email.com",
  "token": "token string"
}
```

### Useful resources

- [Express Documentation](https://www.expressjs.com)
- [Mongoose Documentation](https://www.mongoosejs.com)
- [MongoDb Documentation](https://www.mongodb.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## Author

- Website - [Tochukwu John](https://xeuxdev.vercel.app/)
- Twitter - [@Headbwoi_1](https://www.twitter.com/Headbwoi_1)
