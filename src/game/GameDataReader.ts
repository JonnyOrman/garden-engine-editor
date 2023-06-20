import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import Provider from '../Provider';
import Reader from '../Reader';
import { gameFilePathProvider } from './GameFilePathProvider';

export default class GameDataReader implements Reader<string> {
  constructor(private gameFilePathProvider: Provider<string>) {}

  async read(): Promise<string> {
    return await readTextFile(this.gameFilePathProvider.get(), {
      dir: BaseDirectory.AppConfig,
    });
  }
}

export const gameJsonReader = new GameDataReader(gameFilePathProvider);
