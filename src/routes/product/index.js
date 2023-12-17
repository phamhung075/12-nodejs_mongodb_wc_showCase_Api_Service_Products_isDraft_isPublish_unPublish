"use strict";

const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const productController = require("../../controllers/product.controller");
const { authenticationV2  } = require("../../auth/authUtils");
const router = express.Router();

router.get('/search/:keySearch', asyncHandler(productController.getListSearchProduct));

//authentication
router.use(authenticationV2);
////////////////
// router.post('/1', ( req, res, next) => {
//     return res.status(200).json({
//         message: 'Welcome to my Shop!nice'
//     })
// });
router.post('', asyncHandler(productController.createProduct));
router.post('/publish/:id', asyncHandler(productController.publishProductByShop));
router.post('/unpublish/:id', asyncHandler(productController.unPublishProductByShop));


// QUERY //
router.get('/drafts/all', asyncHandler(productController.getAllDraftsForShop));
router.get('/published/all', asyncHandler(productController.getAllPublishForShop));

module.exports = router;
