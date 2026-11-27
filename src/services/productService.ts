
import type { Product, ProductsResponse } from "@/types/product";

const API_URL = "https://dummyjson.com";

export async function getBeautyProducts(): Promise<Product[]> {
    const response = await fetch(
        `${API_URL}/products/category/beauty`,
        {
            next: { revalidate: 3600 },
        }
    );

    if (!response.ok) {
        throw new Error("Unable to load beauty products");
    }

    const data: ProductsResponse = await response.json();

    return data.products;
}

export async function getProductById(id: string): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error("Product not found");
    }

    return response.json();
}
