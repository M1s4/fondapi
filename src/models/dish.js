const {Schema, model: Model} = requie('mongoose')

var mongoose = require('mongoose');

const dishSchema = new dishSchema({
    name: {
        type:String,
        //quita espacio al principio y al final
        trim: true,
        maxlength:20,
        minLenght:1
    },
    price:{
        type:number,
        require: true,
        min:0
    },
    descripcion:{
        type:String,
        required: true,
        default:'',
        maxlenght:140,
    }
})

  const model = Model(schema)
  module.export = {model, schema}
