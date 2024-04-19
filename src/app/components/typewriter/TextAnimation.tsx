'use client';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import CursorBlinker from './Cursorblink';
import LoopTextAnim from './TextLoopAnimation';

export default function TextAnim() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const baseText = "HI, ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      duration: 2,
      ease: 'easeInOut',
      onComplete: () => {
        setTextAnimationComplete(true);
      },
    });
    if (isInView) {
      controls.play();
    } else {
      controls.stop();
    }
    return () => {
      controls.stop();
    };
  }, [count, isInView]);

  return (
    <span className="text-white">
      <motion.span className="text-display-sm" ref={ref}>
        {displayText}
      </motion.span>
      <LoopTextAnim textAnimationComplete={textAnimationComplete} />
      <CursorBlinker />
    </span>
  );
}
