 import React,{useState} from 'react';
 import axios from 'axios';
 import Header from "./HomeCusHeader";
 import Footer from "./HomeCusFooter";

 
 
function AddCustomer() {

    const config = {

        headers: {
  
          Authorization: localStorage.getItem("Authorization"),
  
        },
  
      };
        
        const [symptoms, setSymptoms] = useState("");
        const [cardno, setCardno] = useState("");
        const [cardcvv, setCvv] = useState("");     
        const [date, setDate] = useState("");
        const [itemname1, setitemname1] = useState("");
        const [itemquantity1, setitemquantity1] = useState("");
        const [itemname2, setitemname2] = useState("");
        const [itemquantity2, setitemquantity2] = useState("");
        const [itemname3, setitemname3] = useState("");
        const [itemquantity3, setitemquantity3] = useState("");


        function sendData(e){

            e.preventDefault();
            
            const newOrder = {

                symptoms:symptoms,
                cardno:cardno,
                cardcvv:cardcvv,
                date:date,
                itemname1:itemname1,
                itemquantity1:itemquantity1,
                itemname2:itemname2,
                itemquantity2:itemquantity2,
                itemname3:itemname3,
                itemquantity3:itemquantity3
                
                


            }

            axios.post("http://localhost:8070/order/add", newOrder,config).then(()=>{
                alert("Order details added");
                window.location = "/addpath"
            }).catch((err)=>{
                alert(err)
            })
        }




       function demoFill(){

            // e.preventDefault();
    
            setSymptoms("cough");
    
            setCardno("2332-3221-6767-8766");
    
            setCvv("212");
    
            setDate("2022-06-05");
    
            setitemname1("Panadene");
    
            setitemquantity1("6");

            setitemname2("Piriton");
    
            setitemquantity2("3");

            setitemname3("Amoxcillin");
    
            setitemquantity3("4");
    
        };


       



    return(


<div>
<Header/>
 <center><h1 style={{color:"blue"}}>YOUR ORDER DETAILS</h1></center>
 <form onSubmit={sendData}>
    <div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Symptoms" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="symptoms" onChange={(e)=>{ setSymptoms(e.target.value); }}  value={symptoms} required/></div>
    <div style={{float:"right"}}><input type="text" placeholder="Card no." style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="cardno" onChange={(e)=>{ setCardno(e.target.value); }}  value={cardno} required/></div>
</center></div><br /><div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Card cvv" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="cardcvv" onChange={(e)=>{ setCvv(e.target.value); }} value={cardcvv} required/></div>
    <div style={{float:"right"}}><input type="text" placeholder="Date" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="date" onChange={(e)=>{ setDate(e.target.value); }}  value={date} required/></div>
</center></div><br /> <div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Item1 name" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemname1" onChange={(e)=>{ setitemname1(e.target.value); }}  value={itemname1} required/></div>
    <div style={{float:"right"}}><input type="number" placeholder="Item quantity1" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemquantity1" onChange={(e)=>{ setitemquantity1(e.target.value); }}  value={itemquantity1} required/></div>
</center></div><br /><div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Item2 name" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemname2" onChange={(e)=>{ setitemname2(e.target.value); }}  value={itemname2} required/></div>
    <div style={{float:"right"}}><input type="number" placeholder="Item quantity2" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemquantity2" onChange={(e)=>{ setitemquantity2(e.target.value); }}  value={itemquantity2} required/></div>
</center></div><br /><div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Item3 name" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemname3" onChange={(e)=>{ setitemname3(e.target.value); }}  value={itemname3} required/></div>
    <div style={{float:"right"}}><input type="number" placeholder="Item quantity3" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemquantity3" onChange={(e)=>{ setitemquantity3(e.target.value); }}  value={itemquantity3} required/></div>
</center></div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><div><center>
    <input type="submit" className="submitBtn" id="submitBtn" style={{height:"60px",width:"400px",color:"white",border_radius:"5px"}} value="CONFIRM DETAILS" />
<br/><br/>



    <center><input type="button"  className="submitBtn" id="submitBtn" style={{height:"50px",width:"150px",color:"green",border_radius:"5px"}} value="Demo" onClick={()=> {demoFill()}}/></center>
 

                                   
</center></div>
</form><div><center>
<div style={{float:"right"}}><a href="/addpath"><input className="submitBtn" type="Submit" value="NEXT" style={{height:"45px",width:"160px",margin:"50px",color:"white",border_radius:"5px"}}/></a></div></center></div><br/><br/><br/><br/><br/><br/>
<Footer/></div> 

        )
    }

    export default AddCustomer;