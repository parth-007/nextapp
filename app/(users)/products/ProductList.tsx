"use client";

import { useSearchParams } from "next/navigation";

export const ProductList = () => {
    const x = useSearchParams();
    console.log("inner:", x);
    console.log("category:", x.get("category"));
    console.log("page:", x.get("page"));
    console.log("sortOrder:", x.get("sortOrder"));
    return <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
    </ul>
}