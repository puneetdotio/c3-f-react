type Product = {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
}

const product: Product = {
    id: 101,
    title: "keyboard",
    price: 2500,
    inStock: true,
}

console.log(product.price)