import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Tech from "@/pages/Tech";
import Analyst from "@/pages/Analyst";

export default function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {/* Simple top nav toggle */}
      <div className="sticky top-0 z-50 flex items-center gap-2 p-3 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
        <Link
          to="/tech"
          className={`text-sm px-3 py-1 rounded-full ${
            pathname.startsWith("/tech")
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "border border-black/10 dark:border-white/10"
          }`}
        >
          Tech
        </Link>
        <Link
          to="/analyst"
          className={`text-sm px-3 py-1 rounded-full ${
            pathname.startsWith("/analyst")
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "border border-black/10 dark:border-white/10"
          }`}
        >
          Analyst
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/analyst" replace />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/analyst" element={<Analyst />} />
        <Route path="*" element={<Navigate to="/tech" replace />} />
      </Routes>
    </div>
  );
}
