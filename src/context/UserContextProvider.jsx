import { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserContextProvider({ children }) {

    const [data, setData] = useState({
        username: "fadliselaz",
        email: "hallo@gmail.com",
        avatar: 'https://picsum.photos/seed/hallo/200/200'
    })

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}