const express = require('express');
const { addSubcategoryPage, viewSubCategoryPage, insertSubCategory, deleteSubCategory } = require('../controllers/subCategoryController');

const route = express.Router();

route.get('/', viewSubCategoryPage);
route.get('/addSubCategoryPage', addSubcategoryPage);
route.post('/insertsubcategory',insertSubCategory);
route.post('/deletesubcategory',deleteSubCategory);

module.exports = route;