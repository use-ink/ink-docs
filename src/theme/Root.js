import React, { useEffect, useRef, useMemo } from "react";

// Default implementation, that you can customize
export default function Root({ children }) {
  const cursorRef = useRef(null);
  const honks = useMemo(() => {
    return [
      new Audio("/img/lambo/honk1.mp3"),
      new Audio("/img/lambo/honk2.mp3"),
    ];
  }, []);

  const engine = useMemo(() => {
    return new Audio("/img/lambo/engine2.mp3");
  }, []);

  const lastPlayed = useRef(Date.now());
  const timer = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + 35 + "px";
      cursorRef.current.style.top = e.clientY + 50 + "px";
    };

    document.addEventListener("mousemove", updateCursorPosition);

    const onClick = () => {
      Math.random() > 0.5 ? honks[0].play() : honks[1].play();
    };

    document.addEventListener("click", onClick);

    const onScroll = () => {
      engine.play();
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(function () {
        engine.pause();
      }, 300);
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("click", playSound);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {children}
      <div ref={cursorRef} className="cursor">
        <img src="/img/lambo/cursor.png" alt="cursor" />
      </div>
    </>
  );
}
