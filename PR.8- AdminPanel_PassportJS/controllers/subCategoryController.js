const categoryModel = require('../model/categoryModel');
const subCategoryModel = require('../model/subCategoryModel');


const addSubcategoryPage = async (req, res) => {
    try {
        let categories = await categoryModel.find({ status: 'active' });
        return res.render('subcategory/add_subcategory', {
            category: categories
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewSubCategoryPage = async (req, res) => {
    try {

        let subCategoryData = await subCategoryModel.find({}).populate('categoryId');
        return res.render('subcategory/view_subcategory', {
            subCategoryData: subCategoryData
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertSubCategory = async (req, res) => {
    try {
        const { category, subcategory } = req.body;
        console.log(req.body);

        await subCategoryModel.create({
            categoryId: category,
            subcategory: subcategory
        })
        req.flash('success', 'SubCategory Successfully Added..! ')
        return res.redirect("/subcategory/addsubcategorypage");

    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteSubCategory = async (req, res) => {
    try {

        let id = req.query?.did/*from view page*/;
        await subCategoryModel.findByIdAndDelete(id);

        console.log('Sub-Category Deleted Successfully');
        req.flash('success', 'Sub-Category Deleted Successfully');
        return res.redirect('/subcategory');

    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    addSubcategoryPage,
    viewSubCategoryPage,
    insertSubCategory,
    deleteSubCategory
}