import React from 'react';

const CardItem = (props) => {
    return(
        <a href="" className="card-link">
            <div className="card-body">
                <div className="card-img">
                    <img src="https://res.cloudinary.com/bloomnation/c_fill,d_vendor:global:catalog:product:image.png,f_auto,h_1008,q_auto,w_1008/v1574095553/vendor/4664/catalog/product/2/0/20191023100212_file_5db0cde48fb1f_5db0ce181fd9a.jpeg" 
                        alt="Autumn Blush Flower Design"/>
                </div>
                <div className="card-info">
                    <span className="card-title">Autumn Blush</span>
                    <span className="card-price">$49.99</span>
                </div>
                <div className="hor-line"></div>
                <div className="card-actions">
                    <span className="card-delivery">
                        <span className="truck-icon">
                            <img src="https://image.flaticon.com/icons/png/512/39/39866.png" alt="truck icon"/>
                        </span>
                        <span className="delivery-text">SAME DAY DELIVERY</span>
                    </span>
                    <span className="card-favButton">
                        <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/favourite512x512.png" alt="fav button"/>
                    </span>
                </div>
            </div>
        </a>
    )
}


export default CardItem;