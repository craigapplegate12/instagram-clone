import React, { Component } from 'react';
import './info.css'


class Info extends Component {
    render (){
        return (
            <div className="info-bar">
                <div className="profile-details profile-pic">
                pic goes here           
                </div>
                <div className="profile-details profile-bio">
                    <div className="bio-head">
                        <div className="head-separate">username </div>
                        <div className="head-separate"> edit profile button </div>
                        <div className="head-separate">create post button </div>
                    </div>
                    <div className="bio-sub-head">
                    ### posts    ### followers   ### following
                    </div>
                    <div className="bio-body">
                    <p><b>FirstName LastName</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Ultricies tristique nulla aliquet enim. Id porta nibh venenatis cras. </p> 
                    </div>
                
                </div>
            </div>



        );
    }





}

export default Info;