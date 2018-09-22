import React, { Component } from 'react';
import './list.css'

class List extends Component {
    render () {
      return(
        <button onClick={() => this.props.selectUserFn(this.props.person)}>
        
            {this.props.firstName} {this.props.lastName}
        
        </button>
      )
    };
  }

  export default List;