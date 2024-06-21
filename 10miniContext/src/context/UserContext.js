import React, { createContext } from "react";

// created variable by creating createContext mathod same like useState & exported it.
const UserContext = createContext();

// Here UserContext is a provider we can use it by wrapping like <div> and other component & stuff here (here these components get access of this global usercontext) </div> -> eg. <UserContext.Provider> stuff </UserContext.Provider>
export default UserContext;