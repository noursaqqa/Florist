//class
import React, { Component } from 'react'
import CardItem from './CardItem.jsx'

class CardList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return(

            <div className="main-container">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>

            // <div className="container-fluid d-flex justify-content-center">
            //     <div className="row">
            //         <div className="col-md-4">
            //             <CardItem />
            //         </div>
            //         <div className="col-md-4">
            //             <CardItem />
            //         </div>
                    
            //         <div className="col-md-4">
            //             <CardItem />
            //         </div>
            //     </div>
            // </div>
            
        );
    }
}

export default CardList;