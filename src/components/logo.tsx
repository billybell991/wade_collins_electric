import Link from "next/link";
import { Zap } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-brand-dark p-2 text-brand-yellow rounded-lg outline outline-1 outline-brand-yellow/20 shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all">
        <Zap className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-none tracking-tight">
          WADE COLLINS
        </span>
        <span className="text-[0.65rem] font-bold text-brand-yellow tracking-[0.2em] uppercase">
          Electric
        </span>
      </div>
    </Link>
  );
}
