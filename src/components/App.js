import '../App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import TransactionDetails from './TransactionDetails';
import TransactionList from './TransactionList';

function App() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
    .then(r => r.json())
    .then(data => setTransactions(data.slice(0, 49)))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <TransactionDetails />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
