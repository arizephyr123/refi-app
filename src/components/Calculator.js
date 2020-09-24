import React, { useState } from 'react';

const Calculator = () => {
  const [currPmt, setCurrPmt] = useState('currPmt');
  const [currInt, setCurrInt] = useState('currInt');
  const [loanBal, setLoanBal] = useState('loanBal');
  const [newInt, setNewInt] = useState('newInt');
  const [currTerm, setCurrTerm] = useState('currTerm');
  const [newTerm, setNewTerm] = useState('newTerm');

  const handleChanges = e => {};

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
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
            onChange={() => setCurrTerm}
          />
          <label htmlFor='currInt'>Current Loan Interest</label>
          <input
            type='text'
            id='currInt'
            name='currInt'
            value={currInt}
            onChange={() => setCurrInt}
          />
          <label htmlFor='loanBal'>Current Loan Balance</label>
          <input
            type='text'
            id='loanBal'
            name='loanBal'
            value={loanBal}
            onChange={() => setLoanBal}
          />
          <label htmlFor='currPmt'>Current Monthly Payment</label>
          <input
            type='text'
            id='currPmt'
            name='currPmt'
            value={currPmt}
            onChange={() => setCurrPmt}
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
          onChange={() => setNewInt}
        />

        <label htmlFor='newTerm'>New Loan Term</label>
        <input
          type='text'
          id='newTerm'
          name='newTerm'
          value={newTerm}
          onChange={() => setNewTerm}
        />
        <div className='btn-div'>
          <button className='calc-btn'>Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
