import React from 'react';

class CardItem extends React.Component  {

    constructor(props) {
        super(props);
        console.log('from constructor of carditem')
    }

    // componentDidMount(){
        
    //     console.log('from carditem componentdidmount')
    // }

    render() {
        // console.log('from carditem', this.props);
        // console.log('from render ', this.props.card._id)
        var cardUrl = "https://mysterious-island-25360.herokuapp.com/?id=" + `${this.props.card._id}`
        return (
            <a href={{cardUrl}} className="card-link">
                <div className="card-body">
                    <div className="card-img">
                        <img src={this.props.card.image} 
                            alt={this.props.card.name}/>
                    </div>
                    <div className="card-info">
                        <span className="card-title">{this.props.card.name}</span>
                        <span className="card-price">${this.props.card.sprice}</span>
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
    
}


export default CardItem;

