
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await fetch("/api/products");

                if (!response.ok) {
                    throw new Error("Could not load products");
                }

                const data = await response.json();
                setProducts(data.products);
            } catch {
                setError("We couldn't load our products. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    return (
        <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-12">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#a78d70]">
                        SELECTED FOR YOU
                    </span>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                        The beauty edit
                    </h2>
                </div>

                <Link
                    href="/catalogo"
                    className="border-b border-[#29251f] pb-1 text-[10px] tracking-[0.15em]"
                >
                    VIEW ALL PRODUCTS →
                </Link>
            </div>

            {loading && (
                <p className="py-12 text-center text-sm text-[#81796f]">
                    Discovering our beauty essentials...
                </p>
            )}

            {error && (
                <div className="py-12 text-center">
                    <p className="text-sm text-red-700">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 border border-[#29251f] px-5 py-2 text-xs"
                    >
                        TRY AGAIN
                    </button>
                </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
                    {products.slice(0, 4).map((product) => (
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
                                <span className="text-[9px] uppercase tracking-[0.16em] text-[#a78d70]">
                                    {product.category}
                                </span>
                                <h3 className="mt-2 font-serif text-base sm:text-lg">
                                    {product.title}
                                </h3>
                                <p className="mt-2 text-sm text-[#766e65]">
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
