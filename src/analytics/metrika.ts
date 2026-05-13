declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

export const METRIKA = {
  counterId: 109181994,
  goals: {
    phoneClick: "phone_click",
    telegramClick: "telegram_click",
    leadSubmit: "lead_submit",
  },
} as const;

function safeYm() {
  return typeof window !== "undefined" ? window.ym : undefined;
}

export function reachGoal(goal: string, params?: Record<string, unknown>) {
  const ym = safeYm();
  if (!ym) return;
  ym(METRIKA.counterId, "reachGoal", goal, params);
}

export function installAutoGoalTracking() {
  if (typeof document === "undefined") return;

  // Avoid double-install in StrictMode/dev.
  const marker = "__koda_metrika_installed__";
  if ((window as any)[marker]) return;
  (window as any)[marker] = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href") || "";
      if (!href) return;

      // Phone goal
      if (href.startsWith("tel:")) {
        reachGoal(METRIKA.goals.phoneClick, { href });
        return;
      }

      // Telegram goal (t.me links)
      // - covers https://t.me/..., tg://..., and raw t.me/... if someone uses it
      if (
        href.includes("t.me/") ||
        href.startsWith("tg://") ||
        href.startsWith("https://t.me/") ||
        href.startsWith("http://t.me/")
      ) {
        reachGoal(METRIKA.goals.telegramClick, { href });
      }
    },
    { capture: true }
  );
}

