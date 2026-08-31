import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand--light" : ""}`} aria-label="Codeylon — الصفحة الرئيسية">
      <span className="brand__mark" aria-hidden="true">
        <Image src="/brand/codeylon-mark.svg" alt="" fill unoptimized priority />
      </span>
      <span className="brand__word" dir="ltr">Codeylon</span>
    </Link>
  );
}
