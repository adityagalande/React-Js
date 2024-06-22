import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {}, 
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;


// Custom hook for accessing ThemeContext for eg. -> darkTheme, themeMode in that ThemeContext 
export default function useTheme() {
    return useContext(ThemeContext);
}