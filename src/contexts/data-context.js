import { LineAxisOutlined } from "@mui/icons-material";
import { stepContentClasses } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";


const DataContext = createContext();

function DataProvider({children}){

    const [categoriesData,setCategoriesData] = useState([]);
    const axios = require('axios');

    useEffect(async()=>{
        try{
        const response = await axios.get("/api/categories");
        console.log(response);
        setCategoriesData(response.data.categories);
        }
        catch(error){
            console.log(error);
        }
    }
    ,[]);


    return(
    <DataContext.Provider value={{categoriesData}}>
        {children}
    </DataContext.Provider>
    );
}

const useData = () => useContext(DataContext);

export {useData,DataProvider};