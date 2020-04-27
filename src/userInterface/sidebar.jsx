import React, {Component} from 'react';

class Sidebar extends Component{
    constructor(props){
        super(props); 
        this.state = {

        }
    }


    render(){
        return(
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <span class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Orders
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Products
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="users"></span>
                  Customers
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Integrations
                </span>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <span class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </span>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </span>
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}

export default Sidebar;