import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Flowers4001 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      id:""
    };
  }

  componentDidMount() {
    var that = this;
    var path = window.location.href;
    console.log(path);
    var imgId = path.substring(path.indexOf("=") + 1);
    if (imgId === "") {
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
          image: data.image,
          id: data._id
        });
      },
      error: function(request, status, error) {
        console.log(error, "hi im the error");
      }
    });
  }
  render() {
    console.log("hiiii");
    return (
      <div>
        <section id="#header">
          {/* <div className="row header-innerContainer "> */}
          <div className=" clearfix company-logo companylogo-img col-xs-12 col-sm-4 col-md-4">
            <span>
              Park Florist
              <br />
              2015 Macdonald Ave
              <br />
              Richmond, CA 94801
              <br />
            </span>

            <span>
              <img
                id="logoimg"
                src="https://res.cloudinary.com/bloomnation/c_fit,f_auto,h_1000,q_auto,w_1000/v1/vendor/6263/profile/p/a/parkflorist-logo_2.png"
              />
            </span>

            <span>
              <span>My Account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns='xlink="http://www.w3.org/1999/xlink"'
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
            </span>
          </div>
          {/* </div>{" "} */}
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
          <img
            className=" nn"
            id="active-image_gallery-image"
            src={this.state.image}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Flowers4001 />, document.getElementById("Flowers4001"));
