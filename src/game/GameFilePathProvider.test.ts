import GameFilePathProvider from "./GameFilePathProvider";

test('When it provides the file path then the file path is provided', async () => {
    const filePath = "/file/path";

    const gameFilePathProvider = new GameFilePathProvider(filePath);

    const result = gameFilePathProvider.get();

    expect(result).toBe(filePath);
});