const addPage = (req,res) => {
    return res.render('crud/form');
}
const viewPage = (req, res) => {
    return res.render('crud/table');
}

module.exports={
    addPage,
    viewPage
}