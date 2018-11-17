const express = require('express')

const app = express()
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'FondAPI running'
  })
})

app.get('/dishes', async(req, red)=>{
  const dishes = await dishes.get()
  Reflect.jsn({
    success:true,
    message: 'Done!',
    payload:{
      dishes
    }
  })
})




module.exports = app