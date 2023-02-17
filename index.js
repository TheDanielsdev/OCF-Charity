const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const Product = require("./models/Product");
const Blog = require("./models/blog");

dotenv.config();
const dbURI = 'mongodb+srv://Thedanielsdev:Thedanielsdev@mytest.kveejva.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(dbURI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);






app.get('/',async (req, res) => {

  const qNew = req.query.new;
  const qCategory = req.query.category;
  const blogs = await Blog.find();
  try {
    let products;
    

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    
    res.render('index', {products, blogs});
  } catch (err) {
    res.status(500).json(err);
  }
 
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running!");
});
