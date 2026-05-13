import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { InfoCard } from "../content/infoCards";

const STORY_MS = 6500;

type Props = {
  open: boolean;
  startIndex: number;
  cards: InfoCard[];
  onClose: () => void;
};

export default function StoriesOverlay({ open, startIndex, cards, onClose }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (open) {
      setActiveIndex(Math.min(Math.max(0, startIndex), Math.max(0, cards.length - 1)));
    }
  }, [open, startIndex, cards.length]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i >= cards.length - 1) {
        setTimeout(onClose, 0);
        return i;
      }
      return i + 1;
    });
  }, [cards.length, onClose]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i <= 0 ? 0 : i - 1));
  }, []);

  useEffect(() => {
    if (!open || cards.length === 0 || reducedMotion) return;
    const t = setTimeout(() => {
      if (activeIndex >= cards.length - 1) onClose();
      else setActiveIndex((i) => i + 1);
    }, STORY_MS);
    return () => clearTimeout(t);
  }, [open, activeIndex, cards.length, onClose, reducedMotion]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goNext, goPrev]);

  if (!open || typeof document === "undefined") return null;

  const current = cards[activeIndex];

  const node = (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Карточки студии"
      style={{
        paddingTop: "max(12px, env(safe-area-inset-top))",
        paddingBottom: "max(12px, env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex shrink-0 gap-1.5 px-3 pt-1">
        {cards.map((c, i) => (
          <div key={c.id} className="h-1 min-h-1 flex-1 overflow-hidden rounded-full bg-white/25">
            {i < activeIndex ? (
              <div className="h-full w-full bg-white" />
            ) : i === activeIndex ? (
              <div
                key={`fill-${activeIndex}`}
                className={
                  reducedMotion
                    ? "h-full w-full origin-left bg-white"
                    : "koda-story-progress h-full w-full origin-left bg-white"
                }
              />
            ) : (
              <div className="h-full w-0 bg-white" />
            )}
          </div>
        ))}
      </div>

      <div className="flex shrink-0 items-center justify-between gap-3 px-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase tracking-widest text-white/50">
            {current?.subtitle ?? "KODA"}
          </p>
          <p className="truncate text-base font-bold text-white">{current?.title}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white backdrop-blur-sm active:bg-white/20"
          aria-label="Закрыть"
        >
          ×
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1 touch-pan-y px-2 pb-2"
        onTouchStart={(e) => {
          touchStartY.current = e.touches[0]?.clientY ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchStartY.current;
          touchStartY.current = null;
          if (start == null) return;
          const end = e.changedTouches[0]?.clientY ?? start;
          if (end - start > 72) onClose();
        }}
      >
        <div className="relative h-full min-h-[50vh] w-full overflow-hidden rounded-2xl bg-koda-graphite sm:min-h-0">
          {current ? (
            <img
              src={current.img}
              alt=""
              className="h-full w-full select-none object-contain object-center"
              draggable={false}
            />
          ) : null}

          <button
            type="button"
            className="absolute inset-y-0 left-0 z-10 w-[40%] max-w-[200px] cursor-w-resize border-0 bg-transparent p-0"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Предыдущая"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 z-10 w-[40%] max-w-[200px] cursor-e-resize border-0 bg-transparent p-0"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Следующая"
          />
        </div>
      </div>

      <p className="shrink-0 px-4 pb-1 text-center text-[11px] uppercase tracking-widest text-white/35">
        {reducedMotion
          ? "Слева назад · справа вперёд · свайп вниз — закрыть"
          : "Свайп вниз — закрыть · слева назад · справа вперёд"}
      </p>
    </div>
  );

  return createPortal(node, document.body);
}
