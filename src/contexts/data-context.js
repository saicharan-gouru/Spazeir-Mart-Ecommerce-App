import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

function DataProvider({children}){

    const [categoriesData,setCategoriesData] = useState([]);
    const [productsData,setProductsData] = useState([]);


    useEffect(()=>{ 
        async function FetchData(){
            try{
                const response1 = await axios.get("/api/categories");
                setCategoriesData(response1.data.categories);
                const response2 = await axios.get("/api/products");
                setProductsData(response2.data.products);
            }
            catch(error){
                console.log(error);
            }
        }
        FetchData();
    },[]
    );


    return(
    <DataContext.Provider value={{categoriesData,productsData}}>
        {children}
    </DataContext.Provider>
    );
}

const useData = () => useContext(DataContext);

export {useData,DataProvider};