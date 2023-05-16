import { useEffect, useRef } from "react";

// Custom hook that takes in two arguments, a callback function that will be executed at each interval, and 'delay' which is the time interval between each execution of the callback function. The delay value can be a number or null.
export function useInterval(callback: () => void, delay: number | null) {
  // We use the `useRef` hook to create a reference to the callback function. This reference is mutable and we initialize it's `.current` value with null.
  const savedCallback = useRef<null | (() => void)>(null);

  // We
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //
  useEffect(() => {
    function tick(): void {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
