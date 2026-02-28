import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
      {/* Top Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full border border-black/10 bg-white" />
          <span className="text-sm font-medium tracking-wide">OBV</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-black/70 md:flex">
          <Link href="/product" className="hover:text-black">
            Product
          </Link>
          <Link href="/product" className="hover:text-black">
            Details
          </Link>
          <Link href="/product" className="hover:text-black">
            Inquiry
          </Link>
        </nav>

        <Link
          href="/product"
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm hover:border-black/20"
        >
          View
        </Link>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-black/50">
              OBV / STAINLESS SERIES
            </p>

            <h1 className="mt-4 text-5xl font-light leading-tight tracking-tight">
              U-Form Stainless <br /> Side Table
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-black/65">
              원형 없이 한 장의 스테인리스 판을 구조적으로 완성하는 U자 형태.
              헤어라인 마감의 결을 그대로 드러내는 단순한 프로토타입입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product"
                className="rounded-full bg-black px-5 py-2.5 text-sm text-white hover:opacity-90"
              >
                제품 상세보기
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm hover:border-black/20"
              >
                스펙 보기
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/50">Material</p>
                <p className="mt-1 text-sm font-medium">SUS304</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/50">Finish</p>
                <p className="mt-1 text-sm font-medium">Hairline</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/50">Type</p>
                <p className="mt-1 text-sm font-medium">Prototype</p>
              </div>
            </div>
          </div>

          {/* Product Card */}
          <Link
            href="/product"
            className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-black/20"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f3f3f3]">
              <Image
                src="/products/u-form-side-table.png"
                alt="U-Form Stainless Side Table"
                fill
                className="object-contain p-6 transition group-hover:scale-[1.01]"
                priority
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">U-Form Side Table</p>
                <p className="mt-1 text-xs text-black/50">
                  Minimal bend. Hairline grain. Clean.
                </p>
              </div>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70">
                View →
              </span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}