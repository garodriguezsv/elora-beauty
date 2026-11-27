
import { NextResponse } from "next/server";
import { getBeautyProducts } from "@/services/productService";

export async function GET() {
    try {
        const products = await getBeautyProducts();

        return NextResponse.json({
            success: true,
            products,
        });
    } catch (error) {
        console.error("Products API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to retrieve beauty products",
            },
            { status: 500 }
        );
    }
}
