import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface LoopTextAnimProps {
  textAnimationComplete: boolean;
}

const LoopTextAnim: React.FC<LoopTextAnimProps> = ({
  textAnimationComplete,
}) => {
  const textIndex = useMotionValue(0);
  const texts = ['I AM SIMON GUMMESSON'];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    if (textAnimationComplete) {
      animate(count, 60, {
        type: 'tween',
        duration: 2,
        ease: 'easeIn',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1,
        onUpdate(latest) {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (textIndex.get() === texts.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        },
      });
    }
  }, [count, textAnimationComplete, textIndex, texts.length, updatedThisRound]);
  return (
    <motion.span className="inline text-display-sm">{displayText}</motion.span>
  );
};

export default LoopTextAnim;
