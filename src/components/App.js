import '../App.css';
// import { useEffect, useState } from 'react';
import NavBar from './NavBar';
// import TransactionDetails from './TransactionDetails';
// import TransactionList from './TransactionList';
// import SearchBar from './SearchBar';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Home from './Home';
import About from './About';
import Account from './Account';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';
import { UserProvider } from '../context/user';

function App() {

  // const [transactions, setTransactions] = useState([])
  // const [search, setSearch] = useState('')
  // const [showDetails, setShowDetails] = useState(null)

  // useEffect(() => {
  //   fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
  //   .then(r => r.json())
  //   .then(data => setTransactions(data))
  // }, [])

  // // const representatives = [...new Set(transactions.map(item => item.representative))].map(item => {
  // //   return {label: item}
  // // })

  // const transactionsWithId = transactions.map((transaction, i) => {
  //   transaction.id = i + 1
  //   return {...transaction, id: transaction.id }
  // }).filter(transaction => {
  //   if (!search) return true
  //   return transaction.representative.toLowerCase().includes(search.toLowerCase())
  //   || transaction.district.toLowerCase().includes(search.toLowerCase())
  //   || transaction.ticker.toLowerCase() === search.toLowerCase()
  // })

  // console.log(showDetails)

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/account'>
            <Account />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
