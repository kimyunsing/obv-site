import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 py-20">
        {/* Top nav */}
        <header className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium tracking-widest">OBV</div>
          </div>

          <nav className="flex items-center gap-7 text-sm text-gray-600">
            <Link href="/product" className="hover:text-black transition">
              Product
            </Link>
            <a href="#details" className="hover:text-black transition">
              Details
            </a>
            <a href="#inquiry" className="hover:text-black transition">
              Inquiry
            </a>

            <a
              href="#download"
              className="ml-2 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs text-gray-700 hover:text-black hover:border-gray-400 transition"
            >
              제작 문의
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500 mb-4">
              OBV / STAINLESS SERIES
            </p>

            <h1 className="text-5xl font-light tracking-tight leading-tight mb-6">
              U-Form Stainless <br />
              Side Table
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
              원형 없이 한 장의 스틸을 접어 구조적으로 완성하는 U자 형태.
              헤어라인 마감의 결을 그대로 드러내는 단순한 프로토타입.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm hover:opacity-90 transition"
              >
                제품/상세 보기
              </Link>

              <a
                href="#inquiry"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-800 hover:border-gray-400 transition"
              >
                문의하기
              </a>
            </div>
          </div>

          {/* Preview card */}
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

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-700">Prototype 01</div>
              <div className="text-xs text-gray-500">SUS304 / Hairline</div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section id="details" className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-xs tracking-widest text-gray-500 mb-2">
                MATERIAL
              </div>
              <div className="text-lg font-medium">SUS304</div>
              <p className="text-sm text-gray-600 mt-2">
                스테인리스 고유의 결을 살리는 방향성 마감.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-xs tracking-widest text-gray-500 mb-2">
                FINISH
              </div>
              <div className="text-lg font-medium">HL #4</div>
              <p className="text-sm text-gray-600 mt-2">
                빛에 따라 결이 조용히 드러나는 헤어라인.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-xs tracking-widest text-gray-500 mb-2">
                FORM
              </div>
              <div className="text-lg font-medium">Bend / One-piece</div>
              <p className="text-sm text-gray-600 mt-2">
                한 장의 판재를 접어 구조를 만드는 최소한의 형태.
              </p>
            </div>
          </div>
        </section>

        {/* Inquiry */}
        <section id="inquiry" className="mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-lg font-medium">문의</div>
              <p className="text-sm text-gray-600 mt-1">
                제작/주문/전시 협업 관련 메시지를 남겨주세요.
              </p>
            </div>

            <a
              href="mailto:hello@obv.studio"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm hover:opacity-90 transition"
            >
              hello@obv.studio
            </a>
          </div>
        </section>

        <footer className="mt-16 text-xs text-gray-400">
          © {new Date().getFullYear()} OBV. All rights reserved.
        </footer>
      </div>
    </main>
  );
}import Link from "next/link";
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