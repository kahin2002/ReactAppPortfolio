import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
import  'typeface-lobster';
import 'typeface-open-sans';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderCampsite({campsite}) {
    return (
    <div className="col-md-5 m-1">
    <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />

                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>

    </Card>
               
    
    </div>);
    
}




function RenderComments({comments}) {  
    if(comments) {
        return (
             
               <div className = "col-md-5 m-1">
               <h4> Comments</h4>
               {comments.map(comment => {
                   return(
                       <div key = {comment.id}>
                       <p> {comment.text}<br />
                       -- {comment.author}, 

                       </p>

                    </div>
                   );

               })}
               
            </div>
        )
    }
}
 
    







function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}


export default CampsiteInfo;