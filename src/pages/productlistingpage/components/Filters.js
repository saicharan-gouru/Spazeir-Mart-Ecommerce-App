import "../ProductListing.css";
import {useData} from "../../../contexts";

function Filters(){

    const {sortByPrice,productsDispatch,includeStaples,includeSnacks,includeDairyandEggs,includeVegetables,rating} = useData();
    console.log(sortByPrice)
    return(
        <div className="filters">
            <h4>Filters <button href="/" className="button primary-yellow filter-clear" onClick={()=>productsDispatch({type:"CLEAR"})}>clear</button></h4>
            <h5>Sort by</h5>
            <label> <input type="radio" name="sort-by" checked={sortByPrice === "LOW_TO_HIGH"} onChange={()=>productsDispatch({type:"SORT_BY_PRICE",payload:"LOW_TO_HIGH"})} /> price - low to high</label><br/>
            <label> <input type="radio" name="sort-by" checked={sortByPrice === "HIGH_TO_LOW"} onChange={()=>productsDispatch({type:"SORT_BY_PRICE",payload:"HIGH_TO_LOW"})}/> price - high to low</label><br/>
            <h5>Category</h5>
            <label><input type="checkbox" name="staples" checked={includeStaples} onChange={ ()=> productsDispatch({type:"INCLUDE_STAPLES"})} /> Staples</label><br/>
            <label><input type="checkbox" name="snacks"  checked={includeSnacks} onChange={ ()=> productsDispatch({type:"INCLUDE_SNACKS"})}/> Snacks </label><br/>
            <label><input type="checkbox" name="diary-and-eggs" checked={includeDairyandEggs} onChange={ ()=> productsDispatch({type:"INCLUDE_DAIRY_AND_EGGS"})}/>  Diary and eggs</label><br/>
            <label><input type="checkbox" name="vegetables" checked={includeVegetables} onChange={ ()=> productsDispatch({type:"INCLUDE_VEGETABLES"})}/>  Vegetables</label><br/>
            <h5>Rating</h5>
            <label for="rating-4"><input type="radio" name="rating" checked={rating === 5} onChange={ ()=> productsDispatch({type:"RATING",payload:5})}/>5 star</label><br/>
            <label for="rating-3"><input type="radio" name="rating" checked={rating === 4} onChange={ ()=> productsDispatch({type:"RATING",payload:4})}/>4 star</label><br/>
            <label for="rating-2"><input type="radio" name="rating" checked={rating === 3} onChange={ ()=> productsDispatch({type:"RATING",payload:3})}/>3 star</label><br/>
            <h5>Price </h5>
            <input type="range" />
        </div>
    )
}

export {Filters};