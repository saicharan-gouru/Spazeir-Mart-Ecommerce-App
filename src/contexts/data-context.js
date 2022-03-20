import { createContext, useContext, useEffect, useState } from "react";


const DataContext = createContext();

function DataProvider({children}){

    const [categoriesData,setCategoriesData] = useState([]);

    const axios = require('axios');

    useEffect(()=>{ 
        async function  FetchData(){
            try{
            const response = await axios.get("/api/categories");
            console.log(response);
            setCategoriesData(response.data.categories);
            }
            catch(error){
                console.log(error);
            }
        }
        FetchData();
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