import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "../AddTransactionForm";

function AccountContainer() {
  //use State
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdRecord, setfilterdRecord] = useState([]);
  //url for the our endpoint
  const url = "http://localhost:8001/transactions";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => err);
  }, []);

  //handle th echange that will happen on the search button
  const handleChange = (e) => {
    let value = e.target.value;
    // console.log(value.toLowerCase());
    setSearch(value);

    //making a regex from the input
    let typed = RegExp(value.toLowerCase());
    if (typed.length == 0) {
      setfilterdRecord([]);
    }
    let filterd =
      record.filter((reco) => reco.description.toLowerCase().match(typed)) ||
      "No results";
    if (filterd.length != 0) {
      setfilterdRecord(filterd);
    }
  };


  return (
    <div>
      <Search handleChange={handleChange} />
      <AddTransactionForm handleReload={handleChange} />
      <TransactionsList data={record} filterdData={filterdRecord} />
    </div>
  );
}

export default AccountContainer;
