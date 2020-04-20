import React,{ Component } from 'react';

import LoginService from './shared/loginService';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: '',
        }
        this.loginService = new LoginService();
        this.teste = {
            email: this.props.email,
            password: this.props.password,
        }
    }

    componentDidMount(){
        this.loginService.login(this.teste)
        .then(response => this.setState({data: JSON.stringify(response)}))
    }


    render() {
        return (
          <div>
            The response is {this.state.data}.
          </div>
        );
      }

}
export default Test;