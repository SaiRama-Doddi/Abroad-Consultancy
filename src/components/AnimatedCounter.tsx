import { useEffect, useState, useRef } from "react";

export function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");
  const hasComma = value.includes(",");
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * numericValue);
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries && entries[0] && entries[0].isIntersecting) {
        window.requestAnimationFrame(step);
        if (observer) observer.disconnect();
      }
    };

    if (elementRef.current && !isNaN(numericValue)) {
      observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
      observer.observe(elementRef.current);
    } else {
      setCount(NaN);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [numericValue, duration]);

  if (isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  const formatNumber = (num: number) => {
    if (hasComma) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return <span ref={elementRef}>{formatNumber(count)}{suffix}</span>;
}
