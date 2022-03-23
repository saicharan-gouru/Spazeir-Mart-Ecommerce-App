const union = (...arr) => {
    const uni = arr.reduce((acc, curr) => {
        return acc.concat(
            curr.filter((el) => !acc.some((ele) => ele._id === el._id))
        );
    }, []);
    return uni;
};


function categoryFilter(products, includeSnacks, includeStaples, includeDairyandEggs, includeVegetables) {
    let newData = [];
    let flag = false;
    if (includeSnacks) {
        flag = true;
        newData = union(newData, products.filter(item => item.categoryName === "Snacks"));
    }
    if (includeStaples) {
        flag = true;
        newData = union(newData, products.filter(item => item.categoryName === "Staples"));
    }
    if (includeDairyandEggs) {
        flag = true;
        newData = union(newData, products.filter(item => item.categoryName === "Dairy&Eggs"));
    }
    if (includeVegetables) {
        flag = true;
        newData = union(newData, products.filter(item => item.categoryName === "Vegetables"));
    }
    if (flag)
        return newData;
    else
        return products;
}

export { categoryFilter };