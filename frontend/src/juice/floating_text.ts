export class FloatingTextManager {
  private static container: HTMLElement | null = null;

  public static attach(containerElement: HTMLElement): void {
    this.container = containerElement;
  }

  public static spawnScore(x: number, y: number, points: number): void {
    if (!this.container) return;

    const el = document.createElement('div');
    el.className = 'floating-score-text';
    el.textContent = `+${points}`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    this.container.appendChild(el);

    setTimeout(() => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }, 900);
  }

  public static spawnComboBanner(message: string, x?: number, y?: number): void {
    if (!this.container) return;

    const el = document.createElement('div');
    el.className = 'floating-combo-banner';
    el.textContent = message;

    if (x !== undefined && y !== undefined) {
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    } else {
      el.style.left = '50%';
      el.style.top = '40%';
      el.style.transform = 'translate(-50%, -50%)';
    }

    this.container.appendChild(el);

    setTimeout(() => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }, 1200);
  }
}
