import { stepContentClasses } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";


const DataContext = createContext();

function DataProvider({children}){

    const [categoriesData,setCategoriesData] = useState([]);

    useEffect(()=>{
        fetch("/api/categories")
        .then(res => res.json())
        .then(data => setCategoriesData(data.categories))
    },[]);


    return(
    <DataContext.Provider value={{categoriesData}}>
        {children}
    </DataContext.Provider>
    );
}

const useData = () => useContext(DataContext);

export {useData,DataProvider};