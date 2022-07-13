const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    pwd : {
        type : String,
        required : true
    },

    mobileno : {
        type : String,
        required : true
    },
    
    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
    
})

// @Action - encrypt the password
customerSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
});

// @Action - Get auth token
customerSchema.methods.generateAuthToken = async function () {
  const customer = this;
  const token = jwt.sign({ _id: customer._id }, "jwtSecret");
  customer.tokens = customer.tokens.concat({ token });
  await customer.save();
  return token;
};

// @Action - Find customer by credentials
customerSchema.statics.findByCredentials = async (username, pwd) => {
  const customer1 = await customer.findOne({ username });
  if (!customer1) {
    throw new Error("Please enter authorized username");
  }
  const isMatch = await bcrypt.compare(pwd, customer1.pwd);
  if (!isMatch) {
    throw new Error("Password is not matched");
  }
  return customer1;
};

const customer = mongoose.model("customers", customerSchema);

module.exports = customer;

