
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-[#faf8f5] px-6 py-4">
                <Link
                    href="/"
                    className="text-xs tracking-widest text-[#a78d70] hover:text-[#29251f]"
                >
                    ← VOLVER AL INICIO
                </Link>
            </div>
            <section className="bg-[#e9e1d7] px-6 py-24 text-center sm:py-32">
                <span className="text-[10px] tracking-[0.25em] text-[#907b65]">
                    CONÓCENOS
                </span>

                <h1 className="mt-5 font-serif text-5xl sm:text-7xl">
                    Nuestra historia.
                </h1>

                <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#746b61]">
                    ÉLORA es un espacio dedicado a la belleza, inspirado en la
                    simplicidad, el cuidado personal y los pequeños rituales cotidianos.
                </p>
            </section>

            <section className="mx-auto grid max-w-[1100px] gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
                <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#a78d70]">
                        NUESTRA FILOSOFÍA
                    </span>

                    <h2 className="mt-5 font-serif text-4xl leading-tight">
                        La belleza es una sensación, no un estándar.
                    </h2>

                    <p className="mt-6 text-sm leading-8 text-[#81796f]">
                        Creemos que cuidarte debe ser una experiencia especial.
                        Nuestra colección reúne productos de belleza seleccionados
                        para inspirar confianza, bienestar y celebrar tu individualidad.
                    </p>
                </div>

                <div className="bg-[#eee8e0]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&auto=format&fit=crop"
                        alt="Colección de belleza y cuidado facial ÉLORA"
                        className="h-[420px] w-full object-cover"
                    />
                </div>
            </section>

            <section className="bg-[#f3efe9] px-6 py-16 text-center">
                <h2 className="font-serif text-3xl">
                    Descubre tu ritual de belleza.
                </h2>

                <Link
                    href="/catalogo"
                    className="mt-7 inline-block bg-[#29251f] px-8 py-4 text-[10px] tracking-widest text-white"
                >
                    EXPLORAR CATÁLOGO
                </Link>
            </section>
        </main>
    );
}
