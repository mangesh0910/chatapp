import React, { Component } from 'react';
import { UserContext } from '../../context/UserContext';

class MyCom extends Component {
    
    render() { 
        return ( 
           <UserContext.Consumer>{(context)=>{
               const {isUserExist} = context
               const uv = isUserExist ? "Yes" : "No"
               return(
                    <div>  exist {uv}</div>
               )
           }}

           </UserContext.Consumer>
         )
    }
}
 
export default MyCom;