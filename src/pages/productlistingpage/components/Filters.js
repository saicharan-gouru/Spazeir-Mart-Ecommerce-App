import "../ProductListing.css";

function Filters(){
    return(
        <div className="filters">
            <h4>Filters <a href="/" className="filter-clear">clear</a></h4>
            <h5>Sort by</h5>
            <label> <input type="radio" name="sort-by" /> price - low to high</label><br/>
            <label> <input type="radio" name="sort-by" /> price - high to low</label><br/>
            <h5>Category</h5>
            <label><input type="checkbox" name="staples" /> Staples</label><br/>
            <label><input type="checkbox" name="snacks" /> Snacks</label><br/>
            <label><input type="checkbox" name="diary-and-eggs" /> Diary and eggs</label><br/>
            <label><input type="checkbox" name="vegetables" /> Vegetables</label><br/>
            <h5>Price </h5>
            <input type="range" />
        </div>
    )
}

export {Filters};