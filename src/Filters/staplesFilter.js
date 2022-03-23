function staplesFilter(products, includeStaples) {
    if (includeStaples)
        return products.filter(item => item.categoryName === "Staples")
    else
        return products
}

export { staplesFilter }