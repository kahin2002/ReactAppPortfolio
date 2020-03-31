import React from 'react';
 

import 'bootstrap/dist/css/bootstrap.min.css';
import  'typeface-lobster';
import 'typeface-open-sans';
import { Card, CardImg, CardTitle, } from 'reactstrap';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


 

function Directory(props) {

    const directory = props.portfolio.map(portfolio => {
        return (
            <div key={portfolio.id} className="col-md-5 m-1 mb-5">
                     <Card>        
                        <CardImg width="100%" src={portfolio.image} alt={portfolio.name} />
                         
                            <CardTitle>{portfolio.name}</CardTitle>
                         
                    </Card>
 
             </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <br />
                    <h2>Portfolio</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}

             </div>
        </div>
    );
}

export default Directory;