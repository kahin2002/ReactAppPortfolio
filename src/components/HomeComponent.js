import React from 'react';
 import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (


        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">


                <br />
                    <h2>Home</h2>
                    <hr />
            <div className="row m-5">
                
                    <p> Hello, my name is Abdi Kahin I go by "AK". <br /> 
                    I am a junior Full-stack Software Engineer. 
                        My favorite technologies React, Node, and React Native. 
                        Over the last few years I have spent my time studying at colleges and coding bootcamps. 
                        

                        <br />
                        <br />
                        Below are some of the projects I have built in the recent past. 
                        Check out my skills page to see the various language and technologies I use.

                        <br />
                        <br />
                        <h3> Featured project examples</h3>

                        </p>

                        

                 <div className="col-md m-1">

                           

                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.portfolio} />
                </div>
            </div>
        </div>
    );
}



export default Home;   