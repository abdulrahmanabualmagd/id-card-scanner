/*
    - This component responsible for  
        - useEffect (check for the authentication token in cookies on component mounting)
        - login (store token on cookies, update token State)
        - logout (remove authToken from cookies, update token State)

    - So childrens will have the token, login function, and logout function so that it can use it any where

    - NEW: Add prop validation for the children 
 */

import Cookies from "js-cookie";
import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

// Token name in cookies
const AUTH_TOKEN = "authToken";
// Cookie Expiration (1 => expires after one day)
const COOKIE_EXPIRES = 1;

// Create context, used by components want to access these data (authToken, login, logout)
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // Token State
    const [token, setAuthToken] = useState(null);

    // Check for authentication token on component mounting
    useEffect(() => {
        const token = Cookies.get(AUTH_TOKEN);
        if (token) setAuthToken(token);
    }, []);

    // Login
    const login = (token) => {
        // Store token in the cookies
        Cookies.set(AUTH_TOKEN, token, { expires: COOKIE_EXPIRES });
        // Update token state
        setAuthToken(token);
    };

    // Logout
    const logout = () => {
        // Remove token from cookies
        Cookies.remove(AUTH_TOKEN);
        // Update token state
        setAuthToken(null);
    };

    return <AuthContext.Provider value={{ authToken: token, login, logout }}>{children}</AuthContext.Provider>;
}

// Prop types definition for AuthProvider (children)
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
