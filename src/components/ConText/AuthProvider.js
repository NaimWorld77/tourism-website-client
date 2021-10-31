import React from 'react';
import { createContext } from "react";
import useFirebase from '../useFirebase/useFirebase';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContexts = useFirebase();

    return (
        <AuthContext.Provider value={allContexts}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;