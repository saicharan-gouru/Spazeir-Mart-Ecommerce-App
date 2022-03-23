function sortProductsByPrice(products, sortByPrice) {
    if (sortByPrice === "LOW_TO_HIGH")
        return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    else if (sortByPrice === "HIGH_TO_LOW")
        return [...products].sort((a, b) => Number(b.price) - Number(a.price));
    else
        return products;
}

export { sortProductsByPrice };