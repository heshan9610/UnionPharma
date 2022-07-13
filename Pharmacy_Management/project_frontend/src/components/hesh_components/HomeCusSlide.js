import React from 'react';
import Footer from "./HomeCusFooter"; 
import Header from "./HomeCusHeader";
// import New from './components/hesh_components/myScript';

function Slide(){

    var slideIndex=1;
    showSlides(slideIndex);
    
    //Next button control
    function plusSlides(n){
        showSlides(slideIndex += n);
    }
    
    //image control
    function currentSlide(n){
        showSlides(slideIndex = n);
    }
    
    function showSlides(n){
        
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        
        if(n > slides.length){
            slideIndex = "1";
        }
        if(n < "1"){
            slideIndex = slides.length;
        }
        
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-"1"].style.display = "block";
        dots[slideIndex-"1"].className += " active";
    }
        
    
    

    return(

            <div><Header/><br /><hr className="hr1" /><div className="slideshow">
            <div className="mySlides fade">
                <div className="number">1 / 4</div>
                <img src="asserts/slide1.jpg" height="500px" width="1300px" />
            </div>

            <div className="mySlides fade">
                <div className="number">2 / 4</div>
                <img src="asseerts/slide2.jpg" height="500px" width="1300px" />
            </div>

            <div className="mySlides fade">
                <div className="number">3 / 4</div>
                <img src="asserts/slide3.jpg" height="500px" width="1300px" />
            </div>

            <div className="mySlides fade">
                <div className="number">4 / 4</div>
                <img src="asserts/slide4.jpg" height="500px" width="1300px" />
            </div>


            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>
            </div>
            <br /><div className="dotClass" style={{text_align:"center"}}>
                <span className="dot" onClick={currentSlide(1)}></span>
                <span className="dot" onClick={currentSlide(2)}></span>
                <span className="dot" onClick={currentSlide(3)}></span>
                <span className="dot" onClick={currentSlide(4)}></span>
            </div><h2 className="welcome"> Welcome to Union <br /> Pharmaceuticals </h2><div className="btn1">
                <ul className="btns">
                    <li> <a href="#"> <i className="fa fa-twitter"> </i></a><p className="p" style={{font_size:"15px"}}>Social Media</p></li>
                    <li> <a href="#"> <i className="fa fa-phone"> </i></a><p className="p0" style={{font_size:"15px"}}>Contactus</p></li>
                    <li> <a href="#"> <i className="fa fa-user"></i> </a><p className="p1" style={{font_size:"15px"}}>About us</p></li><br />

            </ul>
            </div><Footer/></div>

                )
            }

export default Slide;