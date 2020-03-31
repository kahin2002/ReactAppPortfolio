import React from 'react';
import {   Media } from 'reactstrap';
 
 function  RenderPartner ({partner}){
        if(partner){
            return (
                <React.Fragment>
                    <Media object  className = "round-img" src = {partner.image}  alt = {partner.name} width = "150"  />
                    <Media body className = "ml-5 mb-4">

                        <Media heading>

                            {partner.name}
                            
                        </Media>

                        {partner.description}


                    </Media>



             </React.Fragment>
        );
    }
    return <div> empty div</div>
}




function About(props) {

    const partners = props.partners.map(partner => {
            if (partner.featured === true){
                return(
                <Media tag = "li" key = {partner.id}>


                 <RenderPartner partner = {partner} />
                </Media>)
             }
            })


    const partnerTwo = props.partners.map(partnerT => {
            if (partnerT.featured === false){
                return(
                <Media tag = "li" key = {partnerT.id}>
                    <RenderPartner partner = {partnerT} />
                </Media>)
                }
    });



    const partnerThree = props.partners.map(partnerTr => {
        if (partnerTr.featured === null){
            return(
            <Media tag = "li" key = {partnerTr.id}>
                <RenderPartner partner = {partnerTr} />
            </Media>)
            }
});



   


     
 


    
    return (
        <div className="container"> 

<div className="col">
                    <br />
                    <h2>Skills</h2>
                    <hr />
                </div>
            <div className="row row-content">
                <div className="col-12">

                    <h5>I see myself as a life-long learned. I keep striving for more and more knowledge, because, I believe that it is the only way to stay on top!. Below are some of the technologies are I use and various ways I engaged in each, as well as my skill level on each.</h5>
                        <br />
                    <h3>Level: Advanced</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                    {partnerTwo}
                    </Media>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Level: Intermediate</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                    
                  
                    {partners}

                    
                    </Media>
                </div>
            </div>


            <div className="row row-content">
                <div className="col-12">
                    <h3>Level: Beginner</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                    
                  
                    {partnerThree}

                    
                    </Media>
                </div>
            </div>




        </div>
    );




   

}

 

export default About;  