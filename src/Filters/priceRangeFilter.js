function priceRangeFilter(products, price) {

    return products.filter(product => product.price <= Number(price));
}

export { priceRangeFilter };