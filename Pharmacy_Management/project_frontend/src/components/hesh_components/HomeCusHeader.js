import React from 'react';
// import Footer from "./HomeCusFooter"; 
// import Header from "./HomeCusHeader";


function Header() {

    return(

        
        <div>
            <a href="index.html"><img src="asserts/logo.jpg" class="logo" /></a>
            <div class="logBtn">
                <img src="asserts/profile2.png" class="profile" />
                <div class="btn">
                    <br />
                    {/* <a href="/"><input class="login" type="button" value="LOG OUT" /></a> */}
                    <a href="/addlog"><input class="login" type="button" value="LOG IN" /></a>
                    <a href="/"><input class="signup" type="button" value="SiGN UP FOR FREE" /></a>
                </div>
                <h1> Union Pharmaceuticals </h1>
                <div class="nav">
                    <ul class="menu" align="center">

                        <li class="menu" > <a href="#"> Home </a> </li>
                        <li class="menu" > <a href="#"> Showcase </a> </li>
                        <li class="menu" > <a href="#"> Place Order </a> </li>
                        <li class="menu" > <a href="#"> Inquiry & Feedback </a> </li>
                        <li class="menu" style={{align:"right"}}> <a href="#"> About us </a> </li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>

            
                  
    )
}

export default Header;