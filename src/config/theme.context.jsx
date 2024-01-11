import { createContext, useState } from "react";

const ThemeContext = createContext()
const ThemeProvider = ({children})=>{
    const [theme, setTheme]= useState("dark")

    const toggleTheme = ()=>{
        if(theme === 'dark'){
            setTheme = "light"
        }
        else{
            
        }
    }
    return(
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider