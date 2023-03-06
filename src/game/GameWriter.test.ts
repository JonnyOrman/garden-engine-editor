import { mock } from "jest-mock-extended";
import Serialiser from "../Serialiser";
import Writer from "../Writer";
import Game from "./Game";
import GameWriter from "./GameWriter";

test('When it writes a Game it serialises the Game and writes the data', async () => {
    const game = mock<Game>();

    const gameData = "{\"name\":\"Test Game\"}";

    const serialiser = mock<Serialiser>();
    serialiser.serialise.calledWith(game).mockReturnValue(gameData);

    const gameDataWriter = mock<Writer<string>>();

    const gameWriter = new GameWriter(serialiser, gameDataWriter);

    await gameWriter.write(game);

    expect(gameDataWriter.write).toHaveBeenCalledWith(gameData);
    expect(gameDataWriter.write).toHaveBeenCalledTimes(1);
});