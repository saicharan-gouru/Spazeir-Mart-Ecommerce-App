import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { productsReducer } from "../reducers";
import { sortProductsByPrice } from "../Filters/sortProductsByPrice";
import {categoryFilter} from "../Filters/categoryFilter";
import { ratingFilter } from "../Filters/ratingFilter";
import { priceRangeFilter } from "../Filters/priceRangeFilter";

 
const ProductContext = createContext();

function DataProvider({children}){

    const [{products,categories,sortByPrice,includeStaples,includeSnacks,includeDairyandEggs,includeVegetables,rating,priceRange,searchedProducts},productsDispatch] = useReducer(productsReducer,{ products:[],categories:[] ,sortByPrice : null, includeStaples : false, includeSnacks : false,includeDairyandEggs : false, includeVegetables : false,rating:null,priceRange:199,searchedProducts:[] });

    useEffect(()=>{ 
        async function FetchData(){
            try{
                const response1 = await axios.get("/api/categories");
                productsDispatch({type:"FETCH_CATEGORIES",payload:response1.data.categories})
                const response2 = await axios.get("/api/products");
                productsDispatch({type:"FETCH_PRODUCTS",payload:response2.data.products})
            }
            catch(error){
                console.log(error);
            }
        }
        FetchData();
    },[]
    );

    
    const categoryFilteredProducts = categoryFilter(products,includeSnacks,includeStaples,includeDairyandEggs,includeVegetables);
    const ratingFilteredProducts = ratingFilter(categoryFilteredProducts,rating);
    const priceRangeFilteredProducts = priceRangeFilter(ratingFilteredProducts,priceRange);
    const sortedProducts = sortProductsByPrice(priceRangeFilteredProducts,sortByPrice);  

    return(
    <ProductContext.Provider value={{categories,products,sortedProducts,productsDispatch,sortByPrice,includeStaples,includeSnacks,includeDairyandEggs,includeVegetables,rating,priceRange,searchedProducts}}>
        {children}
    </ProductContext.Provider>
    );
}

const useData = () => useContext(ProductContext);

export {useData,DataProvider};