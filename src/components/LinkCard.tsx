import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-white/40 bg-white/20 px-6 py-5 text-white shadow-[0_8px_32px_rgba(15,60,90,0.18)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.04] hover:-rotate-1 hover:border-white/80 hover:bg-white/30 hover:shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_20px_50px_rgba(14,165,233,0.55),0_0_80px_rgba(45,212,191,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      {/* 호버 시 카드를 가로지르는 빛줄기 */}
      <span
        aria-hidden
        className="link-card-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0"
      />
      {/* 호버 시 흐르는 무지갯빛 테두리 광 */}
      <span
        aria-hidden
        className="link-card-glow pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        aria-hidden
        className="link-card-emoji relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/30 text-2xl shadow-inner transition-transform duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:rotate-[20deg] group-hover:scale-125 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
      >
        {link.emoji}
      </span>
      <span className="relative flex-1 text-center text-lg font-semibold tracking-tight drop-shadow-sm">
        {link.title}
      </span>
      <span
        aria-hidden
        className="relative w-11 text-right text-xl opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
      >
        →
      </span>
    </a>
  );
}
