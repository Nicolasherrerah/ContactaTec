import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){
    const [theme, setTheme] = useState({isLight: true});
    const toggleTheme = () => {
        setTheme((state) => ({isLight: !state.isLight}));
      };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
    
}