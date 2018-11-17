const Dish = require('../../models/dish').model
//al hacer esperar "await" a la funcion se coloca como "async" la funcion
async function get(){
    //cambiamos el callback realizamos una promesa
    const allDishes = await Dish.find({}).exec()
}