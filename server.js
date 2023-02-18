const express = require('express')
const cors=require("cors")
const RouterUser = require("./routes/User.Router")
const RouterOrder = require("./routes/Order.Router")
const RouterSubCategory = require("./routes/SubCategory.Router")
const RouterProvider = require("./routes/Provider.Router")
const RouterCategory = require("./routes/Category.Router")
const RouterGallery = require("./routes/Gallery.Router")
const RouterProduct = require("./routes/Product.Router")
const RouterDelivery = require("./routes/Delivery.Router")
const RouterCustomer = require("./routes/Customer.Router")

const auth = require("./middlewares/auth")
const db=require("./config/db")
const app = express()
app.use(cors("*"))
app.set('secretKey',"aymen1111");
app.use(express.json())


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = 3000
app.use("/users", RouterUser)
app.use("/orders", RouterOrder)
app.use("/subcategories", RouterSubCategory)
app.use("/providers", RouterProvider)
app.use("/categories",RouterCategory)
app.use("/galleries",RouterGallery)
app.use("/products",RouterProduct)
app.use("/deliveries", RouterDelivery)
app.use("/customers",RouterCustomer)


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/file/:img",function(req,res) {
  res.sendFile(__dirname+"/uploads/"+req.params.img)
})
