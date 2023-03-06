import { mock } from 'jest-mock-extended';
import Parser from '../Parser';
import Reader from "../Reader";
import Game from './Game';
import GameReader from './GameReader';

test('When it reads a Game it reads the JSON and parses it to a Game', async () => {
    const game = mock<Game>();

    const data = "{\"name\":\"Test Game\"}";

    const gameDataReader = mock<Reader<string>>();
    gameDataReader.read.mockResolvedValue("{\"name\":\"Test Game\"}");

    const dataDeserialiser = mock<Parser>();
    dataDeserialiser.parse.calledWith(data).mockReturnValue(game);

    const gameReader = new GameReader(gameDataReader, dataDeserialiser);

    const result = await gameReader.read();

    expect(result).toBe(game);
});