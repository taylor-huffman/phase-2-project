import React from 'react'
import { Button } from '@mui/material'
import { Close } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

export default function TransactionDetails({ showDetails, setShowDetails }) {

  function handleOnClick() {
    setShowDetails(null)
  }

  function BuildDetails() {
    return (
      <div className='transaction-details' style={{ position: 'relative' }}>
        <p onClick={handleOnClick} style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', position: 'absolute', right: '15px', top: '35px' }}><Tooltip title="Clear Details"><Close /></Tooltip></p>
        <h1 style={{ marginTop: '35px' }}>{showDetails.representative}</h1>
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
        <h2 style={{ marginBottom: '50px', padding: '0 25px' }}>Click A <span style={{ color: '#1976D2' }}>Learn More</span> Button To See Stock Transaction Details</h2>
        <img alt='Congress Illustration' src={require('../media/moneypolitics.webp')} style={{ width: '100%' }} />
      </div>
    )
  }
  
  return (
    <div>
      {showDetails === null ? <NoDetails /> : <BuildDetails />}
    </div>
  )
}
