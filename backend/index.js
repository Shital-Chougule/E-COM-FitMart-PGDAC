const express = require('express');
const cors = require('cors')
// const mongoose = require('mongoose');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
const Jwt = require('jsonwebtoken');
const Admin = require('./db/Admin');
const Cart = require('./db/Cart');
const Order = require('./db/Orders')

//JWT Secret KEY
const jwtKey = 'pgdac' ;


app.use(cors());
app.use(express.json());

//User Register 
app.post("/register", async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save()
    result = result.toObject();
    delete result.password;
    Jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send({result:'Something went wrong please try after sometimes'})
        }
            resp.send({result,auth: token})
    })
    // resp.send("API IS WORKING")

})

//Admin Register 
app.post("/adminregister", async (req,resp)=>{
    let admin = new Admin(req.body);
    let result = await admin.save()
    result = result.toObject();
    delete result.password;
    Jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send({result:'Something went wrong please try after sometimes'})
        }
            resp.send({result,auth: token})
    })
    // resp.send("API IS WORKING")

})

//User Login
app.post("/login",async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send({result:'Something went wrong please try after sometimes'})
                }
                    resp.send({user,auth: token})
            })
        }else{
            resp.send({result:'no user found'})
        }
    }else{
        resp.send({result:'no user found'})
    }
})


//Admin Login
app.post("/adminlogin",async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email){
        let admin = await Admin.findOne(req.body).select("-password");
        if(admin){
            Jwt.sign({admin},jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send({result:'Something went wrong please try after sometimes'})
                }
                    resp.send({admin,auth: token})
            })
        }else{
            resp.send({result:'no admin found'})
        }
    }else{
        resp.send({result:'no admin found'})
    }
})


//Fetch User Details
app.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// To update User
app.put("/user/:id",async(req,resp)=>{
    let result = await User.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
        )
        resp.send(result)
})

//Fetch Admin Details
app.get('/admin/profile/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// To Admin User
// app.put("/admin/profile/:id",async(req,resp)=>{
//     let result = await Admin.updateOne(
//         {_id:req.params.id},
//         {
//             $set : req.body
//         }
//         )
//         resp.send(result)
// })


//Fetch All Users

app.get('/getallusers', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

//Delete Single user by Id
app.delete('/deleteusers/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


//Add New Product
app.post("/add-product",async (req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)
})


//Get all products
app.get("/products",async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({result:"No Products Found"})
    }
})

//Delete specific product
app.delete("/product/:id",async(req,resp)=>{
   
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})


//To fetch one product by id


app.get("/product/:id", async(req,resp)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        resp.send(result)
    }
    else{
        resp.send({result:"No Record Found"})
    }
})


// To update one  product
app.put("/product/:id",async(req,resp)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
        )
        resp.send(result)
})

//Add to cart
app.post('/cart', async (req, res) => {
    try {
        const { u_id, p_id, quantity } = req.body;
        const newCartItem = new Cart({ u_id, p_id, quantity });
        const savedCartItem = await newCartItem.save();
        res.status(201).json(savedCartItem);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Get Cart Of Upecific User
app.get('/cart/:u_id', async (req, res) => {
    
      const u_id = req.params.u_id;

      Cart.find({u_id : u_id}).then((c_result)=>{
        var cart_arr =  c_result

        if(cart_arr.length > 0)
        {
                Product.find({}).then((pr_res)=>{
                    var new_data = []
                    if(pr_res.length > 0)
                    {
                        for(let i  =  0 ; i < c_result.length ; i++)
                        {
                            for(let j  =  0 ; j< pr_res.length ;  j++)
                            {
                                if(c_result[i].p_id == pr_res[j]._id)
                                {
                                    new_data.push({...c_result[i]._doc ,pro_data  :pr_res[j] })
                                }
                            }
                        }
                        res.status(200).send({status  : 200 , data : new_data , count : cart_arr.length})
                    }else{
                        res.status(400).send({status  : 400 , data : [], count : 0 ,message : "Something Went Wrong"})

                    }
                }).catch((err)=>{
                    res.status(400).send({status  : 400 , data : [], count : 0,message : "Something Went Wrong"})

                })
        }
        else{
            res.status(400).send({status  : 400 , data : [], count : 0  ,message : "Something Went Wrong"})

        }
      }).catch((err)=>{
        res.status(400).send({status  : 400 , data : [], count : 0,message : "Something Went Wrong"})

      })

  });

//Get All Items From Cart
app.get('/cart-item', async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

//Get Cart Count By User
app.get('/cart/count/:u_id', async (req, res) => {
    try {
        const { u_id } = req.params;
        const itemCount = await Cart.countDocuments({ u_id });
        res.status(200).json({ itemCount });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// To Remove Item From Cart one  product
app.delete("/remove-cart-item/:id",async(req,resp)=>{
   
    const result = await Cart.deleteOne({_id:req.params.id})
    resp.send(result);
})

//To Place Order
// app.post('/placeorders', async (req, res) => {
//     try {
//       const { u_id, orderedproducts, address } = req.body;
//       const newOrder = new Order({ u_id, orderedproducts, address });
//       const savedOrder = await newOrder.save();
//       res.status(201).json(savedOrder);
//     } catch (error) {
//       res.status(500).json({ error: 'An error occurred.' });
//     }
//   });
app.post('/placeorder', async (req, res) => {
    try {
        const { u_id, orderedproducts, address } = req.body;
        const newOrderItem = new Cart({ u_id, orderedproducts, address });
        const savedOrderedItem = await newOrderItem.save();
        res.status(201).json(savedOrderedItem);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


//Fetch All Orders Admin
app.get('/allorders', async (req, res) => {
    try {
        const orders = await Order.find();
        if(orders){
            res.status(200).json("No Orders Placed");
        }else{
            res.status(200).json(orders);
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
}); 


//Fetch All Orders User
app.get('/orders/:u_id', async (req, res) => {
    try {
        const { u_id } = req.params;
        const orders = await Order.find({ u_id });
        if(orders){
            res.status(200).json("No Orders Placed");
        }else{
            res.status(200).json(orders);
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.get("/search/:key",async(req,resp)=>{
let result = await Product.find({
    "$or" :[
        { name:{$regex:req.params.key}},
        { category:{$regex:req.params.key}},
        { description:{$regex:req.params.key}}
    ]
}) ;
resp.send(result)
})

// const connectdb = async()=>{
//     mongoose.connect("mongodb://localhost:27017/fitmart");
//     const productSchema = new mongoose.Schema({});
//     const products = mongoose.model('products',productSchema);
//     const data = await products.find();
//     console.warn(data);
// }
// connectdb();


// app.get("/",(req,resp)=>{
//     console.log("This Server is running on Port - 8989");
// resp.send("This Server is running on Port - 8989")
// });

app.listen(5000);

// By Rahul Borse