export function ArrowIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg className={direction === "right" ? "icon-flip" : ""} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
