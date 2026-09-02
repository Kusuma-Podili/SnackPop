export class ScreenJuice {
  private static targetElement: HTMLElement | null = null;
  private static trauma: number = 0;
  private static isShaking: boolean = false;

  public static attach(element: HTMLElement): void {
    this.targetElement = element;
  }

  /**
   * Adds trauma (0.0 to 1.0) to initiate screen shake.
   */
  public static addTrauma(amount: number): void {
    this.trauma = Math.min(1.0, this.trauma + amount);
    if (!this.isShaking) {
      this.isShaking = true;
      this.updateShake();
    }
  }

  /**
   * Micro-pause (hit-stop) freeze frame effect.
   */
  public static hitStop(durationMs: number = 45): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, durationMs));
  }

  private static updateShake(): void {
    if (!this.targetElement) {
      this.isShaking = false;
      return;
    }

    if (this.trauma > 0.01) {
      const shakePower = Math.pow(this.trauma, 2);
      const maxOffset = 14;
      const maxAngle = 2.5;

      const offsetX = (Math.random() * 2 - 1) * maxOffset * shakePower;
      const offsetY = (Math.random() * 2 - 1) * maxOffset * shakePower;
      const angle = (Math.random() * 2 - 1) * maxAngle * shakePower;

      this.targetElement.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${angle}deg)`;

      // Decay trauma
      this.trauma = Math.max(0, this.trauma - 0.05);
      requestAnimationFrame(() => this.updateShake());
    } else {
      this.trauma = 0;
      this.targetElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
      this.isShaking = false;
    }
  }
}
