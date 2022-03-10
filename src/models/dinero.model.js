

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dineroSchema = ({
    nombre: String,
    productos: [{type: Schema.ObjectId, ref:"product"}]
})

module.exports = mongoose.model("dinero",dineroSchema);