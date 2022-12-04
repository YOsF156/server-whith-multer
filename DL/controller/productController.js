const productData = require("../model/ProductModel")

async function create(data) {
    return await productData.create(data)
}

async function read(filter, proj) {// proj=text key
    return await productData.find(filter, proj)
}

async function update(filter, newData) {//newData=obj whith the ney data
    return await productData.findOneAndUpdate(filter, newData, { new: true })
}

async function del() {
    return await productData.findOneAndUpdate(filter, { isActive: false })
}


module.exports = { create, read, update, del }