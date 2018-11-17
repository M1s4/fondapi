var mongoose = require('mongoose');

const {Schema, model:model} = require('mongoose')

const  schema = new Schema({
    dishes:{
        type:[String],
        required:true
    },
 
    name:{
        type:String,
        trime:true,
        required:true,
        maxlength:20,
        minlength:2
    },
       // linea de datos
    //(inicio)active,sent,aproved,preparing,ready,dispatched,pay(final)
    status:{
        type:String,
        require:true,
        enum:[
            'active',
            'sent',
            'aproved',
            'preparing',
            'ready',
            'dispatched',
            'payed',
            'cancelled'

        ]   
    }

})

const model = Model(schema)
module.exports={Schema, model}
