const express = require('express');
const router = express.Router();
const Product = require('../models/Product')


//create a product
router.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({})
        let id;      
        if (products.length > 0) {
            let last_product_array = products.slice(-1)
            let last_product = last_product_array[0];
            id = last_product.id + 1
        }
         else {
            id: 1
        }
        
        products = await Product.create({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });
        console.log(products);
        console.log("Product saved");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ success: false, error: "Error saving product" });
    }
});

// fetch all deta
router.get("/allproduct",async(req, res)=>{
    const product = await Product.find({})
    res.send(product)
})


//creating api for deleting products
router.post("/removeproduct",async(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const p = await Product.findOneAndDelete({id:id})
    res.json({
        success:true,
        name:name
    })
})


module.exports = router;