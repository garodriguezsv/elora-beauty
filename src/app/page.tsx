import FeaturedProducts from "@/components/products/FeaturedProducts";
import Link from "next/link";


const categories = [
  { name: "Skincare", subtitle: "Everyday essentials", icon: "✳" },
  { name: "Makeup", subtitle: "Enhance your beauty", icon: "◈" },
  { name: "Body care", subtitle: "A moment for yourself", icon: "❋" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#29251f]">
      {/* Announcement */}
      <div className="bg-[#847565] px-4 py-2 text-center text-[10px] tracking-[0.2em] text-white sm:text-xs">
        DISCOVER YOUR NATURAL GLOW — BEAUTY BEGINS WITH YOU
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#eae4dc] bg-[#faf8f5]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-10">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-serif text-2xl tracking-[0.16em]">
              ÉLORA<span className="text-[#b69b7b]">.</span>
            </Link>
            <div className="hidden gap-7 text-[11px] tracking-[0.14em] md:flex">
              <Link href="/" className="hover:text-[#a78d70]">
                HOME
              </Link>
              <Link href="/catalogo" className="hover:text-[#a78d70]">
                SHOP
              </Link>
              <Link href="/nosotros" className="hover:text-[#a78d70]">
                OUR STORY
              </Link>
            </div>
          </div>
          <Link
            href="/catalogo"
            className="border border-[#29251f] px-5 py-2.5 text-[10px] tracking-[0.15em] transition hover:bg-[#29251f] hover:text-white"
          >
            EXPLORE COLLECTION
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1400px] md:min-h-[590px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-7 py-16 sm:px-16 md:py-20">
          <span className="mb-6 text-[10px] tracking-[0.28em] text-[#a78d70]">
            THE ART OF EVERYDAY BEAUTY
          </span>
          <h1 className="max-w-xl font-serif text-5xl leading-[1.12] sm:text-6xl lg:text-7xl">
            Beauty in
            <br />
            every <span className="text-[#b69b7b] italic">detail.</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#81796f]">
            Discover a curated collection of beauty essentials designed to
            celebrate your natural glow and make every moment feel special.
          </p>
          <div className="mt-9">
            <a
              href="/catalogo"
              className="inline-block bg-[#29251f] px-9 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#8c7864]"
            >
              DISCOVER THE COLLECTION →
            </a>
          </div>
          <span className="mt-12 font-serif text-sm italic text-[#a78d70]">
            A little luxury, every day.
          </span>
        </div>

        <div
          className="relative min-h-[380px] bg-cover bg-center md:min-h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&auto=format&fit=crop')",
          }}
          role="img"
          aria-label="Colección de productos de belleza y cuidado facial"
        >
          <div className="absolute bottom-7 right-7 bg-[#faf8f5]/90 px-6 py-4">
            <span className="font-serif text-lg italic">Feel beautiful.</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-[#eae4dc] bg-[#f3efe9] px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <span className="text-[10px] tracking-[0.25em] text-[#a78d70]">
              EXPLORE OUR WORLD
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Find your beauty ritual
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {categories.map((category) => (
              <a
                href="/catalogo"
                key={category.name}
                className="group border border-[#e2d9ce] bg-[#faf8f5] p-8 text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-serif text-3xl text-[#b69b7b]">
                  {category.icon}
                </span>
                <h3 className="mt-4 font-serif text-xl">{category.name}</h3>
                <p className="mt-2 text-xs text-[#898076]">
                  {category.subtitle}
                </p>
                <span className="mt-5 inline-block text-[10px] tracking-[0.15em] group-hover:text-[#a78d70]">
                  EXPLORE →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <FeaturedProducts />

      {/* Brand statement */}
      <section className="bg-[#e9e1d7] px-6 py-20 text-center sm:py-28">
        <span className="text-[10px] tracking-[0.25em] text-[#907b65]">
          THE ÉLORA PHILOSOPHY
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-snug sm:text-5xl">
          Your beauty. Your ritual.
          <span className="block italic text-[#9b8065]">
            Your own kind of glow.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#746b61]">
          We believe beauty is found in the little things. Discover products
          that inspire confidence, self-care and a moment just for you.
        </p>
        <a
          href="/nosotros"
          className="mt-8 inline-block border border-[#766653] px-8 py-4 text-[10px] tracking-[0.18em] transition hover:bg-[#766653] hover:text-white"
        >
          OUR STORY
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#29251f] px-6 py-12 text-[#f5f0e9] sm:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link href="/" className="font-serif text-3xl tracking-[0.16em]">
              ÉLORA.
            </Link>
            <p className="mt-3 text-xs text-[#c1b5a7]">
              Beauty begins with you.
            </p>
          </div>
          <div className="flex gap-7 text-[10px] tracking-widest">
            <a href="/catalogo" className="hover:text-[#c6aa88]">SHOP</a>
            <a href="/nosotros" className="hover:text-[#c6aa88]">ABOUT</a>
            <a href="mailto:hello@elorabeauty.com" className="hover:text-[#c6aa88]">CONTACT</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1400px] border-t border-white/15 pt-6 text-center text-[10px] text-[#b6aa9c]">
          © 2026 ÉLORA Beauty. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
