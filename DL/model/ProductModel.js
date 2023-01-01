const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,

    },
    image: {
        type: String,

    },
    rating: {
        rate: { type: Number, default: 2.5 },
        count: { type: Number, default: 1 }
    },
    inStock: {
        type: Number,
        required: true,
        default: 1
    },
    isActive: {
        type: Boolean,
        default: true,

    }
})

const Product = mongoose.model("product", ProductSchema)


module.exports = Product










// async function addProductsToDb() {

//     for (const i of array) {
//         try {

//             const newDoc = await Product.create(i)
//             console.log("🚀 ~ file: ProductModel.js:62 ~ addProductsToDb ~ newDoc", newDoc)
//         } catch (error) {
//             console.log("🚀 ~ file: ProductModel.js:295 ~ addProductsToDb ~ error", error)

//         }

//     }


// }

// addProductsToDb()
