import { GridPosition } from '../engine/types';

export class TileAnimator {
  public static animateSwap(
    elementA: HTMLElement,
    elementB: HTMLElement,
    durationMs: number = 200
  ): Promise<void> {
    return new Promise(resolve => {
      const rectA = elementA.getBoundingClientRect();
      const rectB = elementB.getBoundingClientRect();

      const dxA = rectB.left - rectA.left;
      const dyA = rectB.top - rectA.top;

      const dxB = rectA.left - rectB.left;
      const dyB = rectA.top - rectB.top;

      elementA.style.transition = `transform ${durationMs}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
      elementB.style.transition = `transform ${durationMs}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;

      elementA.style.transform = `translate(${dxA}px, ${dyA}px)`;
      elementB.style.transform = `translate(${dxB}px, ${dyB}px)`;

      setTimeout(() => {
        elementA.style.transition = '';
        elementB.style.transition = '';
        elementA.style.transform = '';
        elementB.style.transform = '';
        resolve();
      }, durationMs + 20);
    });
  }

  public static animateTileClear(element: HTMLElement, durationMs: number = 240): Promise<void> {
    return new Promise(resolve => {
      element.style.transition = `transform ${durationMs}ms ease-in, opacity ${durationMs}ms ease-in`;
      element.style.transform = 'scale(1.35) rotate(15deg)';
      element.style.opacity = '0';

      setTimeout(() => {
        resolve();
      }, durationMs);
    });
  }

  public static animateDrop(element: HTMLElement, rowsDropped: number, durationMs: number = 250): Promise<void> {
    return new Promise(resolve => {
      const dropDistance = rowsDropped * 65; // Approx px per cell
      element.style.transform = `translateY(-${dropDistance}px)`;
      element.style.transition = 'none';

      requestAnimationFrame(() => {
        element.style.transition = `transform ${durationMs}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
        element.style.transform = 'translateY(0px)';

        setTimeout(() => {
          element.style.transition = '';
          element.style.transform = '';
          resolve();
        }, durationMs + 10);
      });
    });
  }
}
