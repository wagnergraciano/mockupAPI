import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    render(){
        const {handleChange, lastName, firstName} = this.props;
        return(
            <>
                <h2>Enter yout personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleChange('firstName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleChange('lastName')}
                    />
                </label>
                <button className="Next" onClick={this.continue}> Next >> </button>
            </>
        );
    }
}

export default PersonalInfo;