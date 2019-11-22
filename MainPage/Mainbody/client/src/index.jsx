import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CardItem from './components/CardItem.jsx';
import CardList from './components/CardList.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        //methods to bind
        
        this.updateState = this.updateState.bind(this);

    }

    //methods
    updateState(data) {
        this.setState({
            cards: data
             
        })
        console.log('From update',this.state.cards);
    }

    componentDidMount(){
        
        this.retrieveData();
    }

   

    retrieveData() {
        var that = this;
        $.ajax({
            url: "/cards",
            method: "GET",
            success: function(data) {
                that.updateState(data)
            },
            error: function(error) {
                console.log(error)
            }
        })
    }


    render() {
        return(
            <div className="rendered-div">
                {/* <CardItem /> */}
                <CardList cards={this.state.cards}/>                      
            </div>
        )
    }

    
}

ReactDOM.render(<App />, document.getElementById("designs"))

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comments: []
//         }
//         this.retrieveData();
//         this.updateState = this.updateState.bind(this);
//     }

//     updateState(data) {
//         this.setState({
//             comments: data
//         })
//     }

//     retrieveData() {
//         var that = this;
//         $.ajax({
//             url: "/comments",
//             method: "GET",
//             success: function(data) {
//                 that.updateState(data)
//             },
//             error: function(error) {
//                 console.log(error)
//             }
//         })
//     }

//     add(comment) {
//         var that = this;
//         console.log(`${comment} was added`);
//         $.ajax({
//             url: "/comments",
//             type: "POST",
//             data: { 
//                 text: comment, 
//                 likes: 1,
//                 date: new Date(Date.now()) 
//             },
//             dataType: "application/json",
//             success: function() {
//                 that.retrieveData();    
//             }
//         }) 
//     }
//     render(){
//         return(<div className="comments-wrap">
//             {/* <h1>Hello from Module3</h1> */}
//             {/* <Conversation /> */}
//             <AddComment onAdd={this.add.bind(this)} comments={this.state.comments}/> 
//             <CommentsList comments={this.state.comments}/>
//       </div> ) 
//     }
// }
