import React, {Component} from 'react';

class Navbar extends Component{
    constructor(props){
        super(props); 
        this.state = {

        }
    }


    render(){
        return(
            <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <span class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Abyssee</span>
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                <span class="nav-link" href="#">Sign out</span>
                </li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;