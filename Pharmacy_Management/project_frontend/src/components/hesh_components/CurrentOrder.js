import React,{Component} from 'react';
import axios from "axios";
import Footer from "./HomeCusFooter";
import Header from "./HomeCusHeader";
// import { post } from '../../../../Project_Backend/routes/hesh_route/orders';
import ReactToPrint from 'react-to-print';

export default class PostDetails extends Component{

    
    
    constructor(props){
        super(props);

        this.state={
            orders:[]
    };
}


    async componentDidMount(){

        const config = {

            headers: {
      
              Authorization: localStorage.getItem("Authorization"),
      
            },
      
          };


          axios.get("http://localhost:8070/order/",config).then((res) => {
            if(res.data.success){
                this.setState({
                    orders:res.data.existingPosts
                });

                console.log(this.state.orders);
            }
        });
    }


    

    



    //Delete Button Link
    onDelete = (productID)=>{
    if (window.confirm('Are you sure you wish to delete this item?')) {
    axios.delete(`http://localhost:8070/order/delete/${productID}`).then((res)=>{
       alert("Deleted Successfully");
       window.location.href = '/addview';
    })
  }}




  //filterData function
    filterData(order,searchKey){
         const result = order.filter((orders) =>

         orders._id.includes(searchKey) ||
         orders.itemname1.includes(searchKey) ||
         orders.itemname2.includes(searchKey) ||
         orders.itemname3.includes(searchKey) 
         
    )
    this.setState({orders:result})
}




    //handle search area
    handleSearchArea = (e) =>{
        const searchKey = e.currentTarget.value;

        const config = {

            headers: {
      
              Authorization: localStorage.getItem("Authorization"),
      
            },
      
          };


          axios.get("http://localhost:8070/order/",config).then((res) => {
            if(res.data.success){
                this.filterData(res.data.existingPosts,searchKey)
            }
        });
    }






    render(){
        return(
            
        <div>
            
        <Header/>


    

        <div class="search">
            <input id="text1" type="text" name="search" placeholder="Search.." onChange = {this.handleSearchArea} style={{height:"45px",width:"400px"}}/>
        </div>

            <div  ref ={el=>(this.componentRef=el)} >

        <table border="1" width="99%">
		<tr>
            <th class="col1"><center>ID</center></th>
			<th class="col2"><center>Item1 Name</center></th>
			<th class="col3"><center>Item1 Quantity</center></th>
			<th class="col5"><center>Item2 Name</center></th>
			<th class="col6"><center>Item2 Quantity</center></th>
			<th class="col7"><center>Item3 Name</center></th>
			<th class="col8"><center>Item3 Quantity</center></th>
            <th class="col9"><center>Edit</center></th>
            <th class="col10"><center>Delete</center></th>
		
			
		</tr>
        
    {this.state.orders.map(orders => <tr key={orders.id}>
    <><td  style={{width:"70px"}}>{orders._id}</td><td style={{width:"80px"}}>{orders.itemname1}</td><td style={{width:"80px"}}>{orders.itemquantity1}</td><td style={{width:"80px"}}>{orders.itemname2}</td><td style={{width:"80px"}}>{orders.itemquantity2}</td><td style={{width:"80px"}}>{orders.itemname3}</td><td style={{width:"80px"}}>{orders.itemquantity3}</td><td style={{width:"65px"}}><a href={`/addedit/${orders._id}`}><input type="submit" style={{height:"35px",width:"60px"}} name="edit" value="edit"/></a></td><td style={{width:"85px"}}><input type="submit" style={{height:"35px",width:"70px",name:"delete"}} onClick={()=>this.onDelete(orders._id)} value="delete" id="delete"/></td> 
    </></tr>)}
    
        </table>
        
        </div>

        <center>
<div style={{float:"right"}}><a href="/add"><input className="submitBtn" type="Submit" value="ADD ORDER" style={{height:"45px",width:"200px",margin:"50px",color:"white",border_radius:"5px"}}/></a></div></center>

<center><div style={{float:"left"}}>
<ReactToPrint                      
                            trigger={()=>{
                            return <input type="submit" style={{height:"45px",width:"200px",margin:"50px",color:"white",border_radius:"5px"}}  value="GENERATE SUMMARY"/>
                            }}
                            content={()=>this.componentRef}
                            documentTitle = 'Order Summary'
                            pageStyle= "print"
                        />
</div></center>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><Footer/></div>
        )
     }

}

 