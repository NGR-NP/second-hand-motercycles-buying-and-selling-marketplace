const catchAsync = require('../utils/catchAsync');
const database = require('./../model/index');
const product = database.products;

const statusFunc = (res, status, message) => {
    res.json({
        status,
        message: message
    })
}

exports.create_product = catchAsync( async (req, res) => {
    console.log(req.body)
    const created_product = await product.create({
        name: req.body.name,
        brand: req.body.brand,
        years: req.body.years,
        description: req.body.description,
        price: req.body.price,
        modal: req.body.modal,
        images: "img-001.png"
    })

    statusFunc(res, 200, created_product);
})

exports.show_products = async (req, res) => {
    const showed_products = await database.products.findAll({
        attributes: {
            exclude: ["name"]
        }
    });
    statusFunc(res, 200, showed_products);
}

exports.delete_products = catchAsync(async (req, res) => {
    const deleteProduct = await product.findOne({where: {id: req.params.id}});
    deleteProduct.destroy();
    statusFunc(res, 200, "item delete successfully");
})

exports.showone = catchAsync( async (req, res) => {
    console.log(req.params.id)
    const showone = await product.findOne({where: {id: req.params.id}});
    console.log(showone)
    statusFunc(res, 200, showone);
})

// update product
exports.update_products = catchAsync( async(req, res) => {
    const {name, brand, years, description, price, modal} = req.body;
    const update_product = await product.findone({where: {id: req.params.id}});
    update_product.name = name;
    update_product.brand = brand;
    update_product.years = years;
    update_products.description = description;
    update_products.price = price;
    update_products.modal = modal;
    update_product.save();
    statusFunc(res, 200, update_product);
})

