import React, { useState } from "react";
import UserContext from "./UserContext";

// Here children is used to store components, similar like outlet in router
const UserContextProvider = ({children}) => {

    // you can call API here and put those variables in <UserContext.Provider value={{ variables }}> for access in components
    const [user, setUser] = useState(null)
    

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;