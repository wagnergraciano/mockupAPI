import React,{ Component } from 'react';

import LoginService from './shared/loginService';

class Test extends Component{
    constructor(props){
        super(props);
        this.loginService = new LoginService();
        this.state = {
            response: {},
            data: {},
            user: {},
        }
        this.teste = {
            email: this.props.email,
            password: this.props.password,
        }
    }

    componentDidMount(){
      console.log(this.teste)
        this.loginService.login(this.teste)
        .then(response => {
          this.setState({response: response})
          // this.setState({data: response.data})
          // this.setState({user: response.data.user})
        })
    }

    render() {
        return (
          <div>
            The response is {JSON.stringify(this.state.response)}.
          </div>
        );
      }

}
export default Test;