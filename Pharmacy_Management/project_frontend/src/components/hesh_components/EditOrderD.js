import React,{Component} from 'react';
import axios from "axios";
import Footer from "./HomeCusFooter"; 
import Header from "./HomeCusHeader";

export default class EditOrder extends Component{

    

    constructor(props){
        super(props);
        this.state={
            symptoms:"",
            cardno:"",
            cardcvv:"",
            date:"",
            itemname1:"",
            itemquantity1:"",
            itemname2:"",
            itemquantity2:"",
            itemname3:"",
            itemquantity3:""


        }
    }



    handleInputChange = (e) =>{
        
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }



    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;

        const{symptoms,cardno,cardcvv,date,itemname1,itemquantity1,itemname2,itemquantity2,itemname3,itemquantity3} = this.state;

        const data ={
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



        console.log(data)

        axios.put(`http://localhost:8070/order/update/${id}`,data).then((res) =>{

                

                if(res.data.success){
                    alert("Updated successfully")
                        // window.setTimeout(function(){
                            window.location= '/addview';
                        // }, 2000);

                    this.setState(
                       {
                        symptoms:"",
                        cardno:"",
                        cardcvv:"",
                        date:"",
                        itemname1:"",
                        itemquantity1:"",
                        itemname2:"",
                        itemquantity2:"",
                        itemname3:"",
                        itemquantity3:"",

                       })
                }
        })
    }



    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/order/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    symptoms:res.data.orders.symptoms,
                    cardno:res.data.orders.cardno,
                    cardcvv:res.data.orders.cardcvv,
                    date:res.data.orders.date,
                    itemname1:res.data.orders.itemname1,
                    itemquantity1:res.data.orders.itemquantity1,
                    itemname2:res.data.orders.itemname2,
                    itemquantity2:res.data.orders.itemquantity2,
                    itemname3:res.data.orders.itemname3,
                    itemquantity3:res.data.orders.itemquantity3,
                });

                console.log(this.state.orders);
            }
        });
    }




    render(){
        // const myStyle={
        //     background_image: "url(../../../public/asserts/bg3.png)",
        // };
        return(
            <div style={{backgroundColor:"#8da9e7"}}><br/><br/><br/>
{/* <Header/> */}
 <center><h1 style={{color:"blue"}}>EDIT ORDER</h1></center>
 <form noValidate>
    <div><center>
    <div style={{float:"left"}}><input type="text" readOnly = {true} placeholder="Symptoms" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="symptoms" onChange={this.handleInputChange} value={this.state.symptoms} Required="required"/></div>
    <div style={{float:"right"}}><input type="text" readOnly = {true} placeholder="Card no." style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="cardno" onChange={this.handleInputChange}  value={this.state.cardno} Required="required"/></div>
</center></div><br /><div><center>
    <div style={{float:"left"}}><input type="text" readOnly = {true} placeholder="Card cvv" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="cardcvv" onChange={this.handleInputChange} value={this.state.cardcvv} Required="required"/></div>
    <div style={{float:"right"}}><input type="text" readOnly = {true} placeholder="Date" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="date" onChange={this.handleInputChange}  value={this.state.date} Required="required"/></div>
</center></div><br /> <div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Item1 name" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemname1" onChange={this.handleInputChange}  value={this.state.itemname1} Required="required"/></div>
    <div style={{float:"right"}}><input type="text" placeholder="Item quantity1" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemquantity1" onChange={this.handleInputChange} value={this.state.itemquantity1} Required="required"/></div>
</center></div><br /><div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Item2 name" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemname2" onChange={this.handleInputChange}  value={this.state.itemname2} Required="required"/></div>
    <div style={{float:"right"}}><input type="text" placeholder="Item quantity2" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemquantity2" onChange={this.handleInputChange}  value={this.state.itemquantity2} Required="required"/></div>
</center></div><br /><div><center>
    <div style={{float:"left"}}><input type="text" placeholder="Item3 name" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemname3" onChange={this.handleInputChange}  value={this.state.itemname3} Required="required"/></div>
    <div style={{float:"right"}}><input type="text" placeholder="Item quantity3" style={{height:"50px",width:"500px",margin:"25px",border_radius:"3px"}} name="itemquantity3" onChange={this.handleInputChange}  value={this.state.itemquantity3} Required="required"/></div>
</center></div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><div><center>
    <input type="submit" className="submitBtn" id="submitBtn" style={{height:"60px",width:"400px",color:"white",border_radius:"6px",background:"#0a0a23"}} value="CONFIRM DETAILS" onClick={this.onSubmit}/>
</center></div>
</form><br/><br/><br/><br/><br/><br/>
{/* <Footer/> */}
</div> 
        )
    }
}
