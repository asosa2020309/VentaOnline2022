

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carritoSchema = ({
    compra: Boolean,
    owner: {type: Schema.ObjectId, ref:"user"},
    productos: [{type: Schema.ObjectId, ref:"product"}],
    stock: [Number]
})

module.exports = mongoose.model("carrito",carritoSchema);