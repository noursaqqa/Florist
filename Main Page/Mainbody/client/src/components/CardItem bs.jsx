import React from 'react';

const CardItem = (props) => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img className="card-img-top" src="https://res.cloudinary.com/bloomnation/c_fill,d_vendor:global:catalog:product:image.png,f_auto,h_1008,q_auto,w_1008/v1574095553/vendor/4664/catalog/product/2/0/20191023100212_file_5db0cde48fb1f_5db0ce181fd9a.jpeg" alt="Autumn Blush"/>

            </div>
            <div className="card-info text-dark">
                <span className="card-text card-title">Autumn Blush</span>
                <span className="card-price">$49.99</span>           
            </div>
            <hr/>
            <div className="card-actions">
                <span className="delivery card-text">SAME DAY DELIVERY</span>
                <span className="fav-button">Fav</span>
            </div>
        </div>
    )
}


export default CardItem;