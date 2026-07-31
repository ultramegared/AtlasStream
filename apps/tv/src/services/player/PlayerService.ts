/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: PlayerService.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English
 *   - Español
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Player service abstraction.
 * Provides a unified API for media playback without depending
 * on a specific playback engine.
 * ----------------------------------------------------------------
 */

export interface MediaSource {
  uri: string;
  title?: string;
  subtitle?: string;
  artwork?: string;
}

export interface PlayerState {
  playing: boolean;
  position: number;
  duration: number;
  buffered: number;
}

export interface PlayerAdapter {
  load(source: MediaSource): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  seek(position: number): Promise<void>;
  getState(): Promise<PlayerState>;
}

class PlayerService {
  private adapter: PlayerAdapter | null = null;

  public configure(adapter: PlayerAdapter): void {
    this.adapter = adapter;
  }

  private getAdapter(): PlayerAdapter {
    if (this.adapter === null) {
      throw new Error(
        'Player adapter has not been configured.',
      );
    }

    return this.adapter;
  }

  public load(source: MediaSource): Promise<void> {
    return this.getAdapter().load(source);
  }

  public play(): Promise<void> {
    return this.getAdapter().play();
  }

  public pause(): Promise<void> {
    return this.getAdapter().pause();
  }

  public stop(): Promise<void> {
    return this.getAdapter().stop();
  }

  public seek(position: number): Promise<void> {
    return this.getAdapter().seek(position);
  }

  public getState(): Promise<PlayerState> {
    return this.getAdapter().getState();
  }
}

const playerService = new PlayerService();

export default playerService;