import { mock } from 'jest-mock-extended';
import Reader from "../Reader";
import JsonGameReader from "./JsonGameReader";

test('When it reads a Game it reads the JSON and parses it to a Game', async () => {
    const gameJsonReader = mock<Reader<string>>();

    gameJsonReader.read.mockResolvedValue("{\"name\":\"Test Game\"}");

    const jsonGameReader = new JsonGameReader(gameJsonReader);

    const result = await jsonGameReader.read();

    expect(result.name).toBe("Test Game");
});