// src/app/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md border border-zinc-300" />
            <span className="text-sm font-semibold tracking-[0.2em]">OBV</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
            <a className="hover:text-zinc-900" href="#product">
              Product
            </a>
            <a className="hover:text-zinc-900" href="#details">
              Details
            </a>
            <a className="hover:text-zinc-900" href="#order">
              Inquiry
            </a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            견적 문의
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-zinc-500">
              OBV / STAINLESS SERIES
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              U-Form Stainless
              <br />
              Side Table
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-600">
              용접 없이 한 장의 금속을 레이저 컷 + 절곡으로 완성하는 U자 형태.
              헤어라인 결 방향과 모서리 디버링까지, 단순함을 끝까지 밀어붙인
              프로토타입입니다.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#order"
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                제작/견적 문의
              </a>
              <a
                href="#details"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                스펙 보기
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-zinc-600">
              <div className="rounded-2xl border border-zinc-200 p-3">
                <div className="font-semibold text-zinc-900">SUS304</div>
                <div className="mt-1">t=3.0</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-3">
                <div className="font-semibold text-zinc-900">Finish</div>
                <div className="mt-1">HL #4</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-3">
                <div className="font-semibold text-zinc-900">Bend</div>
                <div className="mt-1">90° ×2</div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                {/* 임시 경로: public/product.jpg 로 넣으면 바로 표시됨 */}
                <Image
                  src="/product.jpg"
                  alt="OBV U-form stainless side table"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">U-Form Side Table</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Minimal bend. Hairline grain direction controlled.
                  </p>
                </div>
                <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700">
                  Prototype 01
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full border border-zinc-200 bg-white/60 blur-[0.5px] md:block" />
            <div className="pointer-events-none absolute -top-8 -right-8 hidden h-36 w-36 rounded-full border border-zinc-200 bg-white/60 blur-[0.5px] md:block" />
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-sm font-semibold">Finish / 결 방향</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                외부면 HL(헤어라인) #4. 결 방향은 상판 700 방향(가로) 기준.
                보호필름 유지 요청.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-sm font-semibold">Edge / 안전</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                레이저 컷 단면 디버링 + C0.5~1.0 정도로 손 베임 방지.
                외관면은 가능한 균일하게 정리.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-sm font-semibold">One-piece 느낌</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                용접 없는 한 덩어리(절곡) 제작. 구조 보강 파이프 없이
                3t 절곡만으로 가능한지 제작성 확인.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
                SPEC
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Dimensions & Fabrication
              </h2>
            </div>
            <span className="hidden rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs text-zinc-700 md:inline-block">
              L700 × D500 × H400 (Finished)
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">Finished size</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <dt className="text-xs text-zinc-500">Length</dt>
                  <dd className="mt-1 font-semibold">700 mm</dd>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <dt className="text-xs text-zinc-500">Depth</dt>
                  <dd className="mt-1 font-semibold">500 mm</dd>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <dt className="text-xs text-zinc-500">Height</dt>
                  <dd className="mt-1 font-semibold">400 mm</dd>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <dt className="text-xs text-zinc-500">Material</dt>
                  <dd className="mt-1 font-semibold">SUS304 t=3.0</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">Cut & Bend note</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  전개(Flat): 1500 × 500 (mm)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  절곡: 90° DOWN ×2 (다리 방향)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  내부 R: 가능하면 R3(최소), 불가 시 최소 R 안내 요청
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  외부면 HL / 보호필름 유지 / 결 방향 700 방향
                </li>
              </ul>
              <p className="mt-4 text-xs text-zinc-500">
                ※ 실제 제작 가능 여부/최소 R/공차는 업체 공정 기준으로 최종 확인
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="order" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
                INQUIRY
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                제작/견적 문의 템플릿
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                아래 내용을 복사해서 업체 메일/문의폼에 붙여 넣으면 돼.
              </p>

              <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-800">
                <pre className="whitespace-pre-wrap leading-relaxed">
{`[제작 문의] SUS304 U자 사이드테이블 1EA (레이저 컷 + 절곡)

- 품명: U-Form Stainless Side Table (Prototype 01)
- 수량: 1EA
- 재질: SUS304 t=3.0
- 마감: HL(#4) / 외부면만 헤어라인 / 보호필름 유지 요청
- 결(Grain) 방향: 상판 700 방향(가로) 기준
- 완성 치수: L700 × D500 × H400 (mm)
- 전개(Flat): 1500 × 500 (mm)
- 절곡: 90° DOWN ×2
- 내부 R: 가능하면 R3(최소), 불가 시 가능한 최소 R 안내 요청
- 컷/단면: Deburr + C0.5~1.0 (손 베임 방지, 외관면 균일 정리)
- 기타: 용접 없이 절곡만으로 제작(보강 파이프 없이 가능 여부 확인 요청)

첨부: DXF(컷/절곡선), 참고 PDF(치수/메모)
총 견적(재료+레이저+절곡+마감), 납기, 픽업/배송 가능 여부 회신 부탁드립니다.`}
                </pre>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-sm font-semibold">다음 단계</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
                <li>사진 파일을 프로젝트에 넣어서 제품 이미지 띄우기</li>
                <li>색/폰트/레이아웃 OBV 느낌으로 더 미니멀하게 정리</li>
                <li>도메인 연결 & 공개 배포(Vercel)</li>
              </ol>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-600">
                지금은 <b>/product.jpg</b> 를 보여주게 되어있어.
                다음 메시지에서 네 사진을 진짜로 넣는 방법 바로 진행하자.
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#product"
                  className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  위로
                </a>
                <a
                  href="#details"
                  className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  스펙
                </a>
                <a
                  href="#order"
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  문의
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-14 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} OBV. Minimal objects for a clear life.
          </footer>
        </div>
      </section>
    </main>
  );
}