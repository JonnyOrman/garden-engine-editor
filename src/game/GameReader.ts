import { jsonParser } from '../JsonParser';
import Parser from '../Parser';
import Reader from '../Reader';
import Game from './Game';
import { gameJsonReader } from './GameDataReader';

export default class GameReader implements Reader<Game> {
  constructor(private gameDataReader: Reader<string>, private parser: Parser) {}

  async read(): Promise<Game> {
    const gameData = await this.gameDataReader.read();

    const game = this.parser.parse<Game>(gameData);

    return game;
  }
}

export const gameReader = new GameReader(gameJsonReader, jsonParser);
