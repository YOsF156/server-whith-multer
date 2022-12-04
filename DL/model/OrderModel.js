const mongoose = require('mongoose')
const ProductModel = require("./ProductModel")
const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        // required: true
    },
    products: [{
        productId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "product",
            required: true
        },
        quantity: {
            type: Number,

        }
    }],

    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        // required: true,
    },
    status: {
        type: String,
        // required: true,
        enum: ['active', 'shipped', "done"],
        default: "active"
    },
    isActive: {
        type: Boolean,
        default: true,

    }
})


const Order = mongoose.model("order", OrderSchema)
module.exports = Order

// async function cr() {
//     const order = await Order.find({ _id: "638cc303fc00901f0c29cebb" }).populate("products.productId")
// }

// cr()