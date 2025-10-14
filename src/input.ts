export class InputManager {
  private pressedKeys: Set<string> = new Set();
  private justPressedKeys: Set<string> = new Set();

  constructor() {
    window.addEventListener('keydown', (e) => {
      const key = this.normalizeKey(e);
      if (!this.pressedKeys.has(key)) {
        this.justPressedKeys.add(key);
      }
      this.pressedKeys.add(key);
      // prevent scrolling with arrows/space
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        e.preventDefault();
      }
    }, { passive: false });

    window.addEventListener('keyup', (e) => {
      const key = this.normalizeKey(e);
      this.pressedKeys.delete(key);
    });
  }

  private normalizeKey(e: KeyboardEvent): string {
    if (e.code === 'Space') return 'Space';
    if (e.key === ' ') return 'Space';
    return e.key;
  }

  isDown(key: string): boolean {
    return this.pressedKeys.has(key);
  }

  wasPressed(key: string): boolean {
    return this.justPressedKeys.has(key);
  }

  consumePressed(key: string): boolean {
    const had = this.justPressedKeys.has(key);
    this.justPressedKeys.delete(key);
    return had;
  }

  endFrame(): void {
    this.justPressedKeys.clear();
  }

  getMoveAxis(): { x: number; z: number } {
    let x = 0, z = 0;
    if (this.isDown('a') || this.isDown('A') || this.isDown('ArrowLeft')) x -= 1;
    if (this.isDown('d') || this.isDown('D') || this.isDown('ArrowRight')) x += 1;
    if (this.isDown('w') || this.isDown('W') || this.isDown('ArrowUp')) z -= 1;
    if (this.isDown('s') || this.isDown('S') || this.isDown('ArrowDown')) z += 1;
    // normalize to length <= 1
    const len = Math.hypot(x, z);
    if (len > 1e-5) { x /= len; z /= len; }
    return { x, z };
  }
}
