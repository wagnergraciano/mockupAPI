
import React, {Component} from 'react';

class Btn extends Component{ 
  continue = e =>{
    e.preventDefault();
    this.props.nextStep()
  }

  back = e =>{
      e.preventDefault();
      this.props.prevStep();
  }

  showBtn = () => {
    const {step, length, nextStep, prevStep, finish} = this.props;
    if (step > 1 && step < length) {
      return (
          <>
            <button type="button" className="btn btn-secondary" onClick={prevStep}>Voltar</button>
            <button type="button" className="btn btn-primary" onClick={nextStep}>Próximo</button>
          </>
      );
    } 
    else if (step === 1) {
      return(<button type="button" className="btn btn-primary" onClick={nextStep}>Próximo</button>)
    } 
    else {
      return(
        <>
        <button type="button" className="btn btn-secondary" onClick={prevStep}>Voltar</button>
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={finish}>Finalizar</button>
        </>
      );
    }
  }
  render(){
    return(<>{this.showBtn()}</>);
  }
}

export default Btn;
