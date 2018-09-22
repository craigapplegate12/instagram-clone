import React, { Component } from 'react';
import './body.css'


const size= 300;

class Body extends Component { //array of 'user photos objects'
    generatePhotos(){
        console.log(this.props.numPosts);
        const postTotal = this.props.numPosts;
        let pic = '';
        const picArr =[];
        for (let i = 0; i < postTotal; i++){
            pic = `https://picsum.photos/300/300/?image=${Math.floor(Math.random()*354)}`
            picArr.push(<div className="photo"><img src={pic} alt="broken image"/></div>)
        }
        return picArr;
    }
    render (){
        return (
          <div className="profile-body">
            <div className="profile-content"> 
            {this.generatePhotos()}
            
            </div>
          
          
          
          
          </div>

        );
    }





}

export default Body;