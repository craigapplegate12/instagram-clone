import React, { Component } from 'react';
import './body.css'

function generatePics(num){
    let i =0;
    for(i =0; i < num; i++){
        
    }
}
const size= 300;

class Body extends Component { //array of 'user photos objects'
    
    render (){
        return (
          <div className="profile-body">
            <div className="user-bar">
                <div className="body-select">posts</div>
            </div>
            <div className="profile-content">
                <div className="photo"><img src='https://picsum.photos/300/300/?image=16'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=4'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=45'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=12'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=46'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=2'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=14'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=67'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=89'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=45'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=78'/></div>
                <div className="photo"><img src='https://picsum.photos/300/300/?image=98'/></div>
                
            </div>
          
          
          
          
          </div>

        );
    }





}

export default Body;