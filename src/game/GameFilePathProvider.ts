import Provider from '../Provider';

export default class GameFilePathProvider implements Provider<string> {
  constructor(private gameFilePath: string) {}

  get(): string {
    return this.gameFilePath;
  }
}
