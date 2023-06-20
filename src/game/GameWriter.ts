import Game from './Game';
import Writer from '../Writer';
import Serialiser from '../Serialiser';
import { gameJsonWriter } from './GameDataWriter';
import { jsonSerialiser } from '../JsonSerialiser';

export default class GameWriter implements Writer<Game> {
  constructor(
    private serialiser: Serialiser,
    private gameDataWriter: Writer<string>
  ) {}

  async write(game: Game): Promise<void> {
    const gameData = this.serialiser.serialise(game);

    await this.gameDataWriter.write(gameData);
  }
}

export const gameWriter = new GameWriter(jsonSerialiser, gameJsonWriter);
