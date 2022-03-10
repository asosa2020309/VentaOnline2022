

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuarioSchema = Schema ({
    nombre: String,
    apellido: String,
    nombreusuario: String,
    password: String,
    role: String,
    email: String,
    dinero: [{type: Schema.ObjectId, ref:"dinero"}]
})

module.exports = mongoose.model("usuario",usuarioSchema);