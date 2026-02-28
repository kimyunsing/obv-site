import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Top nav */}
        <header className="flex items-center justify-between mb-10">
          <Link href="/" className="text-sm font-medium tracking-widest">
            OBV
          </Link>

          <nav className="flex items-center gap-7 text-sm text-gray-600">
            <Link href="/product" className="text-black">
              Product
            </Link>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
              <Image
                src="/products/u-form-side-table.png"
                alt="U-Form Stainless Side Table"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500 mb-4">
              OBV / STAINLESS SERIES
            </p>

            <h1 className="text-4xl font-light tracking-tight mb-5">
              U-Form Stainless Side Table
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8">
              원형 없이 한 장의 스틸을 접어 완성하는 구조. 표면의 결(헤어라인)을
              숨기지 않고, 형태는 최대한 절제합니다.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Material</div>
                <div className="text-sm font-medium">SUS304</div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Finish</div>
                <div className="text-sm font-medium">HL #4</div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Process</div>
                <div className="text-sm font-medium">Bend / One-piece</div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Status</div>
                <div className="text-sm font-medium">Prototype 01</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@obv.studio"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm hover:opacity-90 transition"
              >
                제작 문의
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-800 hover:border-gray-400 transition"
              >
                홈으로
              </Link>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-xs text-gray-400">
          © {new Date().getFullYear()} OBV.
        </footer>
      </div>
    </main>
  );
}