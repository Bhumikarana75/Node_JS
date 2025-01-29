const productView = (req, res) => {
    return res.render('crud/productView');
}

const productAdd = (req, res) => {
    return res.render('crud/productAdd');
}

module.exports = {
    productAdd,
    productView
} 