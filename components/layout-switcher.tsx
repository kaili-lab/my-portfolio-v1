"use client";

type LayoutType = "split" | "bento" | "editorial";

const labels: Record<LayoutType, string> = {
  split: "A · Split-screen",
  bento: "B · Bento Grid",
  editorial: "C · Editorial",
};

export default function LayoutSwitcher({
  current,
  onChange,
}: {
  current: LayoutType;
  onChange: (layout: LayoutType) => void;
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1 rounded-full bg-neutral-900/90 p-1.5 backdrop-blur-md border border-white/10 shadow-2xl">
      {(Object.keys(labels) as LayoutType[]).map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            current === key
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {labels[key]}
        </button>
      ))}
    </div>
  );
}
