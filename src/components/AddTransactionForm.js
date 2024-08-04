import React, { useEffect, useState } from "react";

function AddTransactionForm() {
  //use state to track inputs
  const [input, setInput] = useState({
    date: "",
    description: "",
    category: "",
    amount: 1,
  });

  //url
  const url = "http://localhost:8001/transactions";

  //function to handle changes

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  
  };

  //function to handle submit

  function handleSubmit(e) {
    // e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input }),
    });
    
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
