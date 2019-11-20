import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Flowers4001 extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     id: "",
     img : ""
   }
 }

 componentDidMount() {
   var that = this;
   var path = window.location.href;
   console.log(path);
   var imgId = path.substring(path.indexOf("=")+1);
   if(imgId === "") {
     imgId = 1;
   }
   console.log(imgId);
   $.ajax({
     type: "GET",
     url: "/id/?id=" + imgId,
     success: function(data) {
       console.log("dvdvdvdv");
       console.log(data);
       that.setState({
         img : data.img,
         id: data.id
       });
     },
     error: function(request, status, error) {
       console.log(error,"hi im the error");
     }
   });
 }
 render() {
   console.log("hiiii")
   return (
     <div>
       <section id="#header">
          <div className="row header-innerContainer ">
            <div className=" clearfix company-logo companylogo-img col-xs-12 col-sm-4 col-md-4">
              <img src="https://res.cloudinary.com/bloomnation/c_fit,f_auto,h_1000,q_auto,w_1000/v1/vendor/6263/profile/p/a/parkflorist-logo_2.png" />
            </div>
          </div>{" "}
        </section>
        <div className="displayUl header-nav col-md-12">
          <div className="navigation ui-menu">
            <ul>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span>SHOP</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">BIRTHDAY</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">SYMPATHY</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">OCASSION</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">CUSTOM ARRANGMENT</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">ABOUT US</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="photo">
<img  className =" nn"id="active-image_gallery-image" src={this.state.img}/>
        </div>
        
       </div>
   );
 }
}
ReactDOM.render(<Flowers4001 />, document.getElementById("Flowers4001"));
