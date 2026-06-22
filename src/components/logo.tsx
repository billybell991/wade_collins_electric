import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Wade Collins Electric — Home">
      <Mark />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-mono text-[0.65rem] tracking-[0.22em] text-dim uppercase">
            Wade Collins
          </span>
          <span className="text-[1.05rem] font-semibold tracking-tight text-white mt-1">
            ELECTRIC<span className="text-accent">.</span>
          </span>
        </span>
      )}
    </Link>
  );
}

export function Mark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Frame + corner ticks */}
      <rect x="1" y="1" width="38" height="38" stroke="#2a2a2a" strokeWidth="1" />
      <path d="M1 5V1H5" stroke="#f59e0b" strokeWidth="1" />
      <path d="M39 35V39H35" stroke="#f59e0b" strokeWidth="1" />
      {/* W-bolt: clean integrated W where central stroke reads as lightning */}
      <path
        d="M5 8 L13 32 L20 14 L27 32 L35 8 L28 8 L24 20 L20 8 L16 20 L12 8 Z"
        fill="#f59e0b"
      />
    </svg>
  );
}
