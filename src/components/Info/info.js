import React, { Component } from 'react';
import './info.css'


class Info extends Component { //username, user image, user bio, user stats, first name, last name
    render (){
        return (
            <div className="info-bar">
                <div className="profile-details profile-pic">
                <img src={this.props.person.photo} alt='' height={200} width ={200} />        
                </div>
                <div className="profile-details profile-bio">
                    <div className="bio-head">
                        <div className="head-separate">{this.props.person.userName} </div>
                        <div className="head-separate"> <button>Edit</button> </div> 
                        <div className="head-separate"> <button>+</button> </div>
                    </div>
                    <div className="bio-sub-head">
                    {this.props.person.numPosts} posts  |  {this.props.person.followers} followers |  {this.props.person.following} following
                    </div>
                    <div className="bio-body">
                    <p><b>{this.props.person.firstName} {this.props.person.lastName}</b></p>
                    <p>{this.props.person.userBio} </p> 
                    </div>
                
                </div>
            </div>



        );
    }





}

export default Info;