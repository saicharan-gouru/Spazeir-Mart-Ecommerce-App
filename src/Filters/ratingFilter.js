function ratingFilter(products, rating) {
    if (rating === null)
        return products;
    return products.filter(product => product.rating === rating);
}

export { ratingFilter };