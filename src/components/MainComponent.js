import React, { Component } from 'react';
 
import Directory from './DirectoryComponent';
 import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
 import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { PORTFOLIO } from '../shared/portfolio';
import About from './AboutComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'typeface-lobster';
import 'typeface-open-sans';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

import { Switch, Route, Redirect,   } from 'react-router-dom'
 

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES, 
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            portfolio: PORTFOLIO
         };

    }

 


    render() {

        const HomePage = () => {
            return (
                <Home
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    portfolio={this.state.portfolio.filter(portfolio => portfolio.featured)[0]}
                    
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}  />
                    <Route exact path='/directory' render={() => <Directory portfolio={this.state.portfolio} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/Aboutus' render={() => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>

                <Footer />
                </div>
        );
    }
}

export default Main;