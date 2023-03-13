import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/transactionsActions';
import './transactionsForm.css'

const TransactionForm = (props) => {
  const [state, setState] = useState({
    accountNumber: '',
    FSC: '',
    name: '',
    amount: '',
  });

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.currentIndex === -1) {
      props.insertTransaction(state);
    } else {
      props.updateTransaction(state);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Account Number:
        <input type="text" name="accountNumber" value={state.accountNumber} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        FSC:
        <input type="text" name="FSC" value={state.FSC} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Amount:
        <input type="text" name="amount" value={state.amount} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">{props.currentIndex === -1 ? 'Save' : 'Update'}</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
  currentIndex: state.currentIndex,
});

const mapDispatchToProps = (dispatch) => ({
  insertTransaction: (data) => dispatch(actions.insert(data)),
  updateTransaction: (data) => dispatch(actions.update(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
