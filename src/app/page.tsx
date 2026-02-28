import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 py-20">
        
        <div className="mb-10">
          <p className="text-sm tracking-widest text-gray-500 mb-3">
            OBV / STAINLESS SERIES
          </p>

          <h1 className="text-5xl font-light tracking-tight mb-6">
            U-Form Stainless<br />Side Table
          </h1>

          <p className="text-gray-600 max-w-xl leading-relaxed">
            원형 없이 한 장의 스틸을 접어 구조적으로 완성하는 U자 형태.
            헤어라인 마감의 결을 그대로 드러내는 단순한 프로토타입.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm">
          <Image
            src="/products/u-form-side-table.png"
            alt="U-Form Stainless Side Table"
            width={1400}
            height={1000}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </main>
  );
}
