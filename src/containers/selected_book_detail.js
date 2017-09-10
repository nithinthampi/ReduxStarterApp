import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookSelected extends Component{
    render(){
        if(!this.props.selectedBook){
            return (
            <div>
                No book selected    
            </div> )   ;
        }
        return (
        <div>
            Book details goes here!!!{this.props.selectedBook.title}
        </div>
        );
    }
}

//Map the redux state to the react component property
function mapStateToProps(state){
    return {selectedBook : state.bookSelected};
};

//Export the container to be used in App.js
export default connect(mapStateToProps)(BookSelected);