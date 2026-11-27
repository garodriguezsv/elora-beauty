
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/services/productService";

async function ProductDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (!/^\d+$/.test(id)) notFound();

    let product;

    try {
        product = await getProductById(id);
    } catch {
        notFound();
    }

    return (
        <main className="mx-auto min-h-screen max-w-[1200px] px-6 py-16 sm:px-12">
            <Link
                href="/catalogo"
                className="text-xs tracking-widest text-[#a78d70]"
            >
                ← BACK TO COLLECTION
            </Link>

            <div className="mt-10 grid gap-12 md:grid-cols-2">
                <div className="bg-[#eee8e0]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full max-h-[650px] w-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#a78d70]">
                        {product.category}
                    </span>

                    <h1 className="mt-5 font-serif text-4xl sm:text-5xl">
                        {product.title}
                    </h1>

                    <p className="mt-5 text-xl">
                        ${product.price.toFixed(2)}
                    </p>

                    <p className="mt-7 text-sm leading-8 text-[#81796f]">
                        {product.description}
                    </p>

                    <div className="mt-8 border-y border-[#e5ddd3] py-5 text-xs text-[#81796f]">
                        Availability: {product.stock > 0 ? "In stock" : "Out of stock"}
                    </div>

                    <Link
                        href="/catalogo"
                        className="mt-8 bg-[#29251f] px-8 py-4 text-center text-[10px] tracking-[0.2em] text-white"
                    >
                        CONTINUE EXPLORING
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-[60vh] items-center justify-center">
                    <p className="font-serif text-xl text-[#a78d70]">
                        Loading product...
                    </p>
                </div>
            }
        >
            <ProductDetails params={params} />
        </Suspense>
    );
}
