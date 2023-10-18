import Product from "./Product.js";

export const getProducts = () => {
    const products = [
        {id:0, name: 'TV LG', price: 700},
        {id:1, name: 'IPad', price: 1200},
        {id:3, name: 'Iphone', price: 1500}
    ];

    return products.map ( item => {
        return new Product(item);
})
}

console.log(getProducts())