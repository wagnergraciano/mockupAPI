import React, {Component} from 'react';
import PersonalInfo from './personalnfo';
import JobDetails from './jobDetails';
import AllInfo from './allInfo';

class Main extends Component{
    state = {
        step: 1,
        //step1
        firstName: '',
        lastName: '',

        //step2
        jobTitle: '',
        jobCompany: '',
        jobLocation: '',
    }

    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step+1
        });
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    showStep = () => {
        const {step, firstName, lastName, jobTitle, jobLocation, jobCompany} = this.state;
        if(step === 1){
            return (
                <PersonalInfo 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    firstName = {firstName}
                    lastName = {lastName}
                />
            );
        }
        if(step === 2){
            return (
                <JobDetails
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    jobTitle = {jobTitle}
                    jobLocation = {jobLocation}
                    jobCompany = {jobCompany}
                />
            );
        }
        if(step === 3){
            return (
                <AllInfo
                    prevStep = {this.prevStep}
                    firstName = {firstName}
                    lastName = {lastName}
                    jobTitle = {jobTitle}
                    jobLocation = {jobLocation}
                    jobCompany = {jobCompany}
                />
            );
        }
    }

    render(){
        const {step} = this.state;
        return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default Main;