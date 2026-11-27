
"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
            <h2 className="font-serif text-3xl">Something went wrong.</h2>
            <p className="text-sm text-[#81796f]">
                We couldn&apos;t load the beauty collection.
            </p>
            <button
                onClick={reset}
                className="bg-[#29251f] px-7 py-3 text-xs text-white"
            >
                TRY AGAIN
            </button>
        </div>
    );
}
