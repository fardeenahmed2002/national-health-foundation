"use client"
import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const Context = createContext<any | null>(null);

const ContextProvider = ({ children }: any) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isloggedin, setIsloggedin] = useState(false)

    const getuserdata = async () => {

        try {

            const { data } = await axios.get("/api/user", { withCredentials: true })

            if (data.success && data.user) {
                setLoading(false)
                setUser(data.user)
            } else {
                console.error("Failed to fetch user data:", data.message)
                setUser(null)
            }

        } catch (error) {
            console.error("Error fetching user data:", (error as Error).message)
        }

    }

    const getAuthstatus = async () => {
        try {
            const { data } = await axios.get("/api/auth/signin", { withCredentials: true })
            if (data.success) {
                setIsloggedin(true)
                getuserdata()
            }
        } catch (error) {
            console.log((error as Error).message)
        }
    }

    useEffect(() => {
        getAuthstatus()
    }, [])

    const value = {
        user,
        isloggedin,
        loading,
        getuserdata,
        setIsloggedin,
        setUser
    }
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

export default ContextProvider
