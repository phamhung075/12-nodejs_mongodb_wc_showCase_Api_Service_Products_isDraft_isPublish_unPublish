# Node.js MongoDB Showcase Projects


This is a personal project series based on the lessons by @anonystick ([https://github.com/anonystick](https://github.com/anonystick)).
## 1. [Authentication and API Key Management (HS256)](https://github.com/phamhung075/2-nodejs_mongodb_wc_showCase_Dynamic_for_ApiKey_and_Permissions_HS256/tree/master)

## 2. [ErrorHandler ApiResponse](https://github.com/phamhung075/3-nodejs_mongodb_wc_showCase_ErrorHandler_API)

## 3. [Success Handler ApiResponse](https://github.com/phamhung075/4-nodejs_mongodb_wc_showCase_ApiResponseUseClass/tree/master?tab=readme-ov-file)

## 4. [SignUp and Login Public Access](https://github.com/phamhung075/5-nodejs_mongodb_wc_showCase_SignUpLogin)

## 5. [Logout Authentication](https://github.com/phamhung075/6-nodejs_mongodb_wc_showCase_LogoutAuthentication)
## 6. [Refresh Token and Token Verification](https://github.com/phamhung075/7-nodejs_mongodb_wc_showCase_RefreshToken_verifyToken)
## 7. [Schema for Products in E-commerce](https://github.com/phamhung075/8-nodejs_mongodb_wc_showCase_Schema_Products_Ecommerce)
## 8. [API for Products Using Factory Pattern](https://github.com/phamhung075/11-nodejs_mongodb_wc_showCase_Api_Service_use_Factory_Pattern_Products_Senior_lv)

## 9. API Service for Product Draft, Publish, and Unpublish

### Introduction

`12-nodejs_mongodb_wc_showCase_Api_Service_Products_isDraft_isPublish_unPublish` is a Node.js application focused on managing product states like draft, publish, and unpublish in a MongoDB database. This project demonstrates handling various stages of product lifecycle in an e-commerce application.

### Installation

- Clone the repository:

    `git clone https://github.com/phamhung075/12-nodejs_mongodb_wc_showCase_Api_Service_Products_isDraft_isPublish_unPublish.git`
    
- Change to the directory:

    `cd 12-nodejs_mongodb_wc_showCase_Api_Service_Products_isDraft_isPublish_unPublish`
    
- Install dependencies:

    `npm install`
    

### Features

- **Product Model** (`./models/product.model.js`): Includes fields to manage product states (draft, published, unpublished).
- **Product Service** (`./services/product.service.js`): Implements business logic to manage product states efficiently.
- **Product Repository** (`./repositories/product.repo.js`): Handles database operations related to product state management.
- **Product Controller** (`./controllers/product.controller.js`): Manages API routes for product state transitions.
- **Route Index** (`./routes/index.js`): Centralizes route definitions for easy management.

### Usage

- The application allows manipulation of product states, reflecting real-world scenarios in e-commerce platforms.
- Offers a modular and scalable approach to handling product lifecycle within a web application.

### MongoDB Connection

- Connect to MongoDB using: `mongodb://localhost:27017/yourDatabase`

### Additional Notes

- This project serves as a practical guide for developers looking to implement state management in product-centric applications.
- The implementation can be extended or customized to fit specific requirements of e-commerce platforms.

### Postman Examples

- **Signup**, **Login**, **Logout** examples as in the previous project.
- **Token Refresh** examples as in the previous project.
- **Create Product** examples 

``` 
@url_dev=http://localhost:3052/v1/api/product/

### create product
POST {{url_dev}}
Content-Type: application/json
x-api-key: [API_KEY]
x-client-id: [SHOP_ID]
authorization: [ACCESS_TOKEN]

{
	"product_name" : "Leggings polaire gris",
	"product_price" : 500,
	"product_type" : "Clothing",
	"product_thumb" : "product_thumb",
	"product_quantity" : 10,
	"product_attributes" : {
		"brand": "Boss",
		"size" : "S",
		"material": "coton"
	}
}
```

- **Publish Product** examples 
``` 
@url_dev=http://localhost:3052/v1/api/product/

### Publish Product
POST {{url_dev}}/publish/[PRODUCT_ID]
Content-Type: application/json
x-api-key: [API_KEY]
x-client-id: [SHOP_ID]
authorization: [ACCESS_TOKEN]

```

- **UnPublish Product** examples ->Draft
``` 
@url_dev=http://localhost:3052/v1/api/product/

### Publish Product
POST {{url_dev}}/unpublish/[PRODUCT_ID]
Content-Type: application/json
x-api-key: [API_KEY]
x-client-id: [SHOP_ID]
authorization: [ACCESS_TOKEN]

```
For more detailed examples, refer to see [README.png](./help12.png).
