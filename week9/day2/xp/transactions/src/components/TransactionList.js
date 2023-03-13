import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/transactionsActions';
import TransactionForm from './TransactionForm';
import './transactionsList.css'

const TransactionList = (props) => {
  const handleEdit = (index) => {
    props.setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    props.deleteTransaction(index);
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>FSC</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.accountNumber}</td>
              <td>{transaction.FSC}</td>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TransactionForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentIndex: (index) => dispatch(actions.setCurrentIndex(index)),
  deleteTransaction: (index) => dispatch(actions.delete(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
