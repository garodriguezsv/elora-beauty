
import Link from "next/link";
import { getBeautyProducts } from "@/services/productService";
import CatalogClient from "@/components/products/CatalogClient";

export default async function CatalogPage() {
    const products = await getBeautyProducts();

    return (
        <main className="min-h-screen bg-[#faf8f5]">
            <div className="mx-auto max-w-[1400px] px-6 pt-8 sm:px-12">
                <Link
                    href="/"
                    className="text-xs tracking-widest text-[#a78d70] hover:text-[#29251f]"
                >
                    ← VOLVER AL INICIO
                </Link>
            </div>

            <CatalogClient products={products} />
        </main>
    );
}
