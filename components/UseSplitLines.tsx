import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import splitText from "@djkramnik/split-text";

export const useSplitLines = (ref: HTMLElement) => {
  const cleanup = useRef<null | (() => void)>();
  const lastRenderId = useRef(0);
  const [split, setSplit] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    setSplit(false);
    if (!ref) {
      lastRenderId.current += 1;
      return;
    }

    const newRenderId = lastRenderId.current + 1;
    lastRenderId.current = newRenderId;

    splitText(ref).then((clean) => {
      if (lastRenderId.current === newRenderId) {
        cleanup.current = clean;
        setSplit(true);
      } else {
        clean();
      }
    });

    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [ref, width]);

  return split;
};
