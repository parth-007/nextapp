import { ProductList } from "./ProductList";

const Products = async({searchParams}) => {
    const p: any = await searchParams;
const category = p?.category || "all";
const page = p?.page || 1;
const sortOrder = p?.sortOrder || "asc";
console.log("outer:", p);
    return <>
    <ProductList />
    <h1>Products</h1>
    <p>Category: {category}</p>
    <p>Page: {page}</p>
    <p>Sort Order: {sortOrder}</p>
    </>
};

export default Products;