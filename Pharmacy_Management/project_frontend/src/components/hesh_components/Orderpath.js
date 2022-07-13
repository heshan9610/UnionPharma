import React from 'react';
import Header from "./HomeCusHeader";
import Footer from "./HomeCusFooter";

function Orderpath(){



    return(

<div><Header/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div><center>
<div style={{float:"center"}}><a href="/addview"><input className="submitBtn" type="Submit" value="View My Order" style={{height:"60px",width:"300px",margin:"50px",color:"white",border_radius:"5px"}}/></a></div>
</center></div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
{/* <div><center>
<div style={{float:"center"}}><a href="#"><input className="submitBtn" type="Submit" value="Gnerate Order Summary" style={{height:"60px",width:"300px",margin:"50px",color:"white",border_radius:"5px"}}/></a></div>
</center></div><br/><br/><br/> */}
<Footer/></div>  
    )
}

export default Orderpath;
