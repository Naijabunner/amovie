'use client'
import { createContext, ReactNode, useState } from "react";


 export const FilterContext = createContext({
    filteredInput:'',
    setfilteredInput:(value: any)=>{}
 })



 function FilterContextProvider({ children }:{ children: ReactNode}){

    const [filteredInput, setfilteredInput] = useState('')

    const value ={
        filteredInput :filteredInput,
        setfilteredInput :setfilteredInput,
    }
    return(
       <>
       <FilterContext.Provider value={value}> 
       {children}
       </FilterContext.Provider>
       </>
    )
}

export default FilterContextProvider