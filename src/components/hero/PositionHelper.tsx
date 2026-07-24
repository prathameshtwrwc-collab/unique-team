import { useState, useRef, useCallback, useEffect } from "react";

type ResizeDir = "se" | "sw" | "ne" | "nw" | null;

export function PositionHelper({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ bottom: 200, right: 80 });
  const [size, setSize] = useState({ w: 250, h: 280 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState<ResizeDir>(null);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const captureRect = useCallback(() => {
    if (!panelRef.current || !containerRef.current) return;
    const p = panelRef.current.getBoundingClientRect();
    const c = containerRef.current.getBoundingClientRect();
    setPos({ bottom: Math.round(c.bottom - p.bottom), right: Math.round(c.right - p.right) });
    setSize({ w: Math.round(p.width), h: Math.round(p.height) });
  }, []);

  useEffect(() => {
    if (!active) return;
    captureRect();
    window.addEventListener("resize", captureRect);
    return () => window.removeEventListener("resize", captureRect);
  }, [active, captureRect]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!active) return;
    e.preventDefault();
    setDragging(true);
    setStart({ x: e.clientX, y: e.clientY });
  };

  const handleResizeStart = (dir: ResizeDir) => (e: React.MouseEvent) => {
    if (!active) return;
    e.preventDefault();
    e.stopPropagation();
    setResizing(dir);
    setStart({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!dragging && !resizing) return;

    const handleMove = (e: MouseEvent) => {
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;

      if (dragging) {
        setPos((p) => ({
          bottom: p.bottom - dy,
          right: p.right - dx,
        }));
      }

      if (resizing === "se") {
        setSize((s) => ({ w: Math.max(180, s.w + dx), h: Math.max(200, s.h + dy) }));
      }

      setStart({ x: e.clientX, y: e.clientY });
    };

    const handleUp = () => {
      setDragging(false);
      setResizing(null);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [dragging, resizing, start]);

  const formatClamp = (px: number, side: "bottom" | "right") => {
    const vwPct = Math.round((px / window.innerWidth) * 100 * 10) / 10;
    if (side === "bottom") {
      const vhPct = Math.round((px / window.innerHeight) * 100 * 10) / 10;
      return `clamp(${Math.min(px, 20)}px, ${vhPct}vh, ${Math.max(px, 60)}px)`;
    }
    return `clamp(${Math.min(px, 10)}px, ${vwPct}vw, ${Math.max(px, 40)}px)`;
  };

  const cssBottom = formatClamp(pos.bottom, "bottom");
  const cssRight = formatClamp(pos.right, "right");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
  };

  const handleStyle = !active
    ? undefined
    : {
        position: "absolute" as const,
        bottom: pos.bottom,
        right: pos.right,
        width: size.w,
        zIndex: 999,
        cursor: "grab" as const,
      };

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: active ? 400 : undefined }}>
      <div ref={panelRef} onMouseDown={handleMouseDown} style={handleStyle}>
        {children}

        {/* Resize handle SE */}
        {active && (
          <>
            <div
              onMouseDown={handleResizeStart("se")}
              className="absolute -bottom-1.5 -right-1.5 z-20 h-4 w-4 cursor-se-resize rounded-full border-2 border-white bg-plum shadow-[0_2px_8px_rgba(46,21,87,0.3)]"
            />
            <div className="absolute inset-0 -bottom-1 -left-1 -right-1 -top-1 rounded-[20px] border-2 border-dashed border-purple/40 pointer-events-none" />
          </>
        )}
      </div>

      {active && dragging && (
        <div className="fixed inset-0 z-[998]" style={{ cursor: "grabbing" }} />
      )}

      <button
        type="button"
        onClick={() => setActive((a) => !a)}
        className={`fixed right-4 z-[1000] rounded-lg px-3 py-1.5 text-xs font-semibold shadow-lg transition-all ${
          active
            ? "top-16 bg-red-600 text-white"
            : "top-4 bg-plum text-white/90 hover:bg-purple"
        }`}
      >
        {active ? "Exit Position" : "Position Card"}
      </button>

      {active && (
        <div className="fixed bottom-4 right-4 z-[1000] min-w-[280px] rounded-xl border border-[rgba(46,21,87,0.15)] bg-white p-4 shadow-[0_16px_48px_rgba(46,21,87,0.18)]">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-muted">
            Card Position & Size
          </p>
          <div className="space-y-1 text-[13px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-ink-soft">bottom:</span>
              <span className="font-mono font-semibold text-plum">{pos.bottom}px</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-ink-soft">right:</span>
              <span className="font-mono font-semibold text-plum">{pos.right}px</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-ink-soft">width:</span>
              <span className="font-mono font-semibold text-plum">{size.w}px</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-ink-soft">height:</span>
              <span className="font-mono font-semibold text-plum">{size.h}px</span>
            </div>
            <div className="my-2 border-t border-[rgba(46,21,87,0.1)]" />
            <div className="flex flex-col gap-1">
              <p className="text-[10px] uppercase tracking-[0.1em] text-ink-muted">CSS clamp values</p>
              <button type="button" onClick={() => copyToClipboard(`bottom: ${cssBottom};`)}
                className="group flex items-center justify-between rounded-md bg-lilac-pale px-2 py-1.5 text-left font-mono text-[11px] text-plum hover:bg-lilac"
              >
                <span>bottom: {cssBottom};</span>
                <span className="ml-2 shrink-0 text-[9px] uppercase tracking-wider text-gold-deep opacity-0 group-hover:opacity-100">copy</span>
              </button>
              <button type="button" onClick={() => copyToClipboard(`right: ${cssRight};`)}
                className="group flex items-center justify-between rounded-md bg-lilac-pale px-2 py-1.5 text-left font-mono text-[11px] text-plum hover:bg-lilac"
              >
                <span>right: {cssRight};</span>
                <span className="ml-2 shrink-0 text-[9px] uppercase tracking-wider text-gold-deep opacity-0 group-hover:opacity-100">copy</span>
              </button>
              <button type="button" onClick={() => copyToClipboard(`width: ${size.w}px;\nheight: ${size.h}px;`)}
                className="group flex items-center justify-between rounded-md bg-lilac-pale px-2 py-1.5 text-left font-mono text-[11px] text-plum hover:bg-lilac"
              >
                <span>width: {size.w}px &nbsp; height: {size.h}px</span>
                <span className="ml-2 shrink-0 text-[9px] uppercase tracking-wider text-gold-deep opacity-0 group-hover:opacity-100">copy</span>
              </button>
              <button type="button" onClick={() => copyToClipboard(`bottom: ${cssBottom};\nright: ${cssRight};\nwidth: ${size.w}px;\nheight: ${size.h}px;`)}
                className="mt-1 w-full rounded-md bg-plum py-1.5 text-[11px] font-semibold text-white hover:bg-purple transition-colors"
              >
                Copy All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
