import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ data, filterdData }) {
  
  let use 
  if (!filterdData.length){
    use=data
  }
  else if (filterdData.length){
    use=filterdData
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr key="header">
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {use.map((record) => (
          <Transaction
            key={record.id}
            date={record.date}
            description={record.description}
            category={record.category}
            amount={record.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
