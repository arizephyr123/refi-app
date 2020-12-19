import React, { useState } from 'react';

const Calculator = () => {
  const [currPmt, setCurrPmt] = useState('currPmt');
  const [currInt, setCurrInt] = useState('currInt');
  const [loanBal, setLoanBal] = useState('loanBal');
  const [newInt, setNewInt] = useState('newInt');
  const [currTerm, setCurrTerm] = useState('currTerm');
  const [newTerm, setNewTerm] = useState('newTerm');

  const handleChange = e => {
    //   https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    console.log(`${e.target.id} => ${e.target.value}`);
    // set[e.target.id](e.target.val);
  };

  const handleSubmit = e => {
    e.preventDefault();
    return <h5>Submitted</h5>;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='l_calc_form'>
          <div className='l_calc_form_header'>
            <h4>Current Loan Info</h4>
          </div>
          <label htmlFor='currTerm'>Remaining Loan Term</label>
          <input
            type='text'
            id='currTerm'
            name='currTerm'
            value={currTerm}
            onChange={handleChange}
          />
          <label htmlFor='currInt'>Current Loan Interest</label>
          <input
            type='text'
            id='currInt'
            name='currInt'
            value={currInt}
            onChange={handleChange}
          />
          <label htmlFor='loanBal'>Current Loan Balance</label>
          <input
            type='text'
            id='loanBal'
            name='loanBal'
            value={loanBal}
            onChange={handleChange}
          />
          <label htmlFor='currPmt'>Current Monthly Payment</label>
          <input
            type='text'
            id='currPmt'
            name='currPmt'
            value={currPmt}
            onChange={handleChange}
          />
        </div>
        <div className='r_calc_form'>
          <div className='r_calc_form_header'>
            <h4>New Loan Terms</h4>
          </div>
        </div>
        <label htmlFor='newInt'>New Loan Interest Rate</label>
        <input
          type='text'
          id='newInt'
          name='newInt'
          value={newInt}
          onChange={handleChange}
        />

        <label htmlFor='newTerm'>New Loan Term</label>
        <input
          type='text'
          id='newTerm'
          name='newTerm'
          value={newTerm}
          onChange={handleChange}
        />
        <div className='btn-div'>
          <button className='calc-btn' type='submit' value='Submit'>
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
