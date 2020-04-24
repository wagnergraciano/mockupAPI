import React, { Component } from 'react';

class JobDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {handleChange,jobTitle,jobCompany,jobLocation} = this.props;
        return(
            <>
                <h2>Enter your job information:</h2>
                <label>
                    <input 
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={handleChange('jobTitle')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="jobCompany"
                        placeholder="Job Company"
                        value={jobCompany}
                        onChange={handleChange('jobCompany')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="jobLocation"
                        placeholder="Job Location"
                        onChange={handleChange('jobLocation')}
                        value={jobLocation}
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}> 
                    Next >>
                </button>
            </>
        );
    }
}

export default JobDetails;