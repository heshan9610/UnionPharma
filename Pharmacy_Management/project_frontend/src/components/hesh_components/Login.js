import React,{Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Header from "./HomeCusHeader";
import Footer from "./HomeCusFooter";

export default class CusLogin extends Component {
    constructor(props) {
      super(props);
      this.userLoginSubmit = this.userLoginSubmit.bind(this)
      this.handleClose = this.handleClose.bind(this)
  
      this.state = {
        username: "",
        pwd: "",
        token: "",
        open: false
      }
    }

    async userLoginSubmit(e) {
        e.preventDefault()
        const userData = {
          username: this.state.username,
          pwd: this.state.pwd
        }
   
        
    
        await axios.post("http://localhost:8070/customer/login",userData)
        .then((res) => {
          this.setState({
            token: res.data.token
          })
          localStorage.setItem("Authorization", res.data.token)
          alert("Login Success")
          window.location = "/add"
          toast.success('logging successfull',{position:toast.POSITION.TOP_CENTER});
        })
        .catch((err) => {
          console.log(err)
          this.setState({open: true})
          alert("Login Unsuccess")
          toast.warning('loging unsucces',{position:toast.POSITION.TOP_CENTER});
        })
      }
    
      handleClose(reason) {
        if (reason === 'clickaway') {
         return;
        }
        this.setState({open: false})
     };
   
     render() {
    return(

 <div><Header/><div>
<center><h1 style={{color:"blue"}}>LOGIN</h1></center>
</div>
<form onSubmit={this.userLoginSubmit} class="form1-signin1" name="form"> 
<div><center>
<input type="text" placeholder="Username"   style={{height:"50px",width:"450px",border_radius:"3px"}} name="username" onChange={e => this.setState({ username: e.target.value })} required/>
</center></div>
<br/>


<div><center>
<input type="password" placeholder="Password"   style={{height:"45px",width:"440px",border_radius:"3px"}} name="password" onChange={e => this.setState({ pwd: e.target.value })} required/>
</center></div>


<br/><br/>


<div style={{float:"center"}}><center>
<input type="submit" className="submitBtn" id="login" name="login" style={{height:"50px",width:"300px",color:"white",margin:"20px",border_radius:"3px"}} value="Login"/>
</center></div>

<br/>
<div><center>
If you haven't registered click <a href="/">here</a>
</center></div>
</form>
<br/><br/><br/>
<Footer/></div>

        )
    }

} 