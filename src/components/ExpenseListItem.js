import React from 'react';
import { Link } from 'react-router-dom'; 

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
      <h1>Expense List Item</h1>
      <Link to ={`/edit/${id}`}>
      <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;