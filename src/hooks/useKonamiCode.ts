import { useEffect, useCallback } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function useKonamiCode(onActivate: () => void) {
  const handler = useCallback(() => {
    let index = 0;
    const listener = (e: KeyboardEvent) => {
      if (e.key === KONAMI[index]) {
        index++;
        if (index === KONAMI.length) {
          onActivate();
          index = 0;
        }
      } else {
        index = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    return listener;
  }, [onActivate]);

  useEffect(() => {
    const listener = handler();
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [handler]);
}
