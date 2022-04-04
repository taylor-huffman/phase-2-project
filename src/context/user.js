import React from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const currentUser = {
        name: "Taylor",
    }

    return (
        <UserContext.Provider value={null}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }