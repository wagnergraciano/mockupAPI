import React, {Component} from 'react';

import Btn from './btn';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';

class Wizard extends Component{
    constructor(props){
        super(props); 
        this.state = {
            step: 1,
            finalizar: 'd-inline',
            //step1
            firstName: '',
            lastName: '',
    
            //step2
            jobTitle: '',
            jobCompany: '',
            jobLocation: '',
        }
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }

    finish = () =>{
        this.setState({
            finalizar: "d-none"
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    showStep = () => {
        const {step} = this.state;
        if(step === 1){
            return (
                <Step1 />
            );
        }
        else if(step === 2){
            return (
                <Step2 />
            );
        }
        else if(step === 3){
            return (
                <Step3 />
            );
        }
        else if(step === 4){
            return(
                <Step4 />
            );
        }
        else{
            return(
                <Step5 />
            );
        }
    }

    render(){
        const {step} = this.state;
        return(
            <>
            <button type="button" className={"btn btn-sm btn-outline-secondary " + this.state.finalizar} data-show="true" data-toggle="modal" data-target="#exampleModal" data-backdrop="static">
            Primeiros passos
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Passo {step} de 5.</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.showStep()}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger mr-auto" data-dismiss="modal">Pular</button>
                    <Btn step={this.state.step} length="5" nextStep={this.nextStep.bind(this)} prevStep={this.prevStep.bind(this)} finish={this.finish.bind(this)}/>
                </div>
                </div>
            </div>
            </div>
    
            </>
        );
    }
}

export default Wizard;