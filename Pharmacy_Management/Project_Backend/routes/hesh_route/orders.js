const router = require("express").Router();
let Order = require("../../models/hesh_model/Order");
const auth = require('../../middleware/cus_middleware/auth');
const User = require('../../models/hesh_model/Customer')
const jwt = require("jsonwebtoken");

//add the details of the order
router.post("/add",auth, async (req,res)=>{

    const user = await User.findById(req.Cus._id)
    if (!user) {

        throw new Error('There is no user')
  
      }
    const cusid = req.Cus._id;
    const address = req.Cus.address;
    const mobileno = req.Cus.mobileno;
    const name = req.Cus.name;
    const age = req.Cus.age;
    const symptoms = req.body.symptoms;
    const cardno = req.body.cardno;
    const cardcvv = req.body.cardcvv;
    const date = req.body.date;
    const itemname1 = req.body.itemname1;
    const itemquantity1 = req.body.itemquantity1;
    const itemname2 = req.body.itemname2;
    const itemquantity2 = req.body.itemquantity2;
    const itemname3 = req.body.itemname3;
    const itemquantity3 = req.body.itemquantity3;
    

    const newCustomerDrugs = new Order({

        cusid,
        address,
        mobileno,
        name,
        age,
        symptoms,
        cardno,
        cardcvv,
        date,
        itemname1,
        itemquantity1,
        itemname2,
        itemquantity2,
        itemname3,
        itemquantity3   
    
    })

    newCustomerDrugs.save().then(()=>{
        res.json("Added to the system")
    }).catch((err)=>{
        console.log(err);
    })

});




// //retrieve order function by means of all records
// router.route("/").get((req,res) => {

//     Order.find().then((orders) => {
//         res.json(orders)
//     }).catch((err) => {
//         console.log(err)
//     })

// })

//active get logged in
router.get("/",auth, async (req,res)=>{
try{
    Order.find({cusid:req.Cus._id}).exec((err,orders)=>{
        
    
         res.status(200).json({
            success:true,
            existingPosts:orders
        });
    });
}catch(error){
    res.status(500).send({ status: "Error with /all", error: error.message });
}
});

// //retrieve single order function by auto generated id
// router.route("/get/:id").get(async (req,res) => {
//     let orderid = req.params.id;//fetching id
//     const user = await Order.findById(orderid)
//     .then((order) => {
//         res.status(200).send({status: "Order fetched", order})
//     }).catch(() => {
//         console.log(err.message);
//         res.status(500).send({status: "Error with getting the order", error: err.message});
//     })
// })


//active get by id
router.route('/:id').get((req,res)=>{

    let id= req.params.id;

    Order.findById(id,(err,orders)=>{
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            orders
        });
    });
});

// //retrieve by manually given id
// router.route("/get/:id").get(async (req,res) => {
//     let orderid = req.params.orderid;
//     const user = await Order.findOne(orderid)
//     .then((order) => {
//         res.status(200).send({status: "Order fetched", order})
//     }).catch(() => {
//         console.log(err.message);
//         res.status(500).send({status: "Error with getting the order", error: err.message});
//     })
// })


// //get a specific order
// router.route('/:orderID').get((req,res)=>{

//     let orderID = req.params.orderID;
//     Order.findById(orderID,(err,Order)=>{
//        if(err){
//             return res.status(400).json({success:false,err});
//         }
//        return res.status(200).json({
//             success:true,
//             Order
//         });

//     });

//  });







//  router.route('/update/:productID').put((req,res)=>{

//     Order.findByIdAndUpdate(
//        req.params.productID,{
//             $set:req.body
//         },
//         (err,Order)=>{
//             if(err){
//             return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success: "Update Successfully"
//             });
//         });
//     });

 
//active update
    router.route('/update/:id').put((req,res)=>{

          Order.findByIdAndUpdate(
           req.params.id,{
                $set:req.body
            },
            (err,orders)=>{
                if(err){
                return res.status(400).json({error:err});
                }
                return res.status(200).json({
                    success: "Updated Successfully"
                });
            });
        });
    

 

//active Delete 
router.route('/delete/:id').delete((req,res)=>{

    Order.findByIdAndRemove(
        req.params.id).exec((err,deleteProduct)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteProduct
        });
    });
 });




//  router.get("/rry", auth, async (req, res) => {

//         const user = await User.findById(req.Cus._id)

//        const cusid = user._id;

//        console.log(cusid)
  
//   });


module.exports = router;