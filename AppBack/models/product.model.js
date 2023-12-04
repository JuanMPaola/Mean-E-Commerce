const { model, Schema} = require('mongoose');

const productSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    categoria: String,
    imagen: Array,
    stock: Number
})

module.exports = model('product', productSchema);