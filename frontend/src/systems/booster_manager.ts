import { GridBoard } from '../engine/board';
import { GridPosition, SpecialType } from '../engine/types';
import { SaveSystem } from './save_system';
import { GravityEngine } from '../engine/gravity';
import { MoveValidator } from '../engine/move_validator';
import { SoundFXEngine } from '../audio/synth';

export enum BoosterType {
  SPATULA = 'spatula',
  ROLLING_PIN = 'rollingPin',
  BLENDER = 'blender',
  EXTRA_MOVES = 'extraMoves',
  START_FLAVOR_BOMB = 'startFlavorBomb'
}

export class BoosterManager {
  public static getBoosterCount(type: BoosterType): number {
    const data = SaveSystem.load();
    return data.boosters[type] || 0;
  }

  public static useBooster(type: BoosterType): boolean {
    const data = SaveSystem.load();
    if ((data.boosters[type] || 0) <= 0) return false;

    data.boosters[type]--;
    SaveSystem.save(data);
    return true;
  }

  public static addBooster(type: BoosterType, count: number = 1): void {
    const data = SaveSystem.load();
    data.boosters[type] = (data.boosters[type] || 0) + count;
    SaveSystem.save(data);
  }

  /**
   * Chef's Spatula: Destroys a single designated tile or blocker without consuming a move.
   */
  public static applySpatula(board: GridBoard, targetPos: GridPosition): boolean {
    const tile = board.getTile(targetPos);
    if (!tile || tile.isHole) return false;

    SoundFXEngine.playBombExplosion();
    GravityEngine.resolveFullCascade(board, [targetPos]);
    return true;
  }

  /**
   * Rolling Pin: Obliterates an entire designated horizontal row.
   */
  public static applyRollingPin(board: GridBoard, row: number): boolean {
    if (row < 0 || row >= board.rows) return false;

    const rowPositions: GridPosition[] = [];
    for (let c = 0; c < board.cols; c++) {
      rowPositions.push({ row, col: c });
    }

    SoundFXEngine.playStripedBeam();
    GravityEngine.resolveFullCascade(board, rowPositions);
    return true;
  }

  /**
   * Blender: Shuffles the entire board layout.
   */
  public static applyBlender(board: GridBoard): boolean {
    SoundFXEngine.playSwap();
    return MoveValidator.shuffleBoard(board);
  }
}
