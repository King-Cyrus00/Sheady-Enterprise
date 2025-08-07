export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-[#1b5059]/10 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
