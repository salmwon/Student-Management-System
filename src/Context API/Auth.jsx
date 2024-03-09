import React, { createContext, useEffect, useState } from "react";
export const tokenAuthenticationContext = createContext()

function Auth({ children }) {
    const [isAuthorised, setIsAuthorised] = useState()
    useEffect(() => {
        if (sessionStorage.getItem("studentname")) {
            setIsAuthorised(true)
        } else {
            setIsAuthorised(false)
        }
    }, [isAuthorised])
    return (
        <>
            <tokenAuthenticationContext.Provider value={{ isAuthorised, setIsAuthorised }}>
                {children}
            </tokenAuthenticationContext.Provider>
        </>
    )
}

export default Auth