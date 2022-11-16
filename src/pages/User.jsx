import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider';

export default function User() {
    const { data } = useContext(UserContext);
    return (
        <div>
            <h1>welcome, {data.username}</h1>
        </div>
    )
}
