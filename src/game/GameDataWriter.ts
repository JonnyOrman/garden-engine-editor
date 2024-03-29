import { BaseDirectory, writeTextFile } from '@tauri-apps/api/fs';
import Provider from '../Provider';
import Writer from '../Writer';
import { gameFilePathProvider } from './GameFilePathProvider';

export default class GameJsonWriter implements Writer<string> {
  constructor(private gameFilePathProvider: Provider<string>) {}

  async write(gameData: string): Promise<void> {
    await writeTextFile(this.gameFilePathProvider.get(), gameData, {
      dir: BaseDirectory.AppConfig,
    });
  }
}

export const gameJsonWriter = new GameJsonWriter(gameFilePathProvider);
