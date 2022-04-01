import React from 'react'
import { Button } from '@mui/material'

export default function TransactionDetails({ showDetails }) {

  // const { amount,
  //   asset_description,
  //   cap_gaims_over_200_usd,
  //   disclosure_date,
  //   district,
  //   owner,
  //   ptr_link,
  //   representative,
  //   ticker,
  //   transaction_date,
  //   type,
  //  } = showDetails

  function BuildDetails() {
    return (
      <div className='transaction-details'>
        <h1>{showDetails.representative}</h1>
        <p><span>District:</span> {showDetails.district}</p>
        <p><span>Ticker:</span> {showDetails.ticker}</p>
        <p><span>Asset Description:</span> {showDetails.asset_description}</p>
        <p><span>Owner:</span> {showDetails.owner}</p>
        <p><span>Amount:</span> {showDetails.amount}</p>
        <p><span>Type:</span> {showDetails.type}</p>
        <p><span>Capital Gains over $200?:</span> {showDetails.cap_gaims_over_200_usd ? 'Yes' : 'No' }</p>
        <p><span>Transaction Date:</span> {showDetails.transaction_date}</p>
        <p><span>Disclosure Date:</span> {showDetails.disclosure_date}</p>
        <p><span>Periodic Transaction Report:</span></p>
        <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ width: 200 }}
                  target="_blank"
                  href={showDetails.ptr_link}
                >
                  View PTR
                </Button>
      </div>
    
    )
  }

  function NoDetails() {
    return (
      <div className='transaction-details'>
        <h2>Click A 'Learn More' Button To See Transaction Details</h2>
      </div>
    )
  }
  
  return (
    <div>
      {showDetails === null ? <NoDetails /> : <BuildDetails />}
    </div>
  )
}
