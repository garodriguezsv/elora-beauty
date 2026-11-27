
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";

export default function CatalogClient({
    products,
}: {
    products: Product[];
}) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    const categories = [
        "all",
        ...Array.from(new Set(products.map((p) => p.category))),
    ];

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                category === "all" || product.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [products, search, category]);

    return (
        <main className="mx-auto min-h-screen max-w-[1400px] px-6 py-16 sm:px-12">
            <div className="mb-12 text-center">
                <span className="text-[10px] tracking-[0.25em] text-[#a78d70]">
                    THE ÉLORA COLLECTION
                </span>
                <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
                    Beauty essentials
                </h1>
                <p className="mt-4 text-sm text-[#81796f]">
                    Discover products selected for your everyday beauty ritual.
                </p>
            </div>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <input
                    type="search"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-[#ded5ca] bg-white px-4 py-3 text-sm outline-none focus:border-[#a78d70] sm:max-w-sm"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-[#ded5ca] bg-white px-4 py-3 text-sm capitalize outline-none"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "all" ? "All categories" : item}
                        </option>
                    ))}
                </select>
            </div>

            <p className="mb-6 text-xs text-[#81796f]">
                {filteredProducts.length} products found
            </p>

            {filteredProducts.length === 0 ? (
                <p className="py-20 text-center text-sm text-[#81796f]">
                    No products found. Try another search.
                </p>
            ) : (
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <Link
                            href={`/producto/${product.id}`}
                            key={product.id}
                            className="group"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-[#eee8e0]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-4">
                                <span className="text-[9px] uppercase tracking-widest text-[#a78d70]">
                                    {product.category}
                                </span>
                                <h2 className="mt-2 font-serif text-base">
                                    {product.title}
                                </h2>
                                <p className="mt-2 text-sm">${product.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
