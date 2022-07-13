import React,{useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Header from "./HomeCusHeader";
import Footer from "./HomeCusFooter";

export default function CusRegistration(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [pwd1, setPassword1] = useState("");
    const [pwd2, setPassword2] = useState("");
    
    const sendData = async (e) => {
        e.preventDefault();

        let newCustomer = {
            name: name,
            username: username,
            age: age,
            address: address,
            pwd: pwd1,
            mobileno: mobileno

        }

        if (pwd1 === pwd2) { 
            axios.post("http://localhost:8070/customer/signup",newCustomer)
            .then(()=>{
                alert("Registration Success")
                toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER});
                window.location = "/addlog"
            }).catch((err)=>{
                toast.warning('Customer account already exists. Please check your Email.',{position:toast.POSITION.TOP_CENTER});;
            })
            }else{
                alert("Password mismatch")
                toast.warning('Password dismatch',{position:toast.POSITION.TOP_CENTER});
            }

        setName("");
        setUsername("");
        setAge("");
        setAddress("");
        setMobileno("");
        setPassword1("");
        setPassword2("");

    }
    return(

   <div><Header/>
<center><h1 style={{ color: "blue" }}>SIGN UP</h1></center><center><h4>Create your account and sign up for free</h4></center>
<form class="form-signin" action="" method="post" name="form" onSubmit={sendData}> <div><center>
    <div style={{ float: "left" }}><input type="text" placeholder="Name" style={{ height: "50px", width: "500px", margin: "25px", border_radius: "3px" }} name="name" onChange={(e) => setName(e.target.value)} required /></div>
    <div style={{ float: "right" }}><input type="text" placeholder="Username" style={{ height: "50px", width: "500px", margin: "25px", border_radius: "3px" }} name="username" onChange={(e) => setUsername(e.target.value)} required /></div>
</center></div><br /><div><center>
    <div style={{ float: "left" }}><input type="text" placeholder="Age" style={{ height: "50px", width: "500px", margin: "25px", border_radius: "3px" }}  name="age" onChange={(e) => setAge(e.target.value)} required /></div>
    <div style={{ float: "right" }}><input type="text" placeholder="Address" style={{ height: "50px", width: "500px", margin: "25px", border_radius: "3px" }} name="contactno" onChange={(e) => setAddress(e.target.value)}required /></div>
</center></div><br /><div><center>
    <div style={{ float: "left" }}><input type="text" id="mobileno" placeholder="Mobile no" name="mobileno" pattern="[0-9]{10}" style={{ height: "50px", width: "500px", margin: "25px", border_radius: "3px" }}  onChange={(e) => setMobileno(e.target.value)} required /></div>
    <div style={{ float: "right" }}><input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}" style={{ height: "43px", width: "500px", margin: "25px", border_radius: "3px" }} placeholder="Password" id="pwd1" name="pwd1" onChange={(e) => setPassword1(e.target.value)} required /></div>
</center></div><br/><br/><br/><br/><br/><div>
    <div style={{ float: "center" }}><input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}" style={{ height: "45px", width: "380px", margin: "25px", border_radius: "3px" }} placeholder="Confirm Password" id="pwd2" name="pwd2" onChange={(e) => setPassword2(e.target.value)} required /></div>
</div>
<br /> <br />
<div style={{float:"center"}}><center>
    <input type="checkbox" id="checkbox" style={{margin:"10px"}} onclick="enableButton()" />I hereby accept all the terms and conditions
</center></div><br /><div><center>
    <input type="submit" class="submitBtn" id="submitBtn" style={{height:"60px",width:"400px",color:"white",border_radius:"5px"}} value="REGISTER"  />
</center></div><br />
<div><center>
	<h5>If you already have an account click <a href="/addlog">here</a> to login</h5>
</center></div><br />
</form>
<Footer/></div>

        )
    }
//email type text


