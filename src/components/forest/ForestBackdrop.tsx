import { useEffect, useRef } from 'react';
import room from '@/assets/images/Комната.png';
import distantForest from '@/assets/images/силуэтДальний.jpg';
import middleForest from '@/assets/images/силуэтСредний.jpg';
import workspace from '@/assets/images/рабочее_место.jpg';
import styles from './ForestBackdrop.module.scss';

const sceneAnchors = ['home', 'about', 'expertise', 'writing', 'contact'];

const ForestBackdrop = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = sceneRef.current;
    if (!stage) return;

    const frames = Array.from(
      stage.querySelectorAll<HTMLElement>('[data-scene-frame]'),
    );
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameRequest = 0;

    const updateScene = () => {
      cancelAnimationFrame(frameRequest);
      frameRequest = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const stops = sceneAnchors.map((id) => {
          const anchor = document.getElementById(id);
          return anchor
            ? anchor.getBoundingClientRect().top + scrollY
            : Number.POSITIVE_INFINITY;
        });

        let sceneProgress = 0;
        for (let index = 0; index < stops.length - 1; index += 1) {
          if (scrollY <= stops[index + 1]) {
            const distance = Math.max(1, stops[index + 1] - stops[index]);
            sceneProgress =
              index +
              Math.max(0, Math.min(1, (scrollY - stops[index]) / distance));
            break;
          }
          sceneProgress = index + 1;
        }

        frames.forEach((layer, index) => {
          const opacity = Math.max(0, 1 - Math.abs(sceneProgress - index));
          layer.style.setProperty('--frame-opacity', opacity.toFixed(3));

          const depth = [0.22, 0.18, 0.12, 0.08, 0.16][index] ?? 0.1;
          const travel = reducedMotion.matches
            ? 0
            : Math.min(scrollY, window.innerHeight * 0.25) * depth;
          layer.style.setProperty('--frame-shift', `${travel.toFixed(1)}px`);
        });
      });
    };

    updateScene();
    window.addEventListener('scroll', updateScene, { passive: true });
    window.addEventListener('resize', updateScene);
    reducedMotion.addEventListener('change', updateScene);

    return () => {
      cancelAnimationFrame(frameRequest);
      window.removeEventListener('scroll', updateScene);
      window.removeEventListener('resize', updateScene);
      reducedMotion.removeEventListener('change', updateScene);
    };
  }, []);

  return (
    <div className={styles.backdrop} ref={sceneRef} aria-hidden="true">
      <div
        className={styles.frame}
        data-scene-frame
        style={{ backgroundImage: `url("${workspace}")` }}
      />
      <div
        className={styles.frame}
        data-scene-frame
        style={{ backgroundImage: `url("${room}")` }}
      />
      <div
        className={styles.frame}
        data-scene-frame
        style={{ backgroundImage: `url("${middleForest}")` }}
      />
      <div
        className={styles.frame}
        data-scene-frame
        style={{ backgroundImage: `url("${distantForest}")` }}
      />
      <div
        className={styles.frame}
        data-scene-frame
        style={{ backgroundImage: `url("${room}")` }}
      />
      <div className={styles.atmosphere} />
    </div>
  );
};

export default ForestBackdrop;
