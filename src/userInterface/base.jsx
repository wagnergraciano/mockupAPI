import React, {Component} from 'react';

import '../assets/cards.scss';

import Navbar from './navbar';
import Sidebar from './sidebar';
import Routes from '../login/routes';

class Base extends Component{
    constructor(props){
        super(props); 
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Navbar />
                <div class="container-fluid">
                    <div class="row">
                        <Sidebar />
                        <Routes existsBase={true}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Base;