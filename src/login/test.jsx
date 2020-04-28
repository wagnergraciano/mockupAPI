import React,{ Component } from 'react';

import LoginService from './shared/loginService';
// import Axios from 'axios';

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
      this.loginService.login(this.teste)
      .then(response => {
        this.setState({response: response})
        // this.setState({data: response.data})
        // this.setState({user: response.data.user})
      })

      // Axios.post('https://analytics.flexcontact.com.br:56566/api/stag/auth/token',this.teste).then((response) => {
      //   console.log(response);
      //   this.setState({response: response})
      //   // this.setState({data: response.data})
      //   // this.setState({user: response.data.user})
      // }, (error) => {
      //   console.log(error);
      // });
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