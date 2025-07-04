"use client"
import React, { useContext } from 'react'
import { Context } from '@/contextApi/ContextProvider'
const page = () => {
    const { user } = useContext(Context)
    return (
        <div>
            {
                user && (<div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>)
            }
        </div>
    )
}

export default page
