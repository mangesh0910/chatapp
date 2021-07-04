import React, { Component } from 'react';

class AddNewUser extends Component {
 
    render() { 
        return ( 
            <button className="btn" onClick={this.openModal} >
                <i className="fa fa-plus"></i>
                <span>New conversation</span>
           </button>
         )
    }
}
 
export default AddNewUser;