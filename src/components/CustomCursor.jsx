import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotWrapperRef = useRef(null);
  const dotInnerRef = useRef(null);
  const ringWrapperRef = useRef(null);
  const ringInnerRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Enable exclusively on devices with a fine pointer (mouse / precision trackpad)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!hasFinePointer || (isTouchDevice && window.innerWidth < 1024)) {
      return;
    }

    setIsEnabled(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;
    let isHovering = false;
    let isHidden = false;
    let animationFrameId = null;

    // Follow speed: instant if prefers reduced motion, smooth lerp otherwise
    const lerpFactor = prefersReducedMotion ? 1 : 0.18;

    const setCursorOpacity = (opacity) => {
      if (dotWrapperRef.current) dotWrapperRef.current.style.opacity = opacity;
      if (ringWrapperRef.current) ringWrapperRef.current.style.opacity = opacity;
    };

    const applyHoverState = () => {
      if (ringInnerRef.current) {
        ringInnerRef.current.style.transform = "scale(1.35)";
        ringInnerRef.current.style.borderColor = "rgba(6, 182, 212, 0.75)";
        ringInnerRef.current.style.backgroundColor = "rgba(6, 182, 212, 0.07)";
        ringInnerRef.current.style.boxShadow =
          "0 0 22px rgba(6, 182, 212, 0.4), inset 0 0 12px rgba(6, 182, 212, 0.1)";
      }
      if (dotInnerRef.current) {
        dotInnerRef.current.style.transform = "scale(1.2)";
        dotInnerRef.current.style.backgroundColor = "#38bdf8";
        dotInnerRef.current.style.boxShadow =
          "0 0 12px rgba(56, 189, 248, 0.95)";
      }
    };

    const removeHoverState = () => {
      if (ringInnerRef.current) {
        ringInnerRef.current.style.transform = "scale(1)";
        ringInnerRef.current.style.borderColor = "rgba(6, 182, 212, 0.4)";
        ringInnerRef.current.style.backgroundColor = "rgba(6, 182, 212, 0.02)";
        ringInnerRef.current.style.boxShadow =
          "0 0 14px rgba(6, 182, 212, 0.22), inset 0 0 8px rgba(6, 182, 212, 0.04)";
      }
      if (dotInnerRef.current) {
        dotInnerRef.current.style.transform = "scale(1)";
        dotInnerRef.current.style.backgroundColor = "#06b6d4";
        dotInnerRef.current.style.boxShadow =
          "0 0 8px rgba(6, 182, 212, 0.85)";
      }
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        setCursorOpacity("1");
      }

      if (dotWrapperRef.current) {
        dotWrapperRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target;

      // Keep native cursor for text fields, selects, editable areas, and disabled items
      const isNativeTarget =
        target &&
        Boolean(
          target.closest(
            'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"], :disabled, [disabled], .cursor-not-allowed'
          )
        );

      if (isNativeTarget) {
        if (!isHidden) {
          isHidden = true;
          setCursorOpacity("0");
        }
      } else {
        if (isHidden) {
          isHidden = false;
          setCursorOpacity("1");
        }
      }

      // Detect buttons, links, and clickable elements
      const isInteractive =
        target &&
        Boolean(
          target.closest(
            'a, button, [role="button"], input[type="submit"], input[type="button"], label, .clickable, [tabindex="0"]'
          )
        );

      if (isInteractive && !isHovering) {
        isHovering = true;
        applyHoverState();
      } else if (!isInteractive && isHovering) {
        isHovering = false;
        removeHoverState();
      }
    };

    const onMouseLeave = () => {
      setCursorOpacity("0");
    };

    const onMouseEnter = () => {
      if (hasMoved && !isHidden) {
        setCursorOpacity("1");
      }
    };

    const render = () => {
      if (hasMoved) {
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;

        if (ringWrapperRef.current) {
          ringWrapperRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Outer delayed follower ring */}
      <div
        ref={ringWrapperRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform opacity-0 transition-opacity duration-200"
      >
        <div
          ref={ringInnerRef}
          className="-ml-[17px] -mt-[17px] w-[34px] h-[34px] rounded-full border border-cyan-400/40 bg-cyan-400/[0.02] shadow-[0_0_14px_rgba(6,182,212,0.22),inset_0_0_8px_rgba(6,182,212,0.04)] transition-all duration-200 ease-out will-change-transform"
        />
      </div>

      {/* Center precise glowing dot */}
      <div
        ref={dotWrapperRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform opacity-0 transition-opacity duration-150"
      >
        <div
          ref={dotInnerRef}
          className="-ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.85)] transition-all duration-150 ease-out will-change-transform"
        />
      </div>
    </div>
  );
}
