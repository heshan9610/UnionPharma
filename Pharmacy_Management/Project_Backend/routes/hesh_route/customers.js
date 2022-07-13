const router = require("express").Router();
let customer = require("../../models/hesh_model/Customer");
const auth = require('../../middleware/cus_middleware/auth');
const jwt = require("jsonwebtoken");

//sign up

router.post("/signup", async (req, res) => {
    try {
      const {
        name,
        username,
        age,
        address,
        pwd,
        mobileno,
        
      } = req.body;
  

    
      let customer1 = await customer.findOne({ username });
    if (customer1) {
      throw new Error("User already exists");
    }

      customer1 = {
        name: name,
        username: username,
        age: age,
        address: address,
        pwd: pwd,
        mobileno: mobileno
      };
  
      const newcustomer = new customer(customer1);
      await newcustomer.save();
      const token = await newcustomer.generateAuthToken();
      res
        .status(201)
        .send({ status: "customer Created", customer: newcustomer, token: token });
        console.log(customer1);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  });



      //login

      router.post('/login', async (req, res) => {
        try {
          const {username, pwd} = req.body
          const Cus = await customer.findByCredentials(username, pwd)
          const token = await Cus.generateAuthToken()
          res.status(200).send({token: token, Cus: Cus})
    
        } catch (error) {
          res.status(500).send({ error: error.message });
          console.log(error);
        }
    
      })

module.exports = router;
