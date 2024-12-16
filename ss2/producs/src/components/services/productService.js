const productList = [
    {
        id: 1,
        name: "sam sung"
    },
    {
        id: 2,
        name: "Nokia"
    }, {
        id: 3,
        name: "iphone"
    }
]

// các method goi api
export function getAll() {
    // call api
    return productList;
}
export function addProduct(product) {
    // call api
        productList.push(product)
}