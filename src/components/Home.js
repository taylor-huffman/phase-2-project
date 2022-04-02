import React from 'react'
import { useEffect, useState } from 'react';
// import NavBar from './NavBar';
import TransactionDetails from './TransactionDetails';
import TransactionList from './TransactionList';
import SearchBar from './SearchBar';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

function Home() {

    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState('')
    const [showDetails, setShowDetails] = useState(null)
  
    useEffect(() => {
      fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
      .then(r => r.json())
      .then(data => setTransactions(data))
    }, [])
  
    // const representatives = [...new Set(transactions.map(item => item.representative))].map(item => {
    //   return {label: item}
    // })
  
    const transactionsWithId = transactions.map((transaction, i) => {
      transaction.id = i + 1
      return {...transaction, id: transaction.id }
    }).filter(transaction => {
      if (!search) return true
      return transaction.representative.toLowerCase().includes(search.toLowerCase())
      || transaction.district.toLowerCase().includes(search.toLowerCase())
      || transaction.ticker.toLowerCase() === search.toLowerCase()
    })
  
    console.log(showDetails)
  
    return (
        // <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth='xxl' className='container home'>
          <Grid container spacing={0} sx={{ flexGrow: 1 }}>
            <Grid item xs={3}>
              <TransactionDetails showDetails={showDetails} setShowDetails={setShowDetails} />
            </Grid>
            <Grid item xs={9} style={{ padding: '40px 0' }}>
              <SearchBar search={search} setSearch={setSearch} />
              <TransactionList transactions={transactionsWithId} setShowDetails={setShowDetails} />
            </Grid>
          </Grid>
          </Container>
        // </Box>
    );
  }

export default Home
